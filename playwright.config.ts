import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chrome",
            screenshot: "only-on-failure",
            video: "retain-on-failure",
            trace: "on"
            //slowMo: "1000"   //This will slow down the execution while testing
        },
        testMatch: ["visual.test.ts"],
        retries: 0,     //*whatever test failed it will rerun that failed test*//
        reporter: [["list"],["json" , {outputFile: "test-result.json"}]]

}
export default config;
