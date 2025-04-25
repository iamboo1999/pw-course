import {expect, test} from '@playwright/test'
import { LoginPage } from '../practice1/login-page'
import { DashBoardPage } from '../practice1/dashboard-page';

let userCredential = {
    userName: "k12-mentor",
    password: "M8kPNkjOoph4hYE#g%ERf0tr"
};

let url = 'https://pw-practice-dev.playwrightvn.com/wp-login.php?redirect_to=https%3A%2F%2Fpw-practice-dev.playwrightvn.com%2Fwp-admin%2F&reauth=1';

test('pom login page', async({page}) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashBoardPage: DashBoardPage = new DashBoardPage(page);

    await test.step('navigate to base url', async () => {
        await loginPage.navigateTo(url);
    });

    await test.step('input username and password', async() => {
        await loginPage.fillUserName(userCredential.userName);
        await loginPage.fillPassword(userCredential.password);

        const actualUserName = await loginPage.page.locator (
            loginPage.locatorUsername).inputValue();

        const actualPassword = await loginPage.page.locator (
            loginPage.locatorPassword).inputValue();

        await expect(actualUserName).toEqual(userCredential.userName);
        await expect(actualPassword).toEqual(userCredential.password);
    });

    await test.step('click button login', async() => {
        await loginPage.clickOnLoginButton();

        await expect(dashBoardPage.page.locator(dashBoardPage.locatorDashBoard)).toBeVisible();

        await expect(dashBoardPage.page.locator(dashBoardPage.locatorActivity)).toBeVisible();

        await expect(dashBoardPage.page.locator(dashBoardPage.locatorGlance)).toBeVisible();

    });
})