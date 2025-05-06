import { test, expect } from '@playwright/test';

test ('Visual compare', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect (page).toHaveScreenshot('homepage.png');
});

test ('test-vs02', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    const containerLocator = page.locator('div.container');
    await expect (containerLocator).toHaveScreenshot('homepage-01.png')
})