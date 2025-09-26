import { test, chromium } from '@playwright/test';
import { UpcomingBikes } from '../pages/upcomingbikes';
 
test('upcoming bikes', async ({page}) => {
 // const browser = await chromium.launch({ headless: false });
 // const page = await browser.newPage();
  const bikes = new UpcomingBikes(page);
 
  await bikes.gotoHomePage();
  await bikes.clickUpcomingTab();
  await bikes.clickAllUpcomingBikes();
  await bikes.filterByHonda();
  await bikes.filterByPriceUnder5Lakh();
await page.screenshot({path:'test-results/upcoming_bikes.png'});
 
  await page.close();
});