import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chrome",
            screenshot: "off",
            video: "off"
            //slowMo: "1000"   //This will slow down the execution while testing
        },
        testMatch: ["github.test.ts"],
        retries: 0,     //*whatever test failed it will rerun that failed test*//
        reporter: [["dot"],["json" , {outputFile: "test-result.json"}]]

}
export default config;
