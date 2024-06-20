import { test, expect, Page } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {}

  //common locators
  private readonly continueBtn = this.page.getByRole("button", {
    name: "Continue",
    exact: true,
  });

  //common methods
  async clickContinueBtn() {
    await this.continueBtn.click();
  }

  async takeScreenshot() {
    await this.page.screenshot();
  }
}
