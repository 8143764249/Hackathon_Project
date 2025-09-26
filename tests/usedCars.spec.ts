import { test, expect } from '@playwright/test';
import UsedCars from '../pages/usedcars';
 
test('Used cars filter and display results', async ({ page }) => {
  test.setTimeout(180000); // Increased timeout
 
  const usedCarsPage = new UsedCars(page);
 
  await usedCarsPage.gotoHomePage();
  await page.waitForTimeout(3000);
  await usedCarsPage.clickMore();
  await page.waitForTimeout(3000);
  await usedCarsPage.UsedCarsClick();
  await page.waitForTimeout(3000);
  await usedCarsPage.selectChennaiFromPopup();
  await page.waitForTimeout(3000);
  await usedCarsPage.MaruthiCarsFilter();
  await page.waitForTimeout(3000);
 
  // Scroll to load more cars
  for (let i = 0; i < 6; i++) {
    await page.mouse.wheel(0, 1500);
    await page.waitForTimeout(1000);
  }
 
  const carCards = page.locator(".col-lg-8.zw-sr-GridWidth.col-sm-7");
  await page.waitForTimeout(3000);
  const count = await carCards.count();
 
  console.log(`\n🚗 Found Maruti Swift cars in Chennai:\n`);
 
  for (let i = 0; i < count; i++) {
    const car = carCards.nth(i);
 
    try {
      const title = await car.locator("a[data-track-label='Car-name']").textContent();
      await page.waitForTimeout(3000);
      var location = '';
      if (await car.locator(".zc-7.fnt-14.uLm.block").isVisible()) {
       location += await car.locator(".zc-7.fnt-14.uLm.block").textContent();
      }
      let cost = '';
      if (await car.locator(".zw-cmn-price.n.pull-left.mt-3").isVisible()) {
       cost += await car.locator(".zw-cmn-price.n.pull-left.mt-3").textContent();
      }
 
      if (title?.includes("Maruti Swift")) {
        console.log(`🔹 ${title.trim()} - ${cost?.trim()} - ${location?.trim()}`);
      }
    } catch (err) {
      console.warn(`⚠️ Skipped car ${i + 1} due to missing data`);
    }
  }
});