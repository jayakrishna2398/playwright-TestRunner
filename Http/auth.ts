import {test,expect} from "@playwright/test";

test.describe("Network - playwright", () =>{
    test("HTTP authentication", async({browser}) =>{
        const context = await browser.newContext({
            httpCredentials:{
            username: "admin",
            password: "admin"
            }
        })
            const page = await context.newPage();
            await page.goto("https://the-internet.herokuapp.com/basic_auth")
            page.waitForTimeout(3000)
            // const header = await page.$("h3");
            // if(header){
            //     console.log(await header.textContent());
            //     expect(await header.textContent()).toBe("Basic Auth")
            // }
            await page.click("//img[@alt='Fork me on GitHub']");
            expect(page.url()).toBe("https://github.com/saucelabs/the-internet");
      })
    })