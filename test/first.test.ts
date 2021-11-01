import {expect, Page, test} from "@playwright/test";

test.describe("group test", () =>{
        let page:Page;
test.beforeAll(async({browser})=>{
        page = await browser.newPage();
})
test("first simple test using playwright test runner", async() =>{
        await page.goto("https://demoblaze.com/");
        const title = await page.title();
        expect(title).toBe("STORE");
});
test("open demoblaze and login", async()=>{
        await page.goto("https://demoblaze.com/");
        const login = await page.$("#login2")
        await login?.click();
        await page.fill("id=loginusername", "jayakrishnaarasu34")
        await page.fill("id=loginpassword", "")
        await page.click("//button[text()='Log in']")
});
})