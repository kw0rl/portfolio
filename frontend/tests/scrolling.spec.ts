import { test, expect } from '@playwright/test';

test('wheel scrolling settles and keeps the island synchronized', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/lenis/);
  await page.mouse.move(500, 400);
  await page.mouse.wheel(0, 500);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(450);
  await expect(page.locator('.site-header')).toHaveClass(/is-compact/);
  await expect.poll(() => page.locator('html').getAttribute('class')).not.toContain('lenis-scrolling');
});

test('reduced motion can disable smoothing without a reload', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/lenis/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('html')).not.toHaveClass(/lenis/);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(page.locator('html')).toHaveClass(/lenis/);
});
