import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test('User can add multiple items to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addItemToCart('Sauce Labs Backpack');
  await inventory.addItemToCart('Sauce Labs Bike Light');
  await inventory.addItemToCart('Sauce Labs Bolt T-Shirt');

  await inventory.openCart();

  const items = await cart.getCartItems();
  expect(items.length).toBe(3);
});
