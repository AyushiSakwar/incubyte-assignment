import { Page } from '@playwright/test';
import { config } from '../utils/configs.js';
import { locators } from '../utils/locators.js';

export class SignupPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.click(locators.common.registerLink);
    }

    async registerUser(username: string, password: string) {
        try {
            // Wait for the registration form to be visible
            await this.page.waitForSelector(locators.common.form, { timeout: 10000 });
            
            // Fill all required fields using locators and config data
            await this.page.fill(locators.signup.firstName, config.testData.newUser.firstName);
            await this.page.fill(locators.signup.lastName, config.testData.newUser.lastName);
            await this.page.fill(locators.signup.address, config.testData.newUser.address);
            await this.page.fill(locators.signup.city, config.testData.newUser.city);
            await this.page.fill(locators.signup.state, config.testData.newUser.state);
            await this.page.fill(locators.signup.zipCode, config.testData.newUser.zipCode);
            await this.page.fill(locators.signup.phone, config.testData.newUser.phone);
            await this.page.fill(locators.signup.ssn, config.testData.newUser.ssn);
            await this.page.fill(locators.signup.username, username);
            await this.page.fill(locators.signup.password, password);
            await this.page.fill(locators.signup.confirmPassword, password);
            
            // Click register button
            await this.page.click(locators.signup.registerButton);
            
            // Wait for either success or error page
            await Promise.race([
                this.page.waitForURL('**/register.htm', { timeout: 5000 }),
                this.page.waitForURL('**/index.htm', { timeout: 5000 }),
                this.page.waitForSelector('#rightPanel h1', { timeout: 10000 })
            ]);
            
            // Additional wait for page to stabilize
            await this.page.waitForLoadState('domcontentloaded', { timeout: 5000 });
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    }

    async registerWithEmptyFields() {
        await this.page.click(locators.signup.registerButton);
    }

    async registerWithMismatchedPasswords(username: string, password: string) {
        try {
            // Wait for the registration form to be visible
            await this.page.waitForSelector(locators.common.form, { timeout: 10000 });
            
            // Fill all required fields using locators
            await this.page.fill(locators.signup.firstName, 'Test');
            await this.page.fill(locators.signup.lastName, 'User');
            await this.page.fill(locators.signup.address, '123 Test St');
            await this.page.fill(locators.signup.city, 'Test City');
            await this.page.fill(locators.signup.state, 'TS');
            await this.page.fill(locators.signup.zipCode, '12345');
            await this.page.fill(locators.signup.phone, '1234567890');
            await this.page.fill(locators.signup.ssn, '123456789');
            await this.page.fill(locators.signup.username, username);
            await this.page.fill(locators.signup.password, password);
            await this.page.fill(locators.signup.confirmPassword, password + "123"); // mismatch
            
            // Click register button
            await this.page.click(locators.signup.registerButton);
            
            // Wait for page to load after registration attempt
            await this.page.waitForLoadState('domcontentloaded', { timeout: 5000 });
        } catch (error) {
            console.error('Registration with mismatched passwords failed:', error);
            throw error;
        }
    }

    async getErrorMessages(): Promise<string[]> {
        return await this.page.$$eval(locators.signup.errorMessages, (els: any[]) => els.map((e: any) => e.textContent || ''));
    }
}