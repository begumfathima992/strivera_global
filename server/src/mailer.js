import nodemailer from 'nodemailer';

const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const RESEND_URL = 'https://api.resend.com/emails';
const RESEND_TIMEOUT_MS = 15000;

/** Which transport sends the emails: "resend-api" (HTTPS), "smtp" or "console" (dev fallback). */
export function getMailTransportName() {
  if (process.env.RESEND_API_KEY) return 'resend-api';
  if (process.env.SMTP_HOST) return 'smtp';
  return 'console';
}

let transporter;

export function getTransporter() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  if (!SMTP_HOST) {
    // Development fallback: no SMTP configured, so emails are printed to the console instead of sent.
    if (process.env.NODE_ENV === 'production') throw new Error('SMTP_HOST is not configured');
    console.warn('[mailer] SMTP not configured – emails will be logged to the console (dev only).');
    transporter = nodemailer.createTransport({ jsonTransport: true });
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === 'true', // true for port 465
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
  });
  return transporter;
}

// Sends one email through Resend's HTTP API (works where outbound SMTP ports are blocked).
async function sendViaResend({ from, to, replyTo, subject, html, text }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);
  let res;
  try {
    res = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], ...(replyTo && { reply_to: replyTo }), subject, html, text }),
      signal: controller.signal
    });
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(`Resend API timed out after ${RESEND_TIMEOUT_MS / 1000}s`);
    throw new Error(`Resend API request failed: ${err.message}`);
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(`Resend API error ${res.status}: ${body.message || body.name || res.statusText}`);
  }
  return res.json().catch(() => ({}));
}

function sendMessage(message) {
  if (process.env.RESEND_API_KEY) return sendViaResend(message);
  return getTransporter().sendMail(message);
}

const rows = (data) =>
  [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Company', data.company || '—'],
    ['Service', data.service],
    ['Budget', data.budget || '—'],
    ['Sent from page', data.page || '—']
  ];

export async function sendEnquiryEmails(kind, data) {
  const from = process.env.MAIL_FROM || 'Strivera Global <info@striveraglobal.co.uk>';
  const inbox = process.env.MAIL_TO;
  if (!inbox && process.env.NODE_ENV === 'production') throw new Error('MAIL_TO is not configured');

  const label = kind === 'quote' ? 'Quote request' : 'Contact enquiry';
  const tableHtml = rows(data)
    .map(([k, v]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${k}</th><td>${escapeHtml(v)}</td></tr>`)
    .join('');
  const text = rows(data).map(([k, v]) => `${k}: ${v}`).join('\n');

  // 1. Notify the company inbox. If this fails the enquiry is lost, so the error goes back to the visitor.
  const internal = await sendMessage({
    from,
    to: inbox || 'info@striveraglobal.co.uk',
    replyTo: `${data.name} <${data.email}>`,
    subject: `${label} from ${data.name} – ${data.service}`,
    text: `${label}\n\n${text}\n\nMessage:\n${data.message}`,
    html: `<h2>${label}</h2><table>${tableHtml}</table><h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`
  });

  // 2. Confirmation to the person who submitted the form.
  // The enquiry has already been delivered, so a failure here is logged rather than reported to the visitor.
  try {
    await sendMessage({
      from,
      to: data.email,
      replyTo: inbox || undefined,
      subject: 'We’ve received your message – Strivera Global',
      text: `Hi ${data.name},\n\nThank you for contacting Strivera Global. We’ve received your ${kind === 'quote' ? 'quote request' : 'message'} about "${data.service}" and will reply within one working day.\n\nA copy of your message:\n${data.message}\n\nStrivera Global\nCustom software, built to fit your business.`,
      html: `<p>Hi ${escapeHtml(data.name)},</p><p>Thank you for contacting Strivera Global. We’ve received your ${kind === 'quote' ? 'quote request' : 'message'} about <strong>${escapeHtml(data.service)}</strong> and will reply within one working day.</p><p><strong>A copy of your message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p><p>Strivera Global<br>Custom software, built to fit your business.</p>`
    });
  } catch (err) {
    console.error(`[${kind}] confirmation email failed (enquiry was delivered):`, err.message);
  }

  if (getMailTransportName() === 'console') {
    console.log('[mailer] (dev) internal email:', JSON.parse(internal.message).subject);
    console.log('[mailer] (dev) confirmation email to:', data.email);
  }
}
