import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chromium",
            screenshot: "on",
            video: "off",
            trace: "retain-on-failure"
            //slowMo: "1000"   //This will slow down the execution while testing
        },
        testMatch: ["test.ts"],
        retries: 0,     //*whatever test failed it will rerun that failed test*//
        reporter: [["list"],["json" , {outputFile: "test-result.json"}],['experimental-allure-playwright']]

}
export default config;
