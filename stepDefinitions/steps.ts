import { Given, When, Then, And } from "cucumber";
// const request = require('supertest');
import {request} from "supertest";
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
Given ('I navigate to Blue Nile homepage', async()=> {
    browser.ignoreSynchronization = true;
    await browser.get('https://www.bluenile.com');
    await browser.manage().window().maximize();
    browser.sleep(3000);

    await element(by.css('div.icon-component.close')).click();

})

When ('I select {string} in {string}', async(string, string2)=> {
    // await home.diamonds.click();
    // await home.roundShape.click();
    await element(by.xpath(`//span[text()= "${string}"]`)).click();
    await element(by.xpath(`//span[text()= "${string2}"]`)).click();

})

Then ('I should see the {string} landing page', async(string)=> {
    // await element(by.css(`div.icon-component.close`)).click(); //closes modal on diamonds - round
    let text = await element(by.xpath(`//span[text() = "${string}"]`)).getText();
    expect(text).to.equal(string);
});


//******FOR API DEMO******\\
Given('I Set POST employee service api endpoint$', async() =>{
    let addURI = "http://dummy.restapiexample.com/api/v1/create";
    console.log('Add URL ' + addURI);
});

When('I Set request HEADER', async() =>{
    request('http://dummy.restapiexample.com/api/v1/create')
    .set('/create');
});

And('Send a POST HTTP request', async()=>[

]);

Then('I receive valid Response', async()=>{

});

Given('I set PUT employee sevice api endpoint', async() =>{

});

When('I set Update request Body', async()=>{

});

And('Send PUT HTTP request', async()=>{

});


