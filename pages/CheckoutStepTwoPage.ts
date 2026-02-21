import { BasePage } from './BasePage';

export class CheckoutStepTwoPage extends BasePage {
  finishBtn = '[data-test="finish"]';

  async finishOrder() {
    await this.click(this.finishBtn);
  }
  async finish() {
  await this.page.locator('[data-test="finish"]').click();
}

}
