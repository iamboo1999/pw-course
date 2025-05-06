import { test, APIRequestContext } from '@playwright/test';

// Tạo 1 testFixture với fixture Dashboard: Luôn login trước khi chạy

const testRequest =  test.extend <{ authRequest: APIRequestContext }> ({
    authRequest: async ({ request }, use) => {
        //Before fixture
        // Code thực hiện login = API -> Lấy token và gán vào Page
        console.log('Before fixture request');

        // Code trong TCs
        await use(request);

        //After fixture
        console.log('After fixture request');
    }
});

export { testRequest };