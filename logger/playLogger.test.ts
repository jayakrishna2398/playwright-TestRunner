import {test,chromium} from "@playwright/test"

test("logger", async({page})=>{
    // const browser = await chromium.launch({
    //     logger:{
    //         isEnabled: (name,severity) => true,
    //         log: (name,severity,message,args) => console.log(`name=${name} \n msg=${message} \n severity=${severity} \n arguements=${args} `)
    //     }
    // })
    page.on("console", msg=>{
        if(msg.type() == "error"){
            console.log(msg.text())
        }
        
    })
    await page.goto("https://letcode.in/elements")
    const btn = page.locator("#search")
    await btn?.click();
    await page.goto("https://amazon.in/aadads")
})