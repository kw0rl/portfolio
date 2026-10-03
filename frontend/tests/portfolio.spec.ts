import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdirSync } from 'node:fs';

for (const width of [360, 390, 768, 1024, 1440]) {
  for (const route of ['/', '/about', '/work/ranaco', '/work/product-catalog']) {
    test(`${route} is readable and accessible at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator('main img').all()) {
        if (await img.isVisible()) {
          await img.scrollIntoViewIfNeeded();
          await expect.poll(() => img.evaluate(element => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        }
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await expect(page.locator('h1')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      mkdirSync('.preview', { recursive: true });
      await page.screenshot({ path: `.preview/${route === '/' ? 'home' : route.replaceAll('/', '-')}-${width}.png`, fullPage: true, animations: 'disabled' });
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(results.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) }))).toEqual([]);
      expect(errors).toEqual([]);
    });
  }
}

test('image dialog supports keyboard close and restores focus', async ({ page }) => {
  await page.goto('/work/ranaco');
  const trigger = page.getByRole('button', { name: /Enlarge image/ }).first();
  await trigger.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close enlarged image' }).first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test('contact form preserves input on failure, prevents duplicate sends, and resets after retry', async ({ page }) => {
  let calls = 0;
  await page.route('**/api/contact', async route => {
    calls++;
    expect(route.request().postDataJSON()).toEqual({ name: 'Test Visitor', email: 'visitor@example.com', message: 'A website project.' });
    await new Promise(resolve => setTimeout(resolve, 300));
    await route.fulfill({ status: calls === 1 ? 502 : 200, contentType: 'application/json', body: JSON.stringify({ message: 'Mock delivery' }) });
  });
  await page.goto('/#contact');
  await page.getByLabel('Your name').fill('Test Visitor');
  await page.getByLabel('Email address', { exact: true }).fill('visitor@example.com');
  await page.getByLabel('What do you have in mind?').fill('A website project.');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('button', { name: 'Sending' })).toBeDisabled();
  await expect(page.getByRole('form', { name: 'Contact Azrul' }).getByRole('alert')).toContainText('couldn\u2019t be sent');
  await expect(page.getByLabel('Your name')).toHaveValue('Test Visitor');
  await expect(page.getByLabel('What do you have in mind?')).toHaveValue('A website project.');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByText('Message sent. Thanks for reaching out!')).toBeVisible();
  await expect(page.getByLabel('Your name')).toHaveValue('');
  expect(calls).toBe(2);
});

test('reduced motion, required form fields, resume, metadata, and direct contact links', async ({ page, request }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  let sent = false;
  await page.route('**/api/contact', route => { sent = true; return route.abort(); });
  await page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('button', { name: /Contact/ }).click();
  await page.getByRole('button', { name: 'Send message' }).click();
  expect(sent).toBe(false);
  await expect(page.getByLabel('Your name')).toBeFocused();
  await expect(page.locator('a[href="mailto:azrulaqim13@gmail.com"]').first()).toBeVisible();
  const resume = await request.get('/resume.pdf');
  expect(resume.ok()).toBe(true);
  expect(resume.headers()['content-type']).toContain('application/pdf');
  const social = await request.get('/opengraph-image');
  expect(social.ok()).toBe(true);
  expect(social.headers()['content-type']).toContain('image/png');
  expect(await (await request.get('/sitemap.xml')).text()).toContain('/work/ranaco');
  expect((await request.post('/api/contact', { data: { name: 'No email', message: 'Invalid request' } })).status()).toBe(400);
});
