import {test} from "@playwright/test";

test("API login response check", async({page})=>{
    await page.goto("https://letcode.in/signin");

    const[response] = await Promise.all([
         page.waitForResponse(res=>
            res.status() == 200
            &&
            res.url() == "https://letcode.in/signin"
            
        ),
        await page.fill("input[name='email']", "jayakrishna2398@gmail.com"),
        await page.fill("input[placeholder='Enter password']", ""),
        await page.click("//button[text()='LOGIN']")
        ])
        console.log(await response.json());
})