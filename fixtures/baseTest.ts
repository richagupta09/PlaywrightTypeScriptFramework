import { test as base, expect } from '@playwright/test';
import { users } from './testData';

type Fixtures = {
  loginAs: (role: keyof typeof users) => Promise<void>;
};

export const test = base.extend<Fixtures>({
  loginAs: async ({ page }, use) => {
    await use(async (role: keyof typeof users) => {
      const { username, password } = users[role];

      await page.goto('/');
      await page.fill('[data-test="username"]', username);
      await page.fill('[data-test="password"]', password);
      await page.click('[data-test="login-button"]');

      if (role === 'standard') {
        await expect(page.locator('.inventory_list')).toBeVisible();
      }
    });
  }
});

export { expect };
