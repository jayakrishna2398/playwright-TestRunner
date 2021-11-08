import {test,expect} from "@playwright/test";

test("Basic UI verification", async({page})=>{
    await page.goto("https://letcode.in/edit")
expect(await page.isDisabled("#noEdit")).toBeTruthy();
//expect(await page.isDisabled("#noEdit")).toBeFalsy();  //*It will fail//

const edit = await page.isEditable("#dontwrite");   //tests to edit boxes
console.log("The edit is ", edit);
expect(edit).toBe(false);

})

test("UI verifications of buttons", async({page})=>{
    await page.goto("https://letcode.in/buttons");    //tests button disabled
    const button1 = await page.$("#isDisabled")
    //await page.isDisabled("#isDisabled")       //without using find $ element
    console.log("is disabled?", button1);
    console.log(await button1?.isEnabled())
    //expect(button1).toBe(true);                      //without using find $ element
    console.log(await button1?.isVisible())

})
test("UI using radio buttons", async({page})=>{
    await page.goto("https://letcode.in/radio")    //tests radio buttons are checked
    const check = await page.$("input:below(:text('Find if the checkbox is selected?'))")
    if(check){
        expect(await check.isChecked()).toBe(true);
    }else throw new Error("element not found")

})