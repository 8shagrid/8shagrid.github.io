import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ colorScheme: 'light', viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(7000);

const base = 'C:/Users/Dirga/.gemini/antigravity-ide/brain/31a7b63d-7188-4e89-9ddc-1d2693c68e46';

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
await page.screenshot({ path: `${base}/lm_hero.png` });

await page.evaluate(() => window.scrollTo(0, 950));
await page.waitForTimeout(800);
await page.screenshot({ path: `${base}/lm_products.png` });

await page.evaluate(() => window.scrollTo(0, 2600));
await page.waitForTimeout(800);
await page.screenshot({ path: `${base}/lm_experience.png` });

await page.evaluate(() => window.scrollTo(0, 5000));
await page.waitForTimeout(800);
await page.screenshot({ path: `${base}/lm_contact.png` });

await browser.close();
console.log('done');
