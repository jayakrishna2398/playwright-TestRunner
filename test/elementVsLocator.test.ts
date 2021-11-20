import {test} from "@playwright/test";

test("Element handle", async({page})=>{
    await page.goto("https://www.facebook.com/");              
    let handle = await page.$("input", {                     //let handle = page.locator("input")
         strict: true                            //(or)      //await handle?.fill("jk")   
    })
    await handle?.fill("jk")
})

test("Locator API", async({page}) =>{
    await page.goto("https://letcode.in/elements");
    const ele = page.locator("input")
    await ele?.fill("jayakrishna2398")
    await ele?.press("Enter")
    await page.waitForSelector("app-gitrepos ol li")
    const repos =  page.locator("app-gitrepos ol li")
    console.log(await repos.count());
    //console.log(await repos.allInnerTexts());
    let c = await repos.count()
    for(let i=0;i<c;i++){
        let text = await repos.nth(i).textContent();
        console.log(text)
    }
})

//*If we use the "$" element handle,it will lead to failure depending on stricts
//*To overcome this, we are moving to new element handle called locator,which is highly strict.
//*At the same time, no need to use await for locator.