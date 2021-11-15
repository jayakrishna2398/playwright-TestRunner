import {test} from "@playwright/test";

test("scrapping data from indeed.com", async({page})=>{
    await page.goto("https://in.indeed.com/");
    await page.fill("input[id='text-input-what']", "information technology");
    await page.fill("input[id='text-input-where']", "chennai");
    await page.click("button[type='submit']")
    page.waitForSelector("//div[@class='companyLocation']")
    const scrap = await page.$$("//div[@class='companyLocation']");
        console.log("The location is: " + scrap)
 
    });