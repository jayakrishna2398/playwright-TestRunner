import { Page } from "../node_modules/playwright";
import CommonFunctions from "../Page/common.page";
import HeaderPage from "../Page/Header.page";
import LoginPage from "../Page/login.page";
import{BrowserContext, expect, test} from "@playwright/test";
import * as data from "./data/login.cred.json";


    declare const reporter: any;

test.describe("TC001 login", () =>{

    let header: HeaderPage
    let login: LoginPage
    let commonFunction: CommonFunctions
    let page:Page;
    let context:BrowserContext
    test.beforeAll(async ({browser}) => {
         context = await browser.newContext();
        await context.tracing.start({
            screenshots: true, snapshots: true
        })
        page = await context.newPage();
        header = new HeaderPage(page);
        login = new LoginPage(page);
        commonFunction = new CommonFunctions(page);
    })
    test.afterAll(async()=>{
        await context.tracing.stop({
            path: "trace.zip"
        })
    });
    test.beforeEach(async()=>{
            await page.goto("https://letcode.in/")
})
    test("Login positive", async() =>{
        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName(data.email);
        await login.enterPassword(data.pass);
        await login.clickBtn();
        const toaster = await commonFunction.toaster;
        expect(await toaster?.textContent()).toContain(" Welcome Jayakrishna Thirunavarrasu ");
        await header.clickSignOutLink();
    });
    test("first simple test using playwright test runner", async() =>{
        await page.goto("https://demoblaze.com/");
        const title = await page.title();
        expect(title).toBe("STORE");
})
});
