import {test} from "@playwright/test"

test.describe("custom reporter", ()=>{
    test("Custom report", async({page})=>{
        await test.step("first test", async()=>{
            await page.goto("https://letcode.in/")
        })
        await test.step("second test", async()=>{
            await page.goto("https://playwright.dev")
            console.log("step completed")
        })
    })
})