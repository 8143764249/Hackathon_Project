import {Page,Locator} from '@playwright/test';
 
export default class LatestScooters{
    page:Page;
    scooters:Locator;
    latest:Locator;
    scooterNames:Locator;
   constructor(page:Page){
    this.page=page;
    this.scooters=page.locator('(//a[@href="/scooters"])[1]');
    this.latest=page.locator('(//li[text()="Latest"])[1]');
    this.scooterNames = page.locator('#similarSlider li a[itemprop="relatedLink"]');
   }
   async gotoHomePage(){
    //await this.page.goto("https://www.zigwheels.com/");
    await this.page.goto("https://www.zigwheels.com/", {timeout: 60000, waitUntil: 'domcontentloaded'});
   }
   async clickScooters(){
    await this.scooters.click();
   }
   async clickLatest(){
    await this.latest.click();
   }
   
async printScooterNames() {
    const names = await this.scooterNames.allTextContents();
    console.log('Latest Scooters:');
    names.forEach(name => console.log(name.trim()));
  }
 
 }      