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
// Before({tags: "@foo"}, function () {
//     // This hook will be executed before scenarios tagged with @foo
//   });
// Before({tags: "@foo and @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo and @bar
//   });
// Before({tags: "@foo or @bar"}, function () {
//     // This hook will be executed before scenarios tagged with @foo or @bar
//   });
cucumber_1.After(function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsMkNBQXFDO0FBRXJDLHVFQUF1RTtBQUN2RSxpQkFBTSxDQUFDOztRQUNILGtEQUFrRDtRQUNsRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUwsdUNBQXVDO0FBQ3ZDLHNFQUFzRTtBQUN0RSxRQUFRO0FBRVIsZ0RBQWdEO0FBQ2hELCtFQUErRTtBQUMvRSxRQUFRO0FBRVIsK0NBQStDO0FBQy9DLDhFQUE4RTtBQUM5RSxRQUFRO0FBRVIsZ0JBQUssQ0FBQzs7SUFJTixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=