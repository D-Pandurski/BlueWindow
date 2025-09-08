import { expect } from "@playwright/test";
import { test } from "../../../../utils/playwright-fixtures.spec";
import { userTemplateFactory } from "../../../../ui-components/object-templates/UserTemplate";
import { generateAlphanumeric } from "../../../../helpers/Datagenerators";

test(`Verify the correct elements are displayed in the "User Profile Creation" page`, async ({
  goToUserCreationPage,
  userProfileCreationPage,
  page,
}) => {
  await expect(page.getByText("First Name (mandatory):")).toBeVisible();
  await expect(userProfileCreationPage.firstNameInput).toBeVisible();

  await expect(page.getByText("Last Name (mandatory):")).toBeVisible();
  await expect(userProfileCreationPage.lastNameInput).toBeVisible();

  await expect(page.getByText("Email (mandatory):")).toBeVisible();
  await expect(userProfileCreationPage.emailInput).toBeVisible();

  await expect(page.getByText("Password (mandatory):", { exact: true })).toBeVisible();
  await expect(userProfileCreationPage.passwordInput).toBeVisible();

  await expect(page.getByText("Confirm Password (mandatory):")).toBeVisible();
  await expect(userProfileCreationPage.confirmPasswordInput).toBeVisible();

  await expect(page.getByText("Gender (optional):")).toBeVisible();
  await expect(page.getByText("Male", { exact: true })).toBeVisible();
  await expect(userProfileCreationPage.genderMaleRadioButton).toBeVisible();
  await expect(page.getByText("Female")).toBeVisible();
  await expect(userProfileCreationPage.genderFemaleRadioButton).toBeVisible();
  await expect(page.getByText("Prefer not to say")).toBeVisible();
  await expect(userProfileCreationPage.genderUndefinedRadioButton).toBeVisible();

  await expect(page.getByText("Date ofBirth (optional):")).toBeVisible();
  await expect(userProfileCreationPage.dateOfBirthInput).toBeVisible();

  await expect(page.getByText("Phone Number (optional):")).toBeVisible();
  await expect(userProfileCreationPage.phoneNumberInput).toBeVisible();

  await expect(page.getByText("Address (optioal):")).toBeVisible();
  await expect(userProfileCreationPage.addressInput).toBeVisible();

  await expect(page.getByText("LinkedIn URL (optional):")).toBeVisible();
  await expect(userProfileCreationPage.linkedInInput).toBeVisible();

  await expect(page.getByText("GitHub URL (optional):")).toBeVisible();
  await expect(userProfileCreationPage.gitHubInput).toBeVisible();

  await expect(userProfileCreationPage.submitButton).toBeVisible();
});

test("Verify it is possible to create a new user profile - Mandatory parameters only", async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_PASSOWRD = generateAlphanumeric(10);
  const USER_TEMPALTE = userTemplateFactory({
    password: USER_PASSOWRD,
    confirmPassword: USER_PASSOWRD,
    gender: null,
    dateOfBirth: null,
    phoneNumber: null,
    address: null,
    linkedInURL: null,
    gitHubURL: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await userProfileCreationPage.submitButton.click();
  await expect(userProfileCreationPage.successMessage).toBeVisible();
});

test("Verify it is possible to create a new user profile - All parameters", async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_PASSOWRD = generateAlphanumeric(10);
  const USER_TEMPALTE = userTemplateFactory({
    password: USER_PASSOWRD,
    confirmPassword: USER_PASSOWRD,
    dateOfBirth: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await userProfileCreationPage.submitButton.click();
  await expect(userProfileCreationPage.successMessage).toBeVisible();
});
