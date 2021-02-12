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
const protractor_1 = require("protractor");
//SAMPLE HOOKS NOTATION FROM OFFICIAL DOCUMENTATION - FOR DEMO PURPOSES
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before all scenarios
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
cucumber_1.After(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I will run after all the Tests are done!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsMkNBQXFDO0FBRXJDLHVFQUF1RTtBQUN2RSxpQkFBTSxDQUFDOztRQUNILGtEQUFrRDtRQUNsRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0wsZ0JBQUssQ0FBQzs7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFFMUQsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9