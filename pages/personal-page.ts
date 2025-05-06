import { Page } from '@playwright/test';
import { MaterialBasePage } from './material-page';

export class PersonalPage extends MaterialBasePage {
    xpathUsername: string = '//*[@id="username"]';
    xpathEmail: string = '//*[@id="email"]';
    xpathGenderMale: string = '//*[@id="male"]';
    xpathGenderFemale: string = '//*[@id="female"]';
    getXpathOptionHobby(hobby: "reading" | "traveling" | "cooking" ) {
        return `//*[@id="${hobby}"]`
    }
}