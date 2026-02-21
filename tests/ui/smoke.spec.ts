import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test('Smoke: User can login and view products', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await inventory.verifyInventoryPage();
});
