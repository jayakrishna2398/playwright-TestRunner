import {expect, test} from "@playwright/test";

test.use({
    baseURL: "https://letcode.in"  //local config
})

    test("URL test1", async({page})=>{

    await page.goto("/signup");
    expect(page.url()).toBe("https://letcode.in/signup");

    })
    test("URL test2", async({page})=>{

    await page.goto("/signin");
    expect(page.url()).toBe("https://letcode.in/signin");

    })
    test("URL test3", async({page})=>{

    await page.goto("/edit");
    //page.waitForNavigation();
    expect(page.url()).toBe("https://letcode.in/edit");


})