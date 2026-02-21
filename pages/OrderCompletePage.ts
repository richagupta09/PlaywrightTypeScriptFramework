import { BasePage } from './BasePage';

export class OrderCompletePage extends BasePage {
  successMessage = '.complete-header';

  async verifyOrderComplete() {
    await this.waitForSelector(this.successMessage);
  }
  
}
