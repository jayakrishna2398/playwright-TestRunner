import { test } from "@playwright/test"
import clipboard from 'clipboardy';

test("access clipboard", async({ page }) => {
    await test.step("open clipboard", async() => {
        await page.goto("https://clipboardjs.com/");
    })
    await test.step("click copy on clipboard", async() => {
        await page.click("//button[@data-clipboard-action='copy']", { force: true })
    })
    await test.step("access the clipboard", async() => {
        let text = await clipboard.read();
        console.log("The text from clipboard: " + text);
        await page.click("//button[@data-clipboard-target='#foo']")
        var url = await clipboard.read();
        console.log("The URL: " + url);

    });
})
test("open url from clipboard", async({ page }) => {
    var url = await clipboard.read();
    await page.goto(url)
    console.log(await page.title());

})