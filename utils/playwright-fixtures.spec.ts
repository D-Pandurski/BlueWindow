import { test as base, Page } from "@playwright/test";

/* This is a .spec file, containing playwright fixtures to be used in the framework's tests*/
export const test = base.extend<{
    goToUserCreationPage: Page;
}>({
    goToUserCreationPage: async ({ page }, use) => {
        await page.goto("https://qa-assessment.pages.dev/");
        await use(page);
    },
});
