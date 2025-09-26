import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

class CustomWorld {
    page!: Page;
    async openBrowser() {
        try {
            browser = await chromium.launch({ 
                headless: false,
                timeout: 30000
            });
            context = await browser.newContext();
            page = await context.newPage();
            this.page = page;
        } catch (error) {
            console.error('Browser setup failed:', error);
            throw error;
        }
    }
    async closeBrowser() {
        try {
            if (browser) {
                await browser.close();
            }
        } catch (error) {
            console.error('Browser cleanup failed:', error);
        }
    }
}

setWorldConstructor(CustomWorld);
export { page };
