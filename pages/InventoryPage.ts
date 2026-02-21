import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  inventoryContainer = '.inventory_list';
  sortDropdown = '.product_sort_container';

  backpackAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  cartIcon = '.shopping_cart_link';

  async verifyInventoryPage() {
    await this.page.waitForLoadState('networkidle');
    await this.waitForSelector(this.inventoryContainer);
  }

  async sortLowToHigh() {
    const dropdown = this.page.locator(this.sortDropdown);
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.selectOption('lohi');
  }

  async addItemToCart(productName: string) {
    const item = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });
    await item.locator('button').click();
  }

  async addBackpackToCart() {
    await this.click(this.backpackAddBtn);
  }

  async goToCart() {
    await this.click(this.cartIcon);
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
