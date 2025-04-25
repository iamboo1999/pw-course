import { expect, test } from "@playwright/test";
import { RegisterPage } from "../../pages/register-page";

let date: string = '1999-10-11';
let username: string = 'tuong';
let email: string = 'nguyentuong199@gmail.com';
let description: string = 'thực hành bài test 1';
let hobby: "reading" | "traveling" | "cooking" = "reading";
let gender: "male" | "female" = "male";
let filePath: string = 'data-test/luffy.jpeg'
let country: "usa" | "canada" | "uk" | "australia" =  "usa";
let interest: "technology" | "science" | "art" | "music" | "sports" = "sports";

test('Exercise 1: Register Page', async ({ page }) => {
    let registerPage = new RegisterPage(page);

    await test.step('Truy cập trang Register Page', async () => {
        await registerPage.gotoRegisterPage();
    });

    await test.step('Nhập đầy đủ các thông tin, click button register', async () => {
        //fill info
        await registerPage.fillUsername(username);
        await registerPage.fillEmail(email);
        await registerPage.checkGender(gender);
        await registerPage.checkHobbies(hobby);
        await registerPage.selectInterests(interest);
        await registerPage.selectCountry(country);
        await registerPage.chooseFile(filePath);
        await registerPage.fillDateOfBirth(date);
        await registerPage.fillBiography(description);
        await registerPage.checkNewsletter();

        //click button register
        await registerPage.clickBtsRegister();
    });

    await test.step('Kiểm tra nội dung đã đăng kí ở bảng là đúng', async () => {
        const userInfo = await registerPage.getInfoNewestInTable();
        const actualUserName = userInfo.username;
        const actualEmail = userInfo.email;
        const actualInformation = userInfo.information;

        //verify username
        expect(actualUserName).toBe(username);

        //verify email
        expect(actualEmail).toBe(email);

        //verify information
        expect(actualInformation).toContain(gender.toLowerCase());
        expect(actualInformation).toContain(hobby);
        expect(actualInformation).toContain(country);
        expect(actualInformation).toContain(date);
        expect(actualInformation).toContain(description);
        expect(actualInformation).toContain('Yes');
    });
})

