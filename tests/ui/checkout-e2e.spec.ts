import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutStepOnePage } from '../../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../pages/CheckoutStepTwoPage';
import { OrderCompletePage } from '../../pages/OrderCompletePage';

test('E2E: Complete checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const step1 = new CheckoutStepOnePage(page);
  const step2 = new CheckoutStepTwoPage(page);
  const complete = new OrderCompletePage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addItemToCart('Sauce Labs Backpack');
  await inventory.openCart();

  await cart.checkout();

  await step1.fillUserInfo('John', 'Doe', '12345');

  await step1.continue();

  await step2.finish();

  await complete.verifyOrderComplete();
});
