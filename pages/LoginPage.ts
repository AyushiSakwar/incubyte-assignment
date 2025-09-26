// @ts-ignore
const { Page } = require('@playwright/test');

class LoginPage {
    private page: any;
    
    constructor(page: any) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[value="Log In"]');
    }

    async loginWithEmptyFields() {
        await this.page.click('input[value="Log In"]');
    }

    async loginWithInvalidCredentials() {
        await this.page.fill('input[name="username"]', 'wrongUser');
        await this.page.fill('input[name="password"]', 'wrongPass');
        await this.page.click('input[value="Log In"]');
    }

    async getLoginError(): Promise<string | null> {
        return await this.page.textContent('#rightPanel .error');
    }
}

// @ts-ignore
module.exports = { LoginPage };