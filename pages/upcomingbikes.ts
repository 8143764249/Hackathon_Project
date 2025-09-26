import { Page, Locator } from '@playwright/test';
export class UpcomingBikes {
  page: Page;
  upcomingTab: Locator;
  allUpcomingBikes: Locator;
  hondaFilter: Locator;
  under5LakhFilter: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.upcomingTab = page.locator('#bike-tabs').getByText('Upcoming');
    this.allUpcomingBikes = page.getByRole('link', { name: 'All Upcoming Bikes' });
    this.hondaFilter = page.locator('//a[text()="Honda"]');
    this.under5LakhFilter = page.locator('//a[text()="Upcoming Bikes Under 5 Lakhs"]');
  }
 
  async gotoHomePage() {
    //await this.page.goto('https://www.zigwheels.com/');
    await this.page.goto("https://www.zigwheels.com/", {timeout: 60000, waitUntil: 'domcontentloaded'});
  }
 
  async clickUpcomingTab() {
    await this.upcomingTab.click();
  }
 
  async clickAllUpcomingBikes() {
    
await this.allUpcomingBikes.scrollIntoViewIfNeeded();
await this.allUpcomingBikes.click();

   // await this.allUpcomingBikes.click();
  }
 
  async filterByHonda() {
    await this.hondaFilter.click();
  }
 
  async filterByPriceUnder5Lakh() {
    await this.under5LakhFilter.click();
  }
}