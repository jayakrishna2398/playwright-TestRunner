import {request, test} from "@playwright/test"

test("BLOCKERS", async({page})=>{
    await test.step("Block images from website", async()=>{
        await page.route("**/*", request =>{
            return request.request().url().startsWith("https://googleads.g.doubleclick.net/pagead/ads")
            ?request.abort():
           request.continue();
        })
        await page.goto("https://letcode.in/test")
        page.waitForTimeout(10000)
    })
    await test.step("Block ads", async()=>{
        await page.route("**/*", request=>{
            return request.request().resourceType() === "image"
            ?request.abort():
           request.continue();
        })
        await page.goto("https://unsplash.com/t/people")
        page.waitForTimeout(10000)
    })
    
})

