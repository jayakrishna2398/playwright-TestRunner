import { _android as android, } from 'playwright';
import { test } from "@playwright/test";

test("Run in Android - using demoblaze", async () => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the device.
    await device.screenshot({ path: 'device.png' });

    // Launch Chrome browser.
    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
    const page = await context.newPage();
    await page.goto("https://demoblaze.com/")
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: 'page.png' });
    await page.click("#login2");
    await page.fill("input[id='loginusername']", "jayakrishnaarasu34")
    await page.fill("input[id='loginpassword']", "")
    await page.click("//button[text()='Log in']")
    await page.click("#logout2");
    await context.close();
    await device.close();
})

