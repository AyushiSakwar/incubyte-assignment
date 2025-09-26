import { Page } from '@playwright/test';
import { locators } from '../utils/locators.js';

export class LoginPage {
    constructor(private page: Page) { }

    async login(username: string, password: string) {
        await this.page.fill(locators.login.username, username);
        await this.page.fill(locators.login.password, password);
        await this.page.click(locators.login.loginButton);
    }

    async loginWithEmptyFields() {
        await this.page.click(locators.login.loginButton);
    }

    async loginWithInvalidCredentials() {
        await this.page.fill(locators.login.username, 'wrongUser');
        await this.page.fill(locators.login.password, 'wrongPass');
        await this.page.click(locators.login.loginButton);
    }

    async getLoginError(): Promise<string | null> {
        return await this.page.textContent(locators.login.errorMessage);
    }
}