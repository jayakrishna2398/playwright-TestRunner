import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chrome",
            screenshot: "off",
            video: "off",
            trace: "off"
            //slowMo: "1000"   //This will slow down the execution while testing
        },
        testMatch: ["UIverification.test.ts"],
        retries: 0,     //*whatever test failed it will rerun that failed test*//
        reporter: [["list"],["json" , {outputFile: "test-result.json"}]]

}
export default config;
