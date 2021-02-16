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
    specs: ['../features/e2e/BNhomePage.feature'],
    // specs: ['../features/api/employee_api.feature'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLG9GQUE4QztBQUU5QyxJQUFJLE9BQU8sQ0FBQztBQUVELFFBQUEsTUFBTSxHQUFXO0lBRXhCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsdUJBQXVCO0lBQ3ZCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBQ0QsS0FBSyxFQUFFLENBQUMsb0NBQW9DLENBQUM7SUFDN0MsbURBQW1EO0lBQ25ELFlBQVksRUFBRTtRQUNWLE1BQU0sRUFBRSxrQ0FBa0M7UUFFMUMsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1NBQzNCO0tBQ0o7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2IsT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxNQUFNLEVBQUUsZ0NBQWdDO1lBQ3hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBQ0YsZ0NBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUVKLENBQUMifQ==