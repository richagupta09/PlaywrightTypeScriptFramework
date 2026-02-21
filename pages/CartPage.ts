import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  checkoutBtn = '[data-test="checkout"]';

  async getCartItems() {
    return this.page.locator('.cart_item').all();
  }

  async proceedToCheckout() {
    await this.click(this.checkoutBtn);
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
