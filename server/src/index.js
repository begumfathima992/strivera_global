import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { enquirySchema } from './validation.js';
import { sendEnquiryEmails } from './mailer.js';

const app = express();
const PORT = Number(process.env.PORT) || 5001;
// 127.0.0.1 behind Nginx; set HOST=0.0.0.0 on platforms like Render.
const HOST = process.env.HOST || '127.0.0.1';
const allowedOrigins = (process.env.SITE_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

// Behind Nginx: trust the first proxy so rate limiting sees the real client IP.
app.set('trust proxy', Number(process.env.TRUST_PROXY ?? 1));
app.disable('x-powered-by');

app.use(helmet());
app.use(
  cors({
    origin(origin, cb) {
      // Same-origin requests (via Nginx) and server-to-server calls send no Origin header.
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error('Origin not allowed'));
    },
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
  })
);
app.use(express.json({ limit: '20kb' }));

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: Number(process.env.RATE_LIMIT_MAX) || 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a few minutes and try again.' }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

const handler = (kind) => async (req, res) => {
  const parsed = enquirySchema.safeParse(req.body);
  if (!parsed.success) {
    const fields = Object.fromEntries(parsed.error.issues.map((i) => [i.path.join('.'), i.message]));
    return res.status(400).json({ error: 'Please check the form and try again.', fields });
  }
  const data = parsed.data;

  // Honeypot filled in: pretend success so bots learn nothing, but send nothing.
  if (data.website) return res.json({ ok: true });

  try {
    await sendEnquiryEmails(kind, data);
    return res.json({ ok: true });
  } catch (err) {
    console.error(`[${kind}] email failed:`, err.message);
    return res.status(502).json({ error: 'Sorry, we could not send your message right now.' });
  }
};

app.post('/api/quote', formLimiter, handler('quote'));
app.post('/api/contact', formLimiter, handler('contact'));

app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler: malformed JSON, oversized bodies, blocked origins.
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err.type === 'entity.too.large') return res.status(413).json({ error: 'Your message is too long.' });
  if (err.type === 'entity.parse.failed') return res.status(400).json({ error: 'Invalid request.' });
  if (err.message === 'Origin not allowed') return res.status(403).json({ error: 'Forbidden' });
  console.error(err);
  return res.status(500).json({ error: 'Something went wrong.' });
});

app.listen(PORT, HOST, () => {
  console.log(`Strivera Global API listening on http://${HOST}:${PORT} (allowed origins: ${allowedOrigins.join(', ')})`);
});
