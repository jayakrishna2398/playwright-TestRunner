import {test} from "@playwright/test";

test("trace viewing", async({browser})=>{
    const context = await browser.newContext();
        await context.tracing.start({
            screenshots:true, snapshots: true
        });
    const page = await context.newPage();
    await page.goto("https://demoblaze.com")
    await context.tracing.stop({path: "trace.zip"})

})