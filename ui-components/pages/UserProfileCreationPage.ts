import { Locator, Page, Response } from "@playwright/test";
import { BasePage } from "../base-components/BasePage";
import { CREATE_USER_PROFILE_URL } from "../../utils/enums/PlatrofmURLs";
import { UserTemplate } from "../object-templates/UserTemplate";

export class UserProfileCreationPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly genderMaleRadioButton: Locator;
  readonly genderFemaleRadioButton: Locator;
  readonly genderUndefinedRadioButton: Locator;
  readonly dateOfBirthInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly addressInput: Locator;
  readonly linkedInInput: Locator;
  readonly gitHubInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = this.pageComponent.getByRole("textbox", {
      name: "First Name (mandatory):",
    });
    this.lastNameInput = this.pageComponent.getByRole("textbox", {
      name: "Last Name (mandatory):",
    });
    this.emailInput = this.pageComponent.getByRole("textbox", { name: "Email (mandatory):" });
    this.passwordInput = this.pageComponent.getByRole("textbox", {
      name: "Password (mandatory):",
      exact: true,
    });
    this.confirmPasswordInput = this.pageComponent.getByRole("textbox", {
      name: "Confirm Password (mandatory):",
    });
    this.genderMaleRadioButton = this.pageComponent.getByRole("radio", {
      name: "Male",
      exact: true,
    });
    this.genderFemaleRadioButton = this.pageComponent.getByRole("radio", { name: "Female" });
    this.genderUndefinedRadioButton = this.pageComponent.getByRole("radio", {
      name: "Prefer not to say",
    });
    this.dateOfBirthInput = this.pageComponent.getByRole('textbox', { name: 'Date ofBirth (optional):' });
    this.phoneNumberInput = this.pageComponent.getByRole("textbox", {
      name: "Phone Number (optional):",
    });
    this.addressInput = this.pageComponent.getByRole("textbox", { name: "Address (optioal):" });
    this.linkedInInput = this.pageComponent.getByRole("textbox", {
      name: "LinkedIn URL (optional):",
    });
    this.gitHubInput = this.pageComponent.getByRole("textbox", { name: "GitHub URL (optional):" });
    this.submitButton = this.pageComponent.getByRole("button", { name: "Submit" });
    this.successMessage = this.pageComponent.getByText('Success!');
  }

  /*
    Navigates to the Create User Profile page of the platfrom
  */
  async goTo(): Promise<Response | null> {
    return await this.pageComponent.goto(CREATE_USER_PROFILE_URL);
  }

  /* 
    Looks through the userTemplate variable and verifies if the given property is null.
    If the property is not null, the function fills in the respective field in the UI
  */
  public async populateUserData(userTemplate: UserTemplate) {
    if (userTemplate.firstName) {
      await this.firstNameInput.fill(userTemplate.firstName);
    }

    if (userTemplate.lastName) {
      await this.lastNameInput.fill(userTemplate.lastName);
    }

    if (userTemplate.email) {
      await this.emailInput.fill(userTemplate.email);
    }

    if (userTemplate.password) {
      await this.passwordInput.fill(userTemplate.password);
    }

    if (userTemplate.confirmPassword) {
      await this.confirmPasswordInput.fill(userTemplate.confirmPassword);
    }

    if (userTemplate.gender) {
      switch (userTemplate.gender) {
        case "Male":
          await this.genderMaleRadioButton.check();
          break;
        case "Female":
          await this.genderFemaleRadioButton.check();
          break;
        default:
          await this.genderUndefinedRadioButton.check();
      }
    }

    if (userTemplate.dateOfBirth) {
      await this.dateOfBirthInput.fill(userTemplate.dateOfBirth.replaceAll("-", ""));
    }

    if (userTemplate.phoneNumber) {
      await this.phoneNumberInput.fill(userTemplate.phoneNumber);
    }

    if (userTemplate.address) {
      await this.addressInput.fill(userTemplate.address);
    }

    if (userTemplate.linkedInURL) {
      await this.linkedInInput.fill(userTemplate.linkedInURL);
    }

    if (userTemplate.gitHubURL) {
      await this.gitHubInput.fill(userTemplate.gitHubURL);
    }
  }
}
