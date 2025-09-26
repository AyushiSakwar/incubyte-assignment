import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

class CustomWorld {
    page!: Page;
    async openBrowser() {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        this.page = page;
    }
    async closeBrowser() {
        await browser.close();
    }
}

setWorldConstructor(CustomWorld);
export { page };
