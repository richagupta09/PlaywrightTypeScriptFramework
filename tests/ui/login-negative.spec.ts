import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Negative Login Tests', () => {

  test('Should show error for invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login('wrong_user', 'wrong_pass');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('Should show error for locked out user', async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login('locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Sorry, this user has been locked out');
  });

});
