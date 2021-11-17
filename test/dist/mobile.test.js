"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var playwright_1 = require("playwright");
var test_1 = require("@playwright/test");
test_1.test("Run in Android - Chrome", function () { return __awaiter(void 0, void 0, void 0, function () {
    var device, context, page, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, playwright_1._android.devices()];
            case 1:
                device = (_c.sent())[0];
                console.log("Model: " + device.model());
                console.log("Serial: " + device.serial());
                // Take screenshot of the device.
                return [4 /*yield*/, device.screenshot({ path: 'device.png' })];
            case 2:
                // Take screenshot of the device.
                _c.sent();
                // Launch Chrome browser.
                return [4 /*yield*/, device.shell('am force-stop com.android.chrome')];
            case 3:
                // Launch Chrome browser.
                _c.sent();
                return [4 /*yield*/, device.launchBrowser()];
            case 4:
                context = _c.sent();
                return [4 /*yield*/, context.newPage()];
            case 5:
                page = _c.sent();
                return [4 /*yield*/, page.goto('https://letcode.in')];
            case 6:
                _c.sent();
                _b = (_a = console).log;
                return [4 /*yield*/, page.evaluate(function () { return window.location.href; })];
            case 7:
                _b.apply(_a, [_c.sent()]);
                return [4 /*yield*/, page.screenshot({ path: 'page.png' })];
            case 8:
                _c.sent();
                return [4 /*yield*/, page.click("a[role='button']")];
            case 9:
                _c.sent();
                return [4 /*yield*/, page.click("text=Log in")
                    // Click input[name="email"]
                ];
            case 10:
                _c.sent();
                // Click input[name="email"]
                return [4 /*yield*/, page.click('input[name="email"]')];
            case 11:
                // Click input[name="email"]
                _c.sent();
                // Fill input[name="email"]
                return [4 /*yield*/, page.fill('input[name="email"]', 'koushik350@gmail.com')];
            case 12:
                // Fill input[name="email"]
                _c.sent();
                // Press Tab
                return [4 /*yield*/, page.press('input[name="email"]', 'Tab')];
            case 13:
                // Press Tab
                _c.sent();
                // Fill input[name="password"]
                return [4 /*yield*/, page.fill('input[name="password"]', 'Pass123$')];
            case 14:
                // Fill input[name="password"]
                _c.sent();
                // Click //button[normalize-space(.)='LOGIN']
                return [4 /*yield*/, Promise.all([
                        page.waitForNavigation({ url: 'https://letcode.in/' }),
                        page.click('//button[normalize-space(.)=\'LOGIN\']')
                    ])];
            case 15:
                // Click //button[normalize-space(.)='LOGIN']
                _c.sent();
                return [4 /*yield*/, page.click("a[role='button']")];
            case 16:
                _c.sent();
                return [4 /*yield*/, page.click("text=Sign out")];
            case 17:
                _c.sent();
                // close context and device
                return [4 /*yield*/, context.close()];
            case 18:
                // close context and device
                _c.sent();
                return [4 /*yield*/, device.close()];
            case 19:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
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
