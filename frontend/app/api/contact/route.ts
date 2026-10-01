import nodemailer from 'nodemailer';
import { createContactHandler } from '@/lib/contact';
import { profile } from '@/lib/content';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  const user = process.env.GMAIL_USER;
  const password = process.env.GMAIL_APP_PASSWORD;
  return createContactHandler({
    from: user, to: profile.email, configured: Boolean(user && password),
    sendMail: async mail => {
      const transport = nodemailer.createTransport({ host: 'smtp.gmail.com', port: 587, secure: false, requireTLS: true, auth: { user, pass: password }, connectionTimeout: 5000, greetingTimeout: 5000, socketTimeout: 10000 });
      return transport.sendMail(mail);
    },
  })(request);
}
