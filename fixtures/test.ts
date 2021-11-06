import test,{expect} from "./basePages"

import * as data from "../test/data/login.cred.json";


test("test 1", async({commonFunctions,headerPage,loginPage,page})=>{
        await page.goto("https://letcode.in/")
        await headerPage.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await loginPage.enterUserName(data.email);
        await loginPage.enterPassword(data.pass);
        await loginPage.clickBtn();
        const toaster = await commonFunctions.toaster;
        expect(await toaster?.textContent()).toContain(" Welcome Jayakrishna Thirunavarrasu ");
        await headerPage.clickSignOutLink();
})

test("test2", async({page})=> {
        await page.goto("https://demoblaze.com/");
        const title = await page.title();
        expect(title).toBe("STORE");
})