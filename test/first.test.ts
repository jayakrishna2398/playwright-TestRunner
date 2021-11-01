import {expect, test} from "@playwright/test";

test("first simple test using playwright test runner", async({page}) =>{
        await page.goto("https://demoblaze.com/");
        const title = await page.title();
        expect(title).toBe("STORE");
})
test("open demoblaze and login", async({page})=>{
        await page.goto("https://demoblaze.com/");
        const login = await page.$("#login2")
        await login?.click();
        await page.fill("id=loginusername", "jayakrishnaarasu34")
        await page.fill("id=loginpassword", "")
        await page.click("//button[text()='Log in']")
})