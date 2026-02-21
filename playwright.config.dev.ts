import { defineConfig } from '@playwright/test';
import dev from './config/dev.json';

export default defineConfig({
  use: {
    baseURL: dev.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ]
});
