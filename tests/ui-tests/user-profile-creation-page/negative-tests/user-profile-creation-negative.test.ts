import { generateAlphanumeric } from "../../../../helpers/Datagenerators";
import { userTemplateFactory } from "../../../../ui-components/object-templates/UserTemplate";
import { test } from "../../../../utils/playwright-fixtures.spec";
import { ErrorMessages } from "../../../../utils/enums/ErrorMessages";

let userPassword: string;

test.beforeEach(async ({}) => {
  userPassword = generateAlphanumeric(10);
});

test(`Verify it is not possible to create a user without inputting data into the "First Name" field`, async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_TEMPALTE = userTemplateFactory({
    firstName: null,
    password: userPassword,
    confirmPassword: userPassword,
    gender: null,
    dateOfBirth: null,
    phoneNumber: null,
    address: null,
    linkedInURL: null,
    gitHubURL: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await Promise.all([
    userProfileCreationPage.submitButton.click(),
    userProfileCreationPage.verifyBrowserErrorMessage(ErrorMessages.FIRST_NAME_MUST_BE_FILLED),
  ]);
});

test(`Verify it is not possible to create a user without inputting data into the "Last Name" field`, async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_TEMPALTE = userTemplateFactory({
    lastName: null,
    password: userPassword,
    confirmPassword: userPassword,
    gender: null,
    dateOfBirth: null,
    phoneNumber: null,
    address: null,
    linkedInURL: null,
    gitHubURL: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await Promise.all([
    userProfileCreationPage.submitButton.click(),
    userProfileCreationPage.verifyBrowserErrorMessage(ErrorMessages.LAST_NAME_MUST_BE_FILLED),
  ]);
});

test(`Verify it is not possible to create a user without inputting data into the "Email" field`, async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_TEMPALTE = userTemplateFactory({
    email: null,
    password: userPassword,
    confirmPassword: userPassword,
    gender: null,
    dateOfBirth: null,
    phoneNumber: null,
    address: null,
    linkedInURL: null,
    gitHubURL: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await Promise.all([
    userProfileCreationPage.submitButton.click(),
    userProfileCreationPage.verifyBrowserErrorMessage(ErrorMessages.EMAIL_MUST_BE_FILLED),
  ]);
});

test(`Verify it is not possible to create a user without inputting data into the "Password" field`, async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_TEMPALTE = userTemplateFactory({
    password: null,
    confirmPassword: userPassword,
    gender: null,
    dateOfBirth: null,
    phoneNumber: null,
    address: null,
    linkedInURL: null,
    gitHubURL: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await Promise.all([
    userProfileCreationPage.submitButton.click(),
    userProfileCreationPage.verifyBrowserErrorMessage(ErrorMessages.PASSWORDS_DO_NOT_MATCH),
  ]);
});

test(`Verify it is not possible to create a user without inputting data into the "Confirm Password" field`, async ({
  goToUserCreationPage,
  userProfileCreationPage,
}) => {
  const USER_TEMPALTE = userTemplateFactory({
    password: userPassword,
    confirmPassword: null,
    gender: null,
    dateOfBirth: null,
    phoneNumber: null,
    address: null,
    linkedInURL: null,
    gitHubURL: null,
  });

  await userProfileCreationPage.populateUserData(USER_TEMPALTE);

  await Promise.all([
    userProfileCreationPage.submitButton.click(),
    userProfileCreationPage.verifyBrowserErrorMessage(
      ErrorMessages.CONNFIRM_PASSWORD_MUST_BE_FILLED
    ),
  ]);
});

test.afterEach(async ({ userProfileCreationPage }) => {
  userProfileCreationPage.pageComponent.close();
});
