import { test, expect } from '@playwright/test';

test( 'test case name', async ({ page }) => {
    // code của test

    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click vào bài 1', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    });

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

test( 'Add to do list', async ({ page }) => {
    // code của test

    await test.step('ĐI đến trang to do page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page. locator('//a[@href="03-xpath-todo-list.html"]'). click();
    });

    await test.step('Thêm mới 100 todo item có nội dung "Todo <i>"', async () => {
        for (let i = 1; i <=100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
            await page.waitForTimeout(100);
        }
    });
    debugger;

    await test.step('Xóa các todo có số lẻ', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
                await page.waitForTimeout(100);
            }
        }
    });
    debugger;

})

test( 'Add personal notes', async ({ page }) => {
    const notes = [
        { title: 'Note 1', content: 'Content 1' },
        { title: 'Note 2', content: 'Content 2' },
        { title: 'Note 3', content: 'Content 3' },
        { title: 'Note 4', content: 'Content 4' },
        { title: 'Note 5', content: 'Content 5' },
        { title: 'Note 6', content: 'Content 6' },
        { title: 'Note 7', content: 'Content 7' },
        { title: 'Note 8', content: 'Content 8' },
        { title: 'Note 9', content: 'Content 9' },
        { title: 'Note 10', content: 'Content 10' },
    ];

    await test.step('Đi đến trang personal notes', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    });

    await test.step('Thêm mới 10 note có nội dung là tiêu đề và nội dung', async () => {

        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
            await page.waitForTimeout(100);
        }
    });

    await test.step('Thực hiện search theo tiêu đề', async () => {
        await page.locator('//input[@id="search"]').fill('1');
        await page.waitForTimeout(100);
    });

})