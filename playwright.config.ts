import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chrome",
            screenshot: "on",
            video: "on"
        },
        testMatch: ["visual.test.ts"],
        retries: 0,     //*whatever test failed it will rerun that failed test*//
        reporter: [["dot"],["json" , {outputFile: "test-result.json"}]]

}
export default config;
