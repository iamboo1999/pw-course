import { test, expect } from '@playwright/test';

test("Test case 1", async ({ page }) => {

});

test("Test case 2", async ({ page }) => {

});

test.describe("Test suite 1/group 1", () => {

    let emailXpath: string
    let passwordXpath: string
    let loginBtn: string
    let errorXpath: string
    let invalidCredential: {
        email: string,
        password: string
    }

    test.beforeAll(() => {
         emailXpath = '//input[@id="email"]';
         passwordXpath = '//input[@id="password"]';
         loginBtn = '//input[@id="ctl00_mainContent_login1_LoginCtrl_Login"]';
         errorXpath = '//h3[@class="container alert alert-danger"]';
         invalidCredential = {
            email: 'wrong email',
            password: 'wrong password'
         }
    
    }); // This will run before all tests in this group

    test.beforeEach( async ({ page }) => {
        // Go to login page
       await page.goto("https://nettruyenr.com/Secure/Login.aspx");

    }); // This will run before each test in this group

    test.afterAll(({ page }) => {
  
    
    }); // This will run after all tests in this group

    test.afterEach(({ page }) => {
  
    }); // This will run after each test in this group


  test("Login fail", async ({ page }) => {
    await test.step("nhập username và password bị sai", async () => {

        // Điền username và password vào form login
        await page.locator(emailXpath).fill(invalidCredential.email);
        await page.locator(passwordXpath).fill(invalidCredential.password);

        // Kiểm tra xem username và password đã được điền đúng chưa
        const actualEmail = await page.locator(emailXpath).inputValue();
        const actualPassword = await page.locator(passwordXpath).inputValue();
        console.log(actualEmail);
        console.log(actualPassword);

        // Kiểm tra xem username và password có đúng không
        expect(actualEmail).toEqual(invalidCredential.email);
        expect(actualPassword).toEqual(invalidCredential.password);

    });

    await test.step("Click vào nút login", async () => {

        // Click vào nút login
        await page.locator(loginBtn).click();
        await expect(page.locator(errorXpath)).toBeVisible();

    });
  });

  test("Login pass", async () => {
    console.log('Test case 4')

  });
}); 