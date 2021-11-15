import {test} from "@playwright/test";

test("API response", async({page})=>{
     test.setTimeout(15000)
    await page.goto("https://letcode.in/elements");

    const [response] = await Promise.all([
        page.waitForResponse(res =>
        res.status() == 200 
        &&
        res.url() == "https://api.github.com/users/jayakrishna2398"
        ),
        page.fill("input[name='username']", "jayakrishna2398"),
        page.click("button")
    ])
    console.log(await response.json());
})