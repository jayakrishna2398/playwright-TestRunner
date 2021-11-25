import {test, expect} from "@playwright/test"

test("click and hold", async({page})=>{
    await page.goto("https://letcode.in")
    await page.click("//a[@id='testing']")
    expect(page.url()).toBe("https://letcode.in/test")

    await page.click("//a[text()='Click']")
    expect(page.url()).toBe("https://letcode.in/buttons")

    await page.click("//h2[text()='Button Hold!']", {
        delay: 3000
    })
    const ele = await page.$("h2")
    expect(await ele?.textContent()).toContain("long pressed");

})