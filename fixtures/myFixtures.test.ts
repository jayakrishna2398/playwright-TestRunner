import {test as baseTests} from "@playwright/test";

type jayakrishna = {
    hey:string;
}

const fixture = baseTests.extend<jayakrishna>({    //*fixed to test*//
    hey: "I am a human"


})
export const test = fixture;        //calling to test it   
export const assert = fixture.expect    //calling this to test it