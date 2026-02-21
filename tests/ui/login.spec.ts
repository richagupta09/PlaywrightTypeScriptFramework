import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test('User can login successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await inventory.verifyInventoryPage();
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Invalid login shows error message', async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate();
  await login.login('wrong_user', 'wrong_pass');

  await expect(page.locator(login.errorMsg)).toBeVisible();
  await expect(page.locator(login.errorMsg)).toContainText('Username and password do not match');
});
