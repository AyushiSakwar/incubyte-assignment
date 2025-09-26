import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { SignupPage } from '../pages/SignupPage.js';
import { page } from '../support/world.js';
import { config } from '../utils/configs.js';

let signupPage: SignupPage;
let username: string;
let password: string;

Given('I open the Parabank website', async function () {
    await page.goto(config.baseUrl, { 
        timeout: config.timeout,
        waitUntil: 'networkidle'
    });
});

When('I navigate to the Registration page', async function () {
    signupPage = new SignupPage(page);
    await signupPage.navigate();
});

When('I register a new user with valid details', { timeout: 30000 }, async function () {
    username = 'user' + Date.now();
    password = config.defaultPassword;
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

When('I enter mismatched password and confirmation', { timeout: 30000 }, async function () {
    const uname = 'user' + Date.now();
    const pwd = config.defaultPassword;
    await signupPage.registerWithMismatchedPasswords(uname, pwd);
});

Then('I should see an error for password mismatch', async function () {
    const errors = await signupPage.getErrorMessages();
    expect(errors.some((e: any) => e.includes("Passwords did not match"))).to.be.true;
});