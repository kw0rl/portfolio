import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for (const width of [390, 1440]) {
  test(`wheel navigation and independent carousel at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Main navigation', exact: true });
    await expect(page.locator('h1')).toContainText('I build for');
    await page.screenshot({ path: `.preview/playground-home-${width}.png`, animations: 'disabled' });
    await nav.getByRole('button', { name: /Work/ }).click();
    await expect(page.locator('.project-caption h2')).toHaveText('Ranaco programmes');
    await page.getByRole('button', { name: 'Next project', exact: true }).click();
    await expect(page.locator('.project-caption h2')).toHaveText('Product Catalog');
    await expect(page).toHaveURL(/#works$/);
    await page.screenshot({ path: `.preview/playground-work-${width}.png`, animations: 'disabled' });
    await nav.getByRole('button', { name: /About/ }).click();
    await expect(page.locator('h1')).toContainText('Curious mind.');
    await nav.getByRole('button', { name: /Work/ }).click();
    await expect(page.locator('.project-caption h2')).toHaveText('Product Catalog');
    for (const name of ['Home','Work','About','Contact']) {
      await nav.getByRole('button', { name: new RegExp(name) }).click();
      await page.evaluate(async () => { await Promise.all(document.getAnimations().map(animation => animation.finished.catch(() => {}))); });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa']).analyze();
      expect(results.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) }))).toEqual([]);
    }
  });
}
test('wheel advances one section and keyboard returns', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.mouse.move(900, 450);
  await page.mouse.wheel(0, 180);
  await expect(page).toHaveURL(/#works$/);
  await page.locator('main').focus();
  await page.keyboard.press('ArrowUp');
  await expect(page.locator('h1')).toContainText('I build for');
});
test('deep link and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#contact');
  await expect(page.getByLabel('Your name')).toBeVisible();
  expect(await page.locator('.scene-content').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
});
