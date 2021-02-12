"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const cucumber_html_reporter_1 = __importDefault(require("cucumber-html-reporter"));
let options;
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../features/e2e/bluenile.feature'],
    cucumberOpts: {
        format: 'json:./cucumber-json-report.json',
        require: [
            './stepDefinitions/*.js'
        ]
    },
    onComplete: () => {
        options = {
            theme: 'bootstrap',
            jsonFile: './cucumber-json-report.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        cucumber_html_reporter_1.default.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLG9GQUE4QztBQUU5QyxJQUFJLE9BQU8sQ0FBQztBQUVELFFBQUEsTUFBTSxHQUFXO0lBRXhCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsdUJBQXVCO0lBQ3ZCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBQ0QsS0FBSyxFQUFFLENBQUMsa0NBQWtDLENBQUM7SUFDM0MsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLGtDQUFrQztRQUUxQyxPQUFPLEVBQUU7WUFDTCx3QkFBd0I7U0FDM0I7S0FDSjtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDYixPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLE1BQU0sRUFBRSxnQ0FBZ0M7WUFDeEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFDRixnQ0FBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBRUosQ0FBQyJ9