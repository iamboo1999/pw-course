import { test, request, APIRequestContext, expect } from '@playwright/test';

test('get article', async ({ request }) => {

    const requestURL: string = 'https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0';

    const response = await request.get(requestURL);

    const statusCode:number = response.status();

    console.log(`statusCode: ${statusCode}`);

    const articleCount: number = (await response.json()).articlesCount;
    expect(articleCount).toBe(10);

    console.log(`articlesCount: ${articleCount}`);
    console.log(await response.text());
})

test('login', async ({ request }) => {

    const requestURL: string = 'https://conduit-api.bondaracademy.com/api/users/login';

    const response = await request.post(requestURL,{
        data: {
            "user" : {
                "email": "teovn84@gmail.com",
                "password": "teo@123",
            }
        }
    });

    const statusCode:number = response.status();

    console.log(`statusCode: ${statusCode}`);

    const token: string = (await response.json()).user.token;
    // expect(token).;
    console.log(token);
})