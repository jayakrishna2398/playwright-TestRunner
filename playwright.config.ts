import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chrome",
            screenshot: "only-on-failure",
            video: "retain-on-failure"
        },
        retries: 2,     //*whatever test failed it will rerun that failed test*//
        reporter: [["dot"],["json" , {outputFile: "test-result.json"}]]

}
export default config;
