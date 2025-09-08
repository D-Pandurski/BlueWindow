import { expect, selectors } from "@playwright/test";
import { test } from "../utils/playwright-fixtures.spec";

test("has title", async ({ goToUserCreationPage }) => {});

test.afterEach(async ({ browser }) => {
  await browser.close();
});
