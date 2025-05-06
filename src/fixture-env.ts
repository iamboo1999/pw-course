import { test as base } from '@playwright/test';

export class EnvConf {
    getValueENVByPrefixKey(prefixKey: string) {
        let env = 'PROD';

        if (process.env.ENV === 'DEV') {
            env = 'DEV'
        };

        return process.env[`${prefixKey}${env}`];
    }
}

const test = base.extend<{ envConf: EnvConf }> ({
    envConf: async ({ }, use) => {
        // Khởi tạo đối tượng ENV config
        const envConf = new EnvConf();

        await use(envConf);
    },
});

export { test }