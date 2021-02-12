import {Before, After} from "cucumber";
import { browser } from "protractor";

//SAMPLE HOOKS NOTATION FROM OFFICIAL DOCUMENTATION - FOR DEMO PURPOSES
Before(async function () {
    // This hook will be executed before all scenarios
    await browser.manage().deleteAllCookies();
  });
  

After(async function() {
  console.log('I will run after all the Tests are done!');

});