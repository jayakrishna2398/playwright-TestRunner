import CommonFunctions from "../Page/common.page"
import HeaderPage from "../Page/Header.page"
import LoginPage from "../Page/login.page"

import {test as baseTest} from "@playwright/test"

// type pages = {
//     loginPage: LoginPage;
//     headerPage: HeaderPage;
//     commonFunctions: CommonFunctions;
// }
const test = baseTest.extend<{
    loginPage: LoginPage;
    headerPage: HeaderPage;
    commonFunctions: CommonFunctions;
}>({
    loginPage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    headerPage: async({page},use2)=>{
        await use2(new HeaderPage(page));
    },
    commonFunctions: async({page},use3)=>{
        await use3(new CommonFunctions(page));
    }
})
export default test;
export const expect = test.expect;