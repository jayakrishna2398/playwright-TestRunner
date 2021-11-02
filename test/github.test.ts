import{test,expect} from "@playwright/test";

test("locator", async({page})=>{
    await page.goto("https://letcode.in/signin");
    await page.fill("input:below(:text('Email'))", "jayakrishna2398@gmail.com")
    await page.fill("input:above(:text('LOGIN'))", "pass@123")
    await page.click("button:left-of(:text('LOGIN'))")
})