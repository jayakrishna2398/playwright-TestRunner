import {FullConfig, FullResult, Reporter, Suite, TestCase, TestError, TestResult, TestStep} from "@playwright/test/reporter"

export default class myReporter implements Reporter{
  onBegin(config: FullConfig, suite: Suite){
      console.log("Test suite: " + suite.suites[0].suites[0].suites[0].title);
  }
  
  onTestBegin(test: TestCase, result: TestResult){
      console.log("Test started: " + test.title);
  }
  onTestEnd(test: TestCase, result: TestResult){
      console.log("Test ended " + test.title);
      console.log("Test result: " + result.status);
  }
  
  onStdOut(chunk: string | Buffer, test?: TestCase, result?: TestResult){
      console.log(chunk);
  }
 
  onStdErr(chunk: string | Buffer, test?: TestCase, result?: TestResult){

  }
  onStepBegin(test: TestCase, result: TestResult, step: TestStep){
    if(step.category === "test.step"){
      console.log("Test step starts: " + step.title);}
      //console.log(step.category)
  }
  
  onStepEnd(test: TestCase, result: TestResult, step: TestStep){
    console.log("Test step ends: " + step.category);
  }
  
  onError(error: TestError){
      console.log(error.message)
  }
  
  onEnd?(result: FullResult): void | Promise<void>{
    console.log("on end: " + result.status);
  }
}

// This is required to not export everything by default. See https://github.com/Microsoft/TypeScript/issues/19545#issuecomment-340490459
export {};





