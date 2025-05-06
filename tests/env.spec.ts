// import { test } from "@playwright/test";

// test('Env variables', async () => {
//     const env = process.env.ENV;
//     console.log(env);

//     let loadingTime: number | undefined;

//     if(process.env.ENV ==='DEV') {
//         loadingTime = Number(process.env.LOADING_TIME_DEV);
//     } else {
//         loadingTime = Number(process.env.LOADING_TIME_PROD);
//     }

//     console.log(loadingTime);
// });

import { EnvConf, test } from '../src/fixture-env'  ;

test('Get env variables', async ({ envConf }) => {
    const timeout = envConf.getValueENVByPrefixKey('LOADING_TIME_');
    console.log(timeout);
});