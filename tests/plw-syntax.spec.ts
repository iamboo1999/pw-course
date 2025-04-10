import { test, expect } from '@playwright/test';

test( 'test case name', async ({ page }) => {
    // code của test

    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click vào bài 1', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    })

    await test.step('Fill information', async () => {
        await page.locator('//input[@id="username"]').fill('PlaywrightVN');

        await page.locator('//input[@id="email"]').pressSequentially('tuong@gmail.com', {
            delay: 100
        });

        let isChecked = await page.locator('//input[@id="male"]').isChecked();
        console.log(isChecked); // false
        
        await page.locator('//input[@id="male"]').check();

        isChecked = await page.locator('//input[@id="male"]').isChecked()
        console.log(isChecked); // true

        await page.locator('//input[@id="female"]').setChecked(true);

        isChecked = await page.locator('//input[@id="female"]').isChecked()
        console.log(isChecked); // true

        await page.locator('//input[@id="reading"]').setChecked(true);
        isChecked = await page.locator('//input[@id="reading"]').isChecked()

        await page.locator('//select[@id="country"]').selectOption({
            value: 'uk'
        });
 
        await page.locator('//input[@id="profile"]').setInputFiles('data-test/luffy.jpeg');

    })

})


test( 'xử lý mouse event', async ({ page }) => {
    // code của test

    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click vào bài 1', async () => {
        await page.locator('//a[@href="018-mouse.html"]').click();
    })

    // await test.step('', async () => {
    //     await page.locator('//div[@id="clickArea"]').dblclick();
    // })

    // await test.step('', async () => {
    //     await page.locator('//div[@id="clickArea"]').click({
    //         button: 'left'
    //     });
    // })

    // await test.step('', async () => {
    //     await page.locator('//div[@id="clickArea"]').click({
    //         modifiers: ['Shift']
    //     });
    // })

    await test.step('', async () => {
        await page.locator('//div[@id="clickArea"]').click({
            clickCount: 10
        });
    })


})