import { test, APIResponse, request, expect } from '@playwright/test';
import { ConduitAPI } from './02-conduit-api';


let title: string = 'apitesting1a';
let description: string = 'create article';
let body: string = 'hello';
let tagList: string[] = ['vn,21,tuong'];

const baseURL: string = "https://conduit-api.bondaracademy.com/api";
const user = {
    email: 'nguyentuong199@gmail.com',
    username: 'tuong',
    password: 'abc123@',
};

test('SigUp a new account', async ({ request}) => {
    let conduitAPI: ConduitAPI = new ConduitAPI(request, baseURL);

    const response: APIResponse = await conduitAPI.sigUp(user.email, user.password, user.username);

    //verify status code
    expect(response.status()).toBe(201);

    //verify data response
    const resBody = await response.json();
    const actualEmail: string = resBody.user.email;
    const actualUsername: string = resBody.user.username;

    expect(actualEmail).toBe(user.email);
    expect(actualUsername).toBe(user.username);

    console.log(actualEmail, actualUsername);
})

test('Login', async ({ request }) =>{
    let conduitAPI: ConduitAPI = new ConduitAPI(request, baseURL);

    let response: APIResponse = await conduitAPI.logIn(user.email, user.password);

    //verify status code
    expect(response.status()).toBe(200);

    //verify data response
    let resBody = await response.json();
    const token: string = resBody.user.token;
    
    expect(token).not.toBeNull();
    console.log(token);

    await conduitAPI.getToken(user.email, user.password);
    response = await conduitAPI.createNewArticle(title, description, body, tagList);

    expect(response.status()).toBe(201);

    resBody = await response.json();

    // get slug article
    let slug = resBody.article.slug;
    console.log(slug);
})

test('Create new article', async ({ request}) => {
    let conduitAPI: ConduitAPI = new ConduitAPI(request, baseURL);

    await conduitAPI.getToken(user.email, user.password);
    const response = await conduitAPI.createNewArticle(title, description, body, tagList);

    let slug = (await response.json()).article.slug;
    console.log(slug);
})
