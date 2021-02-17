"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObjects/calculator");
const homePage_1 = require("../PageObjects/homePage");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
// var expect = require('chai').expect;
let calc = new calculator_1.calculator();
let home = new homePage_1.HomePage();
cucumber_1.Given('I navigate to calculator angularjs website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I enter {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.calcButton.click();
}));
cucumber_1.Then('The total should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let myText = yield calc.getResult.getText();
    chai_1.expect(myText).to.equal(string);
}));
//****Blue Nile****\\
cucumber_1.Given('The user navigates to Blue Nile homepage', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.ignoreSynchronization = true;
    yield protractor_1.browser.get('https://www.bluenile.com');
    yield protractor_1.browser.manage().window().maximize();
    protractor_1.browser.sleep(3000);
    yield protractor_1.element(protractor_1.by.css('div.icon-component.close')).click();
}));
cucumber_1.When('The user selects {string} in {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // await home.diamonds.click();
    // await home.roundShape.click();
    yield protractor_1.element(protractor_1.by.xpath(`//span[text()= "${string}"]`)).click();
    yield protractor_1.element(protractor_1.by.xpath(`//span[text()= "${string2}"]`)).click();
}));
cucumber_1.Then('The user sees the {string} landing page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // await element(by.css(`div.icon-component.close`)).click(); //closes modal on diamonds - round
    let text = yield protractor_1.element(protractor_1.by.xpath(`//span[text() = "${string}"]`)).getText();
    chai_1.expect(text).to.equal(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELHNEQUFtRDtBQUNuRCwyQ0FBa0Q7QUFDbEQsK0JBQThCO0FBQzlCLHVDQUF1QztBQUV2QyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUMxQixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtJQUMzRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFHbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUM1RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWxDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUNsRCxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILHFCQUFxQjtBQUNyQixnQkFBSyxDQUFFLDBDQUEwQyxFQUFFLEdBQU8sRUFBRTtJQUN4RCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUNyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDOUMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUU5RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFFLHVDQUF1QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ25FLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXBFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUUseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUM1RCxnR0FBZ0c7SUFDaEcsSUFBSSxJQUFJLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3RSxhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=