import test,{expect} from "./basePages"

import * as data from "../test/data/login.cred.json";

        //test.describe.serial.only("", () =>{})    //*This is used to test only one group of tests*//
        //test.describe.serial("Test grouping", ()=>{      //this is called as serial where if the 1st test case gets failed, then the other gets skipped//
        test.describe("Test grouping", ()=>{ 
                
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

// await test.step("the fails scenario", async() =>{  //It is a end to end testing.If the test fails in any operation, then it gets broked.
//         await test.step("Login", async()=>{
//                 await page.goto("https://letcode.in/")
//                 await headerPage.clickLoginLink();
//                 expect(page.url()).toBe("https://letcode.in/signin")
//                 await loginPage.enterUserName(data.email);
//                 await loginPage.enterPassword("wrong");
//                 await loginPage.clickBtn();
//                 const toaster = await commonFunctions.toaster;
//                 expect(await toaster?.textContent()).toContain(" Welcome Jayakrishna Thirunavarrasu ");
//                 await headerPage.clickSignOutLink();
// })

test("test2", async({page})=> {
        await page.goto("https://demoblaze.com/");
        const title = await page.title();
        expect(title).toBe("STORE");
})
})
