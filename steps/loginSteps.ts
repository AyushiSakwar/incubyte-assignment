import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/LoginPage.js';
import { AccountPage } from '../pages/AccountPage.js';
import { page } from '../support/world.js';
import { config } from '../utils/configs.js';
import { locators } from '../utils/locators.js';

let loginPage: LoginPage;
let accountPage: AccountPage;

When('I login with valid credentials', async function () {
    loginPage = new LoginPage(page);
    await loginPage.login(config.testData.validUser.username, config.testData.validUser.password); 
});

Then('I should be redirected to the account overview page', async function () {
    const heading = await page.textContent(locators.account.accountServices);
    expect(heading).to.include("Account Services");
});

Then('I should see my account balance', async function () {
    accountPage = new AccountPage(page);
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    const balance = await accountPage.getBalance();
    console.log("Account Balance:", balance);
    expect(balance).to.not.be.null;
});

When('I try to login with empty username and password', async function () {
    loginPage = new LoginPage(page);
    await loginPage.loginWithEmptyFields();
});

Then('I should see login error messages for required fields', async function () {
    const error = await loginPage.getLoginError();
    expect(error).to.not.be.null;
});

When('I try to login with invalid username and password', async function () {
    loginPage = new LoginPage(page);
    await loginPage.loginWithInvalidCredentials();
});

Then('I should see an error message', async function () {
    const error = await loginPage.getLoginError();
    expect(error).to.include("error");
});