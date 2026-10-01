export type ContactMail = { from: string; to: string; replyTo: string; subject: string; text: string; html: string };
type Delivery = { from?: string; to: string; configured: boolean; sendMail: (mail: ContactMail) => Promise<unknown> };
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);

export function createContactHandler(delivery: Delivery) {
  return async (request: Request): Promise<Response> => {
    let input: unknown;
    try {
      const raw = await request.text();
      if (raw.length > 20000) return Response.json({ error: 'Message is too large.' }, { status: 413 });
      input = JSON.parse(raw);
    } catch { return Response.json({ error: 'Invalid request.' }, { status: 400 }); }
    if (!input || typeof input !== 'object' || Array.isArray(input)) return Response.json({ error: 'Invalid contact details.' }, { status: 400 });
    const fields = input as Record<string, unknown>;
    if (typeof fields.name !== 'string' || typeof fields.email !== 'string' || typeof fields.message !== 'string') return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    const name = fields.name.trim();
    const email = fields.email.trim();
    const message = fields.message.trim();
    if (!name || name.length > 100 || /[\r\n]/.test(name) || email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || !message || message.length > 5000) return Response.json({ error: 'Please enter a valid name, email, and message.' }, { status: 400 });
    if (!delivery.configured || !delivery.from) return Response.json({ error: 'Email is temporarily unavailable. Please use the direct email link.' }, { status: 503 });
    try {
      await delivery.sendMail({
        from: delivery.from, to: delivery.to, replyTo: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<h2>Portfolio enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      });
      return Response.json({ message: 'Message sent. Thanks for reaching out!' });
    } catch {
      return Response.json({ error: 'Your message could not be sent. Please try again or email directly.' }, { status: 502 });
    }
  };
}
