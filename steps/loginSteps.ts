import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';
import { page } from '../support/world';

let loginPage: LoginPage;
let accountPage: AccountPage;

When('I login with valid credentials', async function () {
    loginPage = new LoginPage(page);
    await loginPage.login("validUser", "validPass"); // Replace with dynamic user if created
});

Then('I should be redirected to the account overview page', async function () {
    const heading = await page.textContent('#leftPanel h2');
    expect(heading).to.include("Accounts Overview");
});

Then('I should see my account balance', async function () {
    accountPage = new AccountPage(page);
    const balance = await accountPage.getBalance();
    console.log("Account Balance:", balance);
    expect(balance).to.not.be.null;
});

When('I try to login with empty username and password', async function () {
    loginPage = new LoginPage(page);
    await loginPage.loginWithEmptyFields();
});

Then('I should see error messages for required fields', async function () {
    const error = await loginPage.getLoginError();
    expect(error).to.not.be.null;
});

When('I try to login with invalid username and password', async function () {
    loginPage = new LoginPage(page);
    await loginPage.loginWithInvalidCredentials();
});

Then('I should see an error message', async function () {
    const error = await loginPage.getLoginError();
    expect(error).to.include("could not be verified");
});