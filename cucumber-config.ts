import { features, report } from "process";
import { Config } from "protractor";
import reporter from "cucumber-html-reporter";

let options;

export let config: Config = {

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
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    }

};