import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class DashBoardPage extends BasePage {

    locatorDashBoard: string = "//h1[text()='Dashboard']";
    locatorGlance: string = "//h2[text()='At a Glance']";
    locatorActivity: string = "//h2[text()='Activity']";

    getXpathMenu(menuName) {
        return `//div[@class='wp-menu-name' and text()='${menuName}']`;
    }

    constructor(page: Page) {
        super(page);
    }

    async clickOnMenuName(menuName: string) {
        await this.page.locator(this.getXpathMenu(menuName)).click();
    }

}