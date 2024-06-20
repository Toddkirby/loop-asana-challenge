import { expect, Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class AsanaLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  //locators
  private readonly emailField = this.page.getByLabel("Email address");
  private readonly passwordField = this.page.getByLabel("Password", {
    exact: true,
  });
  private readonly loginBtn = this.page.getByRole("button", { name: "Log in" });

  //methods
  async enterEmail(email: string){
    await this.emailField.fill(email);
  }
  async enterPassword(pw: string){
    await this.passwordField.fill(pw);
  }
  async clickLoginBtn(){
    await this.loginBtn.click();
  }
}
