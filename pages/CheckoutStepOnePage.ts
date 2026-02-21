import { BasePage } from './BasePage';

export class CheckoutStepOnePage extends BasePage {
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueBtn = '[data-test="continue"]';

  async fillDetails() {
    await this.type(this.firstName, 'Richa');
    await this.type(this.lastName, 'QA');
    await this.type(this.postalCode, '12345');
    await this.click(this.continueBtn);
  }
  async fillUserInfo(firstName: string, lastName: string, postalCode: string) {
  await this.page.fill('[data-test="firstName"]', firstName);
  await this.page.fill('[data-test="lastName"]', lastName);
  await this.page.fill('[data-test="postalCode"]', postalCode);
}

async continue() {
  await this.page.locator('[data-test="continue"]').click();
}

}
