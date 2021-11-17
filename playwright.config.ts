import{chromium, PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
        use:{
            headless: false,
            channel: "chromium",
            screenshot: "off",
            //video: "off",
            trace: "off",
            //baseURL: "https://letcode.in"      //global config
            //slowMo: "1000"                   //This will slow down the execution while testing
        },
        //grep:[new RegExp("@smoke")],                     //It will execute only @smoke in tag.test.ts
        //grep:[new RegExp("@smoke"), new RegExp("@reg")],   //It will execute @smoke and @reg in tag.test.ts
        //grepInvert:[new RegExp("@smoke")],            //It will execute other than @smoke tests
        
        testMatch: ["mobile.test.ts"],
        retries: 0,     //*whatever test failed it will rerun that failed test*//
        reporter: [["list"],["json" , {outputFile: "test-result.json"}]]

}
export default config;
