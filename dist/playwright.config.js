"use strict";
export const __esModule = true;
var config = {
    use: {
        headless: false,
        channel: "chromium",
        screenshot: "off",
        //video: "off",
        trace: "off"
    },
    //grep:[new RegExp("@smoke")],                     //It will execute only @smoke in tag.test.ts
    //grep:[new RegExp("@smoke"), new RegExp("@reg")],   //It will execute @smoke and @reg in tag.test.ts
    //grepInvert:[new RegExp("@smoke")],            //It will execute other than @smoke tests
    testMatch: ["mobile.test.ts"],
    retries: 0,
    reporter: [
        ["list"],
        ["json", { outputFile: "test-result.json" }]
    ]
};
exports["default"] = config;