import { defineConfig } from '@playwright/test';
import prod from './config/prod.json';

export default defineConfig({
  use: {
    baseURL: prod.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ]
});
