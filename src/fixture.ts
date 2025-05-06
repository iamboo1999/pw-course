// tạo 1 testFixture với fixture Dashboard: luôn login trước khi chạy

import { Page, test } from '@playwright/test';

const testExtend = test.extend <{ dashboard: Page }> ({
    dashboard: async ({ page }, use) => {
        //Before each
        console.log( 'Before each - fixture'),

        //Steps trong TCs
        await use (page);

        //After each
        console.log('After each - fixture')
    },
});

export { testExtend };

