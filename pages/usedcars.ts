import {Page,Locator} from '@playwright/test';
 
export default class UsedCars{
    page:Page;
    More:Locator;
    UsedCars:Locator;
    location:Locator;
    MaruthiCars:Locator;
    chennaiCityLink:Locator;
   constructor(page:Page){
    this.page=page;
    this.More=page.locator("//span[contains(text(),'MORE')]");
    this.UsedCars=page.locator("//a[@title='Used Cars']");
    this.location=page.locator("//input[@placeholder='City Name']");
    this.MaruthiCars=page.locator("//label[contains(text(),'Maruti Swift')]");
    this.chennaiCityLink = page.locator("//a[@data-url='chennai']");
   }
   async gotoHomePage(){
      await this.page.goto("https://www.zigwheels.com/", { timeout: 60000, waitUntil: 'domcontentloaded' });
 
   }
   async clickMore(){
    await this.More.click();
   }
  async UsedCarsClick() {
 this.UsedCars = this.page.locator("a[title='Used Cars'][data-track-label='nav-used-car']");
  await this.UsedCars.click();
}
 
   async locationFilter(location:string){
    await this.location.fill(location);
   }
   async MaruthiCarsFilter(){
    //await this.MaruthiCars.check();
    await this.MaruthiCars.check({ force: true });
    await this.page.keyboard.press('Enter');
   }
   async selectChennaiFromPopup() {
  await this.chennaiCityLink.click();
}
 
 }