import { Page } from "@playwright/test";
import { RegisterPage } from "../../pages/register-page";
import { PersonalPage } from "../../pages/personal-page";

export class PomManager {
    page: Page
    constructor( page ) {
        this.page = page;
    }

    getRegisterPage() {
        return new RegisterPage(this.page);
    };

    getPersonalPage() {
        return new PersonalPage(this.page);
    }

}