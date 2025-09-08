import { test as base, Page } from "@playwright/test";
import { UserProfileCreationPage } from "../ui-components/pages/UserProfileCreationPage";
import { CREATE_USER_PROFILE_URL } from "./enums/PlatrofmURLs";

/* 
    This is a .spec file, containing playwright fixtures to be used in the framework's tests.
    To be able to utilize in test files, use "import { test } from "../utils/playwright-fixtures.spec";" 
*/
export const test = base.extend<{
  goToUserCreationPage: Page;
  userProfileCreationPage: UserProfileCreationPage;
}>({
  // Fixture used to navigate to the User Profile Creation page:
  goToUserCreationPage: async ({ page }, use) => {
    await page.goto(CREATE_USER_PROFILE_URL);
    await use(page);
  },

  /*  
    Fixture used to initialize the User Profile Creation page in tests. 
    When adding the fixture to the test it is not necessary to initialize a page variable.
  */
  userProfileCreationPage: async ({ page }, use) => {
    await use(new UserProfileCreationPage(page));
  },
});
