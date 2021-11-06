import {test} from "@playwright/test";

test("login skip", async({browser})=>{
    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    const ctxt = page.context();
    ctxt.storageState();
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(3000);
    await page.click("#logout2");
})