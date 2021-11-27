import { _android as android, } from 'playwright';
import { test } from "@playwright/test";

test("Run in Android - Chrome", async () => {
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
    await page.goto('https://letcode.in');
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: 'page.png' });

    await page.click("a[role='button']");
    await page.click("text=Log in")
    // Click input[name="email"]
    await page.click('input[name="email"]');
    // Fill input[name="email"]
    await page.fill('input[name="email"]', 'koushik350@gmail.com');
    // Press Tab
    await page.press('input[name="email"]', 'Tab');
    // Fill input[name="password"]
    await page.fill('input[name="password"]', 'Pass123$');
    // Click //button[normalize-space(.)='LOGIN']
    await Promise.all([
        page.waitForNavigation({ url: 'https://letcode.in/' }),
        page.click('//button[normalize-space(.)=\'LOGIN\']')
    ]);
    await page.click("a[role='button']");
    await page.click("text=Sign out");

    // close context and device
    await context.close();
    await device.close();
})


//Notes: (very important)
//pre-requisite to achieve this android automamtion:(in system)
//go to sdk release notes and download for windows(https://developer.android.com/studio/releases/platform-tools)
//after downloading the zipfile, unzip to any path
//in the unzipped file, click on that folder and then go to that, copy the path
//go to computer->properties->advanced system settings->environment variables->in 2nd system variables->go to path-> paste the path
//click ok for everything.
//go to cmd and type adb
//it will give release notes for sdk if its not giving then issues will be on path.


//pre-requisite to achieve this android automamtion:(in mobile)
//Go to mobile settings-> search for build number -> click that build no 5 times-> then it will be in developer mode
//go to or search developer options-> USB debugging make ON -> make stay awake ON as well
//Finally go to chrome and type(https://chrome.flags)
//In that search for "command" (ie..enable command line on non-rooted devices)

//Then you can execute using android by cmd or in vs code as well.

