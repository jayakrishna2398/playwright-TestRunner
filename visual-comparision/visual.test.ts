import{test,expect} from "@playwright/test";

test("visual comparision", async({page})=>{
    await page.goto("https://demoblaze.com/")
    expect (await page.screenshot({
        fullPage: true
    })).toMatchSnapshot("demoblaze.png")
})