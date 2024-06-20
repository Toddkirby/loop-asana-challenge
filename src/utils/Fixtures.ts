import { Page, test as baseTest } from "@playwright/test";
import { BasePage } from "./BasePage";
import { AsanaDashboardPage } from "../pages/AsanaDashboardPage";
import { AsanaLoginPage } from "../pages/AsanaLoginPage";
import { CommonMethods } from "./ComonMethods";

// declaring the objects type for autocompletion
interface PageObjects {
  basePage: BasePage;
  commonMethods: CommonMethods;
  asanaLoginPage: AsanaLoginPage;
  asanaDashboardPage: AsanaDashboardPage;
}

const test = baseTest.extend<PageObjects>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  asanaLoginPage: async ({ page }, use) => {
    await use(new AsanaLoginPage(page));
  },
  asanaDashboardPage: async ({ page }, use) => {
    await use(new AsanaDashboardPage(page));
  },
  commonMethods: async ({ page }, use) => {
    await use(new CommonMethods(page));
  }
});

export default test;
export const expect = test.expect;
