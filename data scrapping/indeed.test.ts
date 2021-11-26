import {test} from "@playwright/test";

test("scrapping data from indeed.com", async({page})=>{
    await page.goto("https://in.indeed.com/career/salaries?from=gnav-jobsearch--jasx");
    // await page.fill("input[id='text-input-what']", "information technology");
    // await page.fill("input[id='text-input-where']", "chennai");
    await page.click("//a[@id='FindSalaries']")
   // page.waitForSelector("//div[@class='companyLocation']")
    const scrap = await page.$$("span[class='career-wrapper__avg-salary css-11odjfa e188vmua1']");
        console.log("The number of job salaries is: " + scrap.length)
 
    });