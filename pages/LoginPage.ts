import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  username = '#user-name';
  password = '#password';
  loginBtn = '#login-button';
  errorMsg = '[data-test="error"]';   // <-- THIS FIXES YOUR ERROR

  async navigate() {
    await this.page.goto('/', { waitUntil: 'networkidle' });
  }

  async login(user: string, pass: string) {
    await this.type(this.username, user);
    await this.type(this.password, pass);
    await this.click(this.loginBtn);
  }

  async getErrorMessage() {
    await this.waitForSelector(this.errorMsg);
    return await this.getText(this.errorMsg);
  }
}
