import { test, expect } from '@playwright/test';
import { time } from 'console';

test( 'Login vào Poli', async ({ page }) => {
    // code của test

    await test.step('Navigate to Poli', async () => {
        await page.goto('https://ai.politetech.com/login');
    });

    await test.step('Login vào Poli', async () => {
        await page.locator('//p[@class="text-[#FFFFFF] text-[14px] leading-[20px] font-semibold"]').click();

    });

    await test.step('Điền email', async () => {
        await page.locator('//input[@id="i0116"]').fill('tuong.nguyen@politetech.com');
        await page.waitForTimeout(100);
        await page.locator('//input[@id="idSIButton9"]').click();
    });

    await test.step('Điền password', async () => {
        await page.locator('//input[@id="i0118"]').fill('Tk0piet123');
        await page.waitForTimeout(100);
        await page.locator('//input[@id="idSIButton9"]').click();
    });

    await test.step('Stay signed in', async () => {
        await page.locator('//input[@id="KmsiCheckboxField"]').setChecked(true);
        await page.waitForTimeout(100);
        await page.locator('//input[@id="idSIButton9"]').click();
    });

    await test.step('Login successful', async () => {
        await expect(page.locator('//p[@class="text-[24px] md:text-[32px] font-semibold text-light-text dark:text-dark-text"]'  
        )).toBeVisible()
    });

})