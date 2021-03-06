import { Page } from "../node_modules/playwright";

export default class CommonFunctions{
    private page: Page;

    constructor(page:Page){
        this.page = page;
    }

    public get toaster(){
        const toastMsg = this.page.waitForSelector("//div[@aria-label='Welcome Jayakrishna Thirunavarrasu']")
        if(toastMsg != null){
            return toastMsg;
        }else throw new Error("No element");
    }
}