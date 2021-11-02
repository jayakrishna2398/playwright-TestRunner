import{test} from "@playwright/test";

test("shadow DOM", async({page})=>{
    await page.goto("https://letcode.in/shadow")
    await page.fill("#fname","jayakrishna");
    await page.waitForTimeout(3000);
})

test("Another feature", async({page})=>{
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list")
    const ele = await page.$("#can");
    if(ele){
        await ele.selectOption({
            label: "Open issues"
        })
    }else throw new Error("No issues found");

    await page.fill("#searchq","some issues");
    
})