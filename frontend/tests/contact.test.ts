import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createContactHandler, type ContactMail } from '../lib/contact';

const valid = { name: 'Alex Tan', email: 'alex@example.com', message: 'Hello, I have a project in mind.' };
const request = (payload: unknown) => new Request('http://localhost/api/contact', { method: 'POST', body: JSON.stringify(payload) });
function setup(configured = true, failure = false) {
  const sent: ContactMail[] = [];
  const handler = createContactHandler({ from: 'sender@example.com', to: 'azrulaqim13@gmail.com', configured, sendMail: async mail => { if (failure) throw new Error('SMTP secret must not escape'); sent.push(mail); } });
  return { handler, sent };
}

test('delivers to the fixed recipient, uses Reply-To, trims input and escapes HTML', async () => {
  const { handler, sent } = setup();
  const response = await handler(request({ name: ' Alex <Tan> ', email: ' alex@example.com ', message: '<script>alert("hello")</script>\nThanks & goodbye' }));
  assert.equal(response.status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, 'azrulaqim13@gmail.com');
  assert.equal(sent[0].from, 'sender@example.com');
  assert.equal(sent[0].replyTo, 'alex@example.com');
  assert.match(sent[0].subject, /Alex <Tan>/);
  assert.ok(!sent[0].html.includes('<script>'));
  assert.match(sent[0].html, /&lt;script&gt;/);
  assert.match(sent[0].html, /&amp;/);
  assert.match(sent[0].text, /<script>/);
});

test('rejects malformed JSON and invalid input without sending', async () => {
  const { handler, sent } = setup();
  const bad = [null, [], {}, { ...valid, name: 42 }, { ...valid, name: ' ' }, { ...valid, name: 'A\r\nB' }, { ...valid, email: 'invalid' }, { ...valid, email: 'x@example.com\r\nBcc: another@example.com' }, { ...valid, message: ' ' }, { ...valid, message: {} }, { ...valid, name: 'a'.repeat(101) }, { ...valid, email: 'a'.repeat(250) + '@example.com' }, { ...valid, message: 'a'.repeat(5001) }];
  for (const input of bad) assert.equal((await handler(request(input))).status, 400);
  assert.equal((await handler(new Request('http://localhost/api/contact', { method: 'POST', body: '{broken' }))).status, 400);
  assert.equal(sent.length, 0);
});

test('accepts field limits and rejects oversized requests', async () => {
  const { handler, sent } = setup();
  assert.equal((await handler(request({ ...valid, name: 'a'.repeat(100), message: 'x'.repeat(5000) }))).status, 200);
  assert.equal((await handler(request({ ...valid, message: 'x'.repeat(20001) }))).status, 413);
  assert.equal(sent.length, 1);
});

test('reports missing configuration without attempting delivery', async () => {
  const { handler, sent } = setup(false);
  assert.equal((await handler(request(valid))).status, 503);
  assert.equal(sent.length, 0);
});

test('returns a safe error on delivery failure and permits retry', async () => {
  let attempts = 0;
  const handler = createContactHandler({ from: 'sender@example.com', to: 'azrulaqim13@gmail.com', configured: true, sendMail: async () => { if (++attempts === 1) throw new Error('SMTP secret'); } });
  const failed = await handler(request(valid));
  assert.equal(failed.status, 502);
  assert.ok(!(await failed.text()).includes('SMTP secret'));
  assert.equal((await handler(request(valid))).status, 200);
  assert.equal(attempts, 2);
});
