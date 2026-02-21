import { defineConfig } from '@playwright/test';
import stage from './config/stage.json';

export default defineConfig({
  use: {
    baseURL: stage.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ]
});
