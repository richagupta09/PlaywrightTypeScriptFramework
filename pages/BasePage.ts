import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(path: string = '/') {
  await this.page.goto(path, { waitUntil: 'networkidle' });
}


  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async type(selector: string, text: string) {
    await this.page.locator(selector).fill(text);
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  async waitForVisible(selector: string) {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }

  async getText(selector: string) {
    return await this.page.locator(selector).innerText();
  }
}
