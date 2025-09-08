import { expect, Page, Response } from "@playwright/test";
import { assert } from "console";

export abstract class BasePage {
  readonly pageComponent: Page;

  constructor(page: Page) {
    this.pageComponent = page;
  }

  abstract goTo(): Promise<Response | null>;

  /*
    Listen for a browser dialog and verify the expected message. 
    Pass a string value as a function argument as the text to be verified.
    Make sure to use the function inside of a Promise array, 
    along with the action that would trigger the dialog to appear. 
  */ 
  public async verifyBrowserErrorMessage(messageText: string) {
    this.pageComponent.once("dialog", async (dialog) => {
      console.log("Alert text:", dialog.message());
      expect(dialog.message()).toContain(messageText);
      await dialog.accept();
    });
  }
}
