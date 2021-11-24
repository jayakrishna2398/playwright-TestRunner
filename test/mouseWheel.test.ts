import {test} from "@playwright/test"

test("Mouse wheel feature", async({page})=>{
    await page.goto("https://demoblaze.com")
    const but = page.locator("text='Copyright © Product Store 2017'")
    const box = await but.boundingBox()
    if(box){
        const y = box.y
    await page.mouse.wheel(0,y)     //released in V1.15.0 
}
// await but.scrollIntoViewIfNeeded()
// await page.waitForTimeout(30000)
})