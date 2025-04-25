import { Locator, Page } from '@playwright/test';

class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
    };

    async openMaterialPage() {
        // await this.page.goto(`https://material.playwrightvn.com/`);
    };

    async gotoPage(pageName: string) {
        // await this.page.locator(`//a[contains(text(),'${pageName}')]`).click();
    };
}

class RegisterPage extends MaterialBasePage {
    xpathUsername: string;
    xpathEmail: string;
    xpathGenderMale: string;
    xpathGenderFemale: string;

    constructor(page: Page) {
        super(page);
    }

    async fillUsername() {

    };

    async fillEmail() {

    };

    async checkGender(gender: string){

    };
}