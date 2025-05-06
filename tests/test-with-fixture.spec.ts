import { testExtend } from "../src/fixture";

// test('Using fixture', async ({ dashboard }) => {
//     console.log('Step trong TCs');
// });

testExtend.beforeEach( async () => {
    console.log('Before Each')
});

testExtend.afterEach( async () => {
    console.log('After Each')
});

testExtend('Using fixture', async ({ dashboard }) => {
    console.log('Step trong TCs');
});