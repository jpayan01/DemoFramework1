import {Before, After} from "cucumber";
import { browser } from "protractor";

//SAMPLE HOOKS NOTATION FROM OFFICIAL DOCUMENTATION - FOR DEMO PURPOSES
Before(async function () {
    // This hook will be executed before all scenarios
    await browser.manage().deleteAllCookies();
  });
  
// Before({tags: "@foo"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//   });
  
// Before({tags: "@foo and @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo and @bar
//   });
  
// Before({tags: "@foo or @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo or @bar
//   });
  
After(async function() {
 

  
});