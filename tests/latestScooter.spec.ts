import { test, chromium } from '@playwright/test';
import  LatestScooters from '../pages/latestscooters';
test('Display latest Scooters', async ({page}) => {
  //const browser = await chromium.launch({ headless: false });
  //const page = await browser.newPage();
  const latest = new LatestScooters(page);
  await latest.gotoHomePage();
  await page.waitForTimeout(3000);
  await latest.clickScooters();
  await page.waitForTimeout(3000);
  await latest.clickLatest();
  await page.waitForTimeout(3000);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({path:'test-results/latest_Scooters.png'});
await page.waitForTimeout(3000);
  await latest.printScooterNames();
 
  await page.close();
});