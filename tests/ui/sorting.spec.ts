import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test('Products can be sorted by price (low to high)', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  
  await login.navigate();

  await login.login('standard_user', 'secret_sauce');

  await inventory.verifyInventoryPage();

  await inventory.sortLowToHigh();

  const prices = await page.$$eval('.inventory_item_price', (items: Element[]) =>
    items.map((i: Element) => parseFloat(i.textContent!.replace('$', '')))
  );

  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);
});
