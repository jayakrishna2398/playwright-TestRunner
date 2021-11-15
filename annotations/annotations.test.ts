import {expect, test} from "@playwright/test";

test("test case 1", async({page})=>{
    //test.fail();    //it willl make test pass, even if the failed test will pass
    test.slow();       //it will do the default timeout* 3 times to execute slower
    console.log("test case running");
    await page.goto("https://letcode.in/");
    //expect(await page.title()).toBe("letCode with Koushik")
    console.log("first Test completed")
})

test("test case 2", async({page})=>{
    console.log("test case running")
    await page.goto("https://playwright.dev");
    console.log("second Test completed")
})

test("test case 3", async({page,browserName})=>{
    console.log("test case running")
    console.log("Name is: " +browserName);
    test.fixme();    //fixme is similar to skip, but without conditions and for ourselves we can skip the test//
    // if(browserName === "chromium"){
    //     test.skip();   
    // }
    await page.goto("https://letcode.in/edit");
    console.log("third Test completed")
})