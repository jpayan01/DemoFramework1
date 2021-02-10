import {Before, After} from "cucumber";

//SAMPLE HOOKS NOTATION FROM OFFICIAL DOCUMENTATION - FOR DEMO PURPOSES
Before(function () {
    // This hook will be executed before all scenarios
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