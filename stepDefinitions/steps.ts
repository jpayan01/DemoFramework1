import { Given, When, Then } from "cucumber";
import { calculator } from "../PageObjects/calculator";
import { browser, element, by } from "protractor";
import { chai } from "chai";
var expect = require('chai').expect;


let calc = new calculator();

Given('I navigate to calculator angularjs website', async () => {
    await browser.get('http://juliemr.github.io/protractor-demo/');

});

When('I enter {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.calcButton.click();

});

Then('The total should be {string}', async (int) => {
    let myText = await calc.getResult.getText();
    console.log(myText + int);
    expect(int).to.equal(myText);
});
