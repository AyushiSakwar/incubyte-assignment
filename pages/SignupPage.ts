// @ts-ignore
const { Page } = require('@playwright/test');

class SignupPage {
    private page: any;
    
    constructor(page: any) {
        this.page = page;
    }

    async navigate() {
        await this.page.click('text=Register');
    }

    async registerUser(username: string, password: string) {
        await this.page.fill('#customer.firstName', 'Ayushi');
        await this.page.fill('#customer.lastName', 'Sakwar');
        await this.page.fill('#customer.address.street', '123 Street');
        await this.page.fill('#customer.address.city', 'Bangalore');
        await this.page.fill('#customer.address.state', 'KA');
        await this.page.fill('#customer.address.zipCode', '560001');
        await this.page.fill('#customer.phoneNumber', '9876543210');
        await this.page.fill('#customer.ssn', '12345');
        await this.page.fill('#customer.username', username);
        await this.page.fill('#customer.password', password);
        await this.page.fill('#repeatedPassword', password);
        await this.page.click('input[value="Register"]');
    }

    async registerWithEmptyFields() {
        await this.page.click('input[value="Register"]');
    }

    async registerWithMismatchedPasswords(username: string, password: string) {
        await this.page.fill('#customer.username', username);
        await this.page.fill('#customer.password', password);
        await this.page.fill('#repeatedPassword', password + "123"); // mismatch
        await this.page.click('input[value="Register"]');
    }

    async getErrorMessages(): Promise<string[]> {
        return await this.page.$$eval('.error', (els: any[]) => els.map((e: any) => e.textContent || ''));
    }
}

// @ts-ignore
module.exports = { SignupPage };