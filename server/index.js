const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const resendApiKey = process.env.RESEND_API_KEY || '';
const fromEmail = process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>';
const toEmail = process.env.CONTACT_TO || 'amarnandeshwar786@gmail.com';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

app.use(express.json({ limit: '32kb' }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200'
  })
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests. Please try again later.' }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name = '', email = '', comment = '', hp = '' } = req.body || {};

  if (hp && String(hp).trim().length > 0) {
    return res.status(200).json({ ok: true });
  }

  const safeName = String(name).trim();
  const safeEmail = String(email).trim();
  const safeComment = String(comment).trim();

  if (!safeName || !safeEmail || !safeComment) {
    return res.status(400).json({ message: 'Name, email and comment are required.' });
  }

  if (!isValidEmail(safeEmail)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  if (!resend) {
    return res.status(500).json({ message: 'Server mail is not configured yet.' });
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: safeEmail,
      subject: `New portfolio message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nComment:\n${safeComment}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Comment:</strong></p>
        <p>${safeComment.replace(/\n/g, '<br>')}</p>
      `
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to send email.',
      detail: error && error.message ? error.message : 'Unknown server error'
    });
  }
});

app.get('/', (_req, res) => {
  res.status(200).json({
    ok: true,
    message: 'Contact API is running.',
    endpoints: ['/api/health', '/api/contact', '/api/config']
  });
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get('/api/config', (_req, res) => {
  res.status(200).json({
    ok: true,
    resendConfigured: Boolean(resendApiKey),
    fromConfigured: Boolean(fromEmail),
    toConfigured: Boolean(toEmail)
  });
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
