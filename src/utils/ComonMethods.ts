import { test, expect, Page } from "@playwright/test";
import { AsanaLoginPage } from "../pages/AsanaLoginPage";


export class CommonMethods {
  constructor(public page: Page) {}

    async login(email:string, password:string, asanaLoginPage: AsanaLoginPage){
        await this.page.goto('https://app.asana.com/-/login');
        await asanaLoginPage.enterEmail(email);
        await asanaLoginPage.clickContinueBtn();
        await asanaLoginPage.enterPassword(password);
        await asanaLoginPage.clickLoginBtn();
    }
}