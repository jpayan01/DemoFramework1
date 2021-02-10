import { Given, When, Then } from "cucumber";
import { calculator } from "../PageObjects/calculator";
import { HomePage } from "../PageObjects/homePage";
import { browser, element, by } from "protractor";
import { chai } from "chai";
var expect = require('chai').expect;


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
Given ('I navigate to Blue Nile homepage', async()=> {
    browser.ignoreSynchronization = true;
    await browser.get('https://www.bluenile.com');
    browser.sleep(3000);
    await element(by.css(`div.icon-component.close`)).click(); //closes first modal on load
})

When ('I select {string} in {string}', async(string, string2)=> {
    await home.diamonds.click();
    await home.roundShape.click();

})

Then ('I should see the {string} landing page', async(string)=> {
    // await element(by.css(`div.icon-component.close`)).click(); //closes modal on diamonds - round
    let text = await element(by.xpath(`//span[text() = 'Round Cut Diamonds']`)).getText();
    expect(text).to.equal('Round Cut Diamonds');
});
