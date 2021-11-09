import {expect, test} from "@playwright/test";


test("URL test_001", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("/signup");
    //page.waitForNavigation();
    expect(page.url()).toBe("https://letcode.in/signup");

    await page.goto("/signin");
    //page.waitForNavigation();
    expect(page.url()).toBe("https://letcode.in/signin");

    await page.goto("/test");
    //page.waitForNavigation();
    expect(page.url()).toBe("https://letcode.in/test");


})
