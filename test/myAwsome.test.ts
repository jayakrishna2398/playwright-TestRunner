import {test} from "@playwright/test"

test.describe.parallel("open the pages in parallel", ()=>{
    test("open letcode", async({page})=>{
        await page.goto("https://letcode.in")
        console.log(await page.title());
    });
    test("open playwright", async({page})=>{
        await page.goto("https://playwright.dev")
        console.log(await page.title());
    });
    test("open google", async({page})=>{
        await page.goto("https://google.com")
        console.log(await page.title());
    });
})