import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutStepOnePage } from '../../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../pages/CheckoutStepTwoPage';
import { OrderCompletePage } from '../../pages/OrderCompletePage';

test('Complete purchase flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const step1 = new CheckoutStepOnePage(page);
  const step2 = new CheckoutStepTwoPage(page);
  const complete = new OrderCompletePage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await inventory.verifyInventoryPage();
  await inventory.addBackpackToCart();
  await inventory.goToCart();

  await cart.proceedToCheckout();
  await step1.fillDetails();
  await step2.finishOrder();

  await complete.verifyOrderComplete();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});
