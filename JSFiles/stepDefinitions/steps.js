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
const protractor_1 = require("protractor");
let calc = new calculator_1.calculator();
cucumber_1.Given('I navigate to calculator angularjs website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I enter {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.calcButton.click();
}));
cucumber_1.Then('The total should be {string}', (int) => __awaiter(void 0, void 0, void 0, function* () {
    let myText = yield calc.getResult.getText();
    console.log(myText + int);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELDJDQUFpRDtBQUdqRCxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUU1QixnQkFBSyxDQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtJQUMzRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUM1RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWxDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBTyxHQUFHLEVBQUUsRUFBRTtJQUMvQyxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9