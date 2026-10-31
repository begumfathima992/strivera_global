import nodemailer from 'nodemailer';

const escapeHtml = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

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
  const t = getTransporter();
  const from = process.env.MAIL_FROM || 'Strivera Global <info@striveraglobal.co.uk>';
  const inbox = process.env.MAIL_TO;
  if (!inbox && process.env.NODE_ENV === 'production') throw new Error('MAIL_TO is not configured');

  const label = kind === 'quote' ? 'Quote request' : 'Contact enquiry';
  const tableHtml = rows(data)
    .map(([k, v]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${k}</th><td>${escapeHtml(v)}</td></tr>`)
    .join('');
  const text = rows(data).map(([k, v]) => `${k}: ${v}`).join('\n');

  // 1. Notify the company inbox
  const internal = await t.sendMail({
    from,
    to: inbox || 'info@striveraglobal.co.uk',
    replyTo: `${data.name} <${data.email}>`,
    subject: `${label} from ${data.name} – ${data.service}`,
    text: `${label}\n\n${text}\n\nMessage:\n${data.message}`,
    html: `<h2>${label}</h2><table>${tableHtml}</table><h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`
  });

  // 2. Confirmation to the person who submitted the form
  const confirmation = await t.sendMail({
    from,
    to: data.email,
    replyTo: inbox || undefined,
    subject: 'We’ve received your message – Strivera Global',
    text: `Hi ${data.name},\n\nThank you for contacting Strivera Global. We’ve received your ${kind === 'quote' ? 'quote request' : 'message'} about "${data.service}" and will reply within one working day.\n\nA copy of your message:\n${data.message}\n\nStrivera Global\nCustom software, built to fit your business.`,
    html: `<p>Hi ${escapeHtml(data.name)},</p><p>Thank you for contacting Strivera Global. We’ve received your ${kind === 'quote' ? 'quote request' : 'message'} about <strong>${escapeHtml(data.service)}</strong> and will reply within one working day.</p><p><strong>A copy of your message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p><p>Strivera Global<br>Custom software, built to fit your business.</p>`
  });

  if (t.options?.jsonTransport) {
    console.log('[mailer] (dev) internal email:', JSON.parse(internal.message).subject);
    console.log('[mailer] (dev) confirmation email to:', data.email);
  }
}
