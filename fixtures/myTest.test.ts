import {assert,test} from "./myFixtures.test";      //import from myFixtures.test.ts

test("My test 1", async({hey},info) =>{    //fixtures*//
console.log(hey.toUpperCase());
let text = hey.toUpperCase();
assert(text).toBe("I AM A HUMAN")
console.log("status: ", info.status)
})
