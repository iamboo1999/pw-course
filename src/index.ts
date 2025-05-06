import { testExtend } from "./fixture";
import { testRequest } from "./fixture-request";
import { mergeTests } from "@playwright/test";

const test = mergeTests(testExtend, testRequest);

export { test };