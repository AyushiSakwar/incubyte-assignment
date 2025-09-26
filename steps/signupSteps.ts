import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { SignupPage } from '../pages/SignupPage';
import { page } from '../support/world';

let signupPage: SignupPage;
let username: string;
let password: string;

Given('I open the Parabank website', async function () {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
});

When('I navigate to the Registration page', async function () {
    signupPage = new SignupPage(page);
    await signupPage.navigate();
});

When('I register a new user with valid details', async function () {
    username = 'user' + Date.now();
    password = 'Pass@123';
    await signupPage.registerUser(username, password);
});

Then('I should see a success message', async function () {
    const title = await page.textContent('#rightPanel h1');
    expect(title).to.include("Welcome");
});

When('I try to register without filling any fields', async function () {
    await signupPage.registerWithEmptyFields();
});

Then('I should see error messages for required fields', async function () {
    const errors = await signupPage.getErrorMessages();
    expect(errors.length).to.be.greaterThan(0);
});

When('I enter mismatched password and confirmation', async function () {
    const uname = 'user' + Date.now();
    const pwd = 'Pass@123';
    await signupPage.registerWithMismatchedPasswords(uname, pwd);
});

Then('I should see an error for password mismatch', async function () {
    const errors = await signupPage.getErrorMessages();
    expect(errors.some((e: any) => e.includes("Passwords do not match"))).to.be.true;
});