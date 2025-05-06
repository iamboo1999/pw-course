// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Recording...
// });

// npx playwright codegen <url>
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('heading', { name: 'Tài liệu học automation test' }).click();
  await expect(page.getByRole('heading', { name: 'Tài liệu học automation test' })).toBeVisible();
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username:' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tuong');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('nguyuentuong199@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await expect(page.getByRole('checkbox', { name: 'Reading' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.getByRole('checkbox', { name: 'Traveling' }).check();
});

