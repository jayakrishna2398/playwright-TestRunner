import {test} from "@playwright/test"

test("wait for alert", async({page})=>{
    await test.step("Alert", async()=>{
    await page.goto("https://letcode.in/waits")
    })

    await test.step("Alert", async()=>{
        page.on("dialog" , async(alert)=>{
            console.log("Alert message: " + alert.message());
            await alert.accept()
        })
    })
    await page.click("#accept")
    await page.waitForEvent("dialog")
})

//If some of the alerts are not able to come within seconds, then we can use waitForEvent function as well.