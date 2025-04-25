import { Page } from '@playwright/test';
import { MaterialBasePage } from './material-page';
import { emit } from 'process';

export class RegisterPage extends MaterialBasePage {
    xpathUsername: string = '//*[@id="username"]';
    xpathEmail: string = '//*[@id="email"]';
    xpathGenderMale: string = '//*[@id="male"]';
    xpathGenderFemale: string = '//*[@id="female"]';
    getXpathOptionHobby(hobby: "reading" | "traveling" | "cooking" ) {
        return `//*[@id="${hobby}"]`
    }
    xpathSelectInterests: string = '//*[@id="interests"]';
    xpathSelectCountry: string = '//*[@id="country"]';
    xpathDateOfBirth: string = '//*[@id="dob"]';
    xpathProfilePicture: string = '//*[@id="profile"]';
    xpathBiography: string = '//*[@id="bio"]';
    xpathNewsLetter: string = '//*[@id="newsletter"]';
    xpathBtsRegister: string = '//button[contains(text(),"Register")]';


    constructor(page: Page) {
        super(page);
    }

    async gotoRegisterPage() {
        await this.openMaterialPage();
        await this.gotoPage("Register Page");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    };

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    };

    async checkGender(gender: "male" | "female") {
        if (gender == "male") {
            await this.page.locator(this.xpathGenderMale).check();
        };

        if (gender == "female") {
            await this.page.locator(this.xpathGenderFemale).check();
        };
    };

    async checkHobbies(hobby: "reading" | "traveling" | "cooking") {
        await this.page.locator(this.getXpathOptionHobby(hobby)).check();
    };

    async selectInterests(interestValue: "technology" | "science" | "art" | "music" | "sports") {
        await this.page.selectOption(this.xpathSelectInterests,interestValue);
    };

    async selectCountry(countryValue: "usa" | "canada" | "uk" | "australia") {
        await this.page.selectOption(this.xpathSelectCountry,countryValue);
    };

    async fillDateOfBirth(date: string) {
        await this.page.locator(this.xpathDateOfBirth).fill(date);
    };

    async chooseFile(filePath: string) {
        await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
    };

    async fillBiography(bio: string) {
        await this.page.locator(this.xpathBiography).fill(bio);
    };

    async checkNewsletter() {
        await this.page.locator(this.xpathNewsLetter).check();
    };

    async clickBtsRegister() {
        await this.page.locator(this.xpathBtsRegister).click();
    };

    async fillFormRegister(information: {
        username: string,
        email: string,
        gender: "male" | "female",
        hobby: "reading" | "traveling" | "cooking",
        interestValue: "technology" | "science" | "art" | "music" | "sports",
        countryValue: "usa" | "canada" | "uk" | "australia",
        date: string,
        filePath: string,
        bio: string,
    }) {
        await this.fillUsername(information.username);
        await this.fillEmail(information.email);
        await this.checkGender(information.gender);
        await this.checkHobbies(information.hobby);
        await this.selectInterests(information.interestValue);
        await this.selectCountry(information.countryValue);
        await this.fillDateOfBirth(information.date);
        await this.chooseFile(information.filePath);
        await this.fillBiography(information.bio);
        await this.clickBtsRegister();
    }

    async getInfoNewestInTable() {
        const numberOfRows = await this.page.locator("//tbody/tr").count();
        const actualUserName = await this.page.locator(`//tbody/tr[${numberOfRows}]/td[4]`).textContent();
        let userInfo = {
            username: actualUserName,
            email: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[3]`).textContent(),
            information: await this.page.locator(`//tbody/tr[${numberOfRows}]/td[4]`).textContent,
        };

        return userInfo;
    };
}