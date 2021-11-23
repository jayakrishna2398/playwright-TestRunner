import {test} from "@playwright/test"

test("Locators in depth", async({page})=>{

    await test.step("Login", async()=>{
        await page.goto("https://www.saucedemo.com/")
        const user =  page.locator("input[id='user-name']")
         await user.fill("standard_user")
         const pass = page.locator("input[id='password']")
         await pass.fill("secret_sauce")
         const button = page.locator("input[type='submit']")
         await button.click()
    })
    await test.step("Locator API", async()=>{
        const selPrice = page.locator("//select[@class='product_sort_container']")
        await selPrice.selectOption({value: "lohi"})
        const product = page.locator("#inventory_container div.inventory_item_label a div")
        console.log(await product.first().textContent());
        await selPrice.selectOption({value: "hilo"})
        console.log(await product.first().textContent());

    })
})