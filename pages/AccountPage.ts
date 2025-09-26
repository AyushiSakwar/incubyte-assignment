import { Page } from '@playwright/test';
import { locators } from '../utils/locators.js';

export class AccountPage {
    constructor(private page: Page) { }

    async getBalance(): Promise<string | null> {
        // Wait for the account table to be visible first
        await this.page.waitForSelector(locators.account.accountTable, { timeout: 10000 });
        // The balance is in the second column of the table
        const balanceCell = await this.page.textContent(locators.account.balanceCell);
        return balanceCell;
    }
}