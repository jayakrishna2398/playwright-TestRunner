import {test} from "@playwright/test";
import * as data from "./login.cred.json";

test("API login response check", async({page})=>{
    await page.goto("https://letcode.in/signin");

    const[response] = await Promise.all([
         page.waitForResponse(res=>
            res.status() == 200
            &&
            res.url() == "https://letcode.in/signin"
            
        ),
        await page.fill("input[name='email']", data.email),
        await page.fill("input[placeholder='Enter password']", data.pass),
        await page.click("//button[text()='LOGIN']")
        ])
        console.log(await response.json());
})