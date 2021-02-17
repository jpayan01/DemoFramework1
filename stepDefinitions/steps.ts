import { Given, When, Then } from "cucumber";
import { calculator } from "../PageObjects/calculator";
import { HomePage } from "../PageObjects/homePage";
import { browser, element, by } from "protractor";
import { expect } from "chai";
// var expect = require('chai').expect;

let calc = new calculator();
let home = new HomePage();
Given('I navigate to calculator angularjs website', async () => {
    await browser.get('http://juliemr.github.io/protractor-demo/');
    

});

When('I enter {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.calcButton.click();

});

Then('The total should be {string}', async (string) => {
    let myText = await calc.getResult.getText();
    expect(myText).to.equal(string);
});

//****Blue Nile****\\
Given ('The user navigates to Blue Nile homepage', async()=> {
    browser.ignoreSynchronization = true;
    await browser.get('https://www.bluenile.com');
    await browser.manage().window().maximize();
    browser.sleep(3000);

    await element(by.css('div.icon-component.close')).click();

});

When ('The user selects {string} in {string}', async(string, string2)=> {
    // await home.diamonds.click();
    // await home.roundShape.click();
    await element(by.xpath(`//span[text()= "${string}"]`)).click();
    await element(by.xpath(`//span[text()= "${string2}"]`)).click();

});

Then ('The user sees the {string} landing page', async(string)=> {
    // await element(by.css(`div.icon-component.close`)).click(); //closes modal on diamonds - round
    let text = await element(by.xpath(`//span[text() = "${string}"]`)).getText();
    expect(text).to.equal(string);
});




