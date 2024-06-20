import { expect, Page } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class AsanaDashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  //locators
  private readonly testerloc = this.page.locator("//div[@class='BoardColumn BoardBody-column']", {hasText: 'To do'}).and(this.page.getByText('Draft'));

  //methods for dynamic locators
  async getWantedProjectLocatorAndClick(project: string) {
    await this.page.getByLabel(project).click();
  }
  async getWantedColumn(column: string) {
    await this.page.getByRole("heading", { name: column });
  }
  async getWantedCard(card: string) {
    await this.page.getByRole("heading", {});
  }
  async checkForCardInColumn(column: string, card: string) {
    const desiredColumn = this.page.locator("//div[@class='BoardColumn BoardBody-column']", {hasText: column});
    await desiredColumn.waitFor({state:'visible'});
    const desiredCard = desiredColumn.and(this.page.getByText(card));
    expect(desiredCard).toBeTruthy();
  }
}
