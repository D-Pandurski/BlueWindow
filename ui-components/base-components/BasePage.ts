import { expect, Page, Response } from "@playwright/test";
import { assert } from "console";

export abstract class BasePage {
  readonly pageComponent: Page;

  constructor(page: Page) {
    this.pageComponent = page;
  }

  abstract goTo(): Promise<Response | null>;

  public async verifyBrowserErrorMessage(messageText: string) {
    this.pageComponent.once("dialog", async (dialog) => {
      console.log("Alert text:", dialog.message());
      expect(dialog.message()).toContain(messageText);
      await dialog.accept();
    });
  }
}
