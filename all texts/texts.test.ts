import {test} from "@playwright/test"

test("All texts difference", async({page})=>{
    await page.goto("file:///E:/playwright%20TestRunner/all%20texts/index.html");
    await test.step("Inner HTML", async()=>{            
        await page.click("#innerHTML")                    //o/p:Inner HTML is: hey <strong>there</strong> <span>Am I visible?</span>
        const txt =await page.locator("#attach").innerHTML()
        console.log("Inner HTML is:", txt);

    })
    await test.step("Inner text HTML", async()=>{       
        await page.click("#innerHTML")               //o/p:hey there
        const txt = await page.locator("#attach").innerText()
        console.log("Inner text is:", txt);
    })
    await test.step("Text context" , async()=>{        
       await page.click("#innerHTML");              //o/p:hey there Am I visible?
        const txt = await page.locator("#attach").textContent()
        console.log("Text content is:", txt)
    })

})

//InnerHTML(): It will give whatever is present in the DOM including the tags,everything
//InnerText(): Inner text means, it will return only visible elements present in DOM
//TextContext(): Text content means,it will return all the elements(string or numbers) whether its visible or not in DOM(except tags)