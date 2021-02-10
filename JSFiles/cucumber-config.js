"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    // specs: ['test-spec.js'],
    specs: ['../features/bluenile.feature'],
    cucumberOpts: {
        require: [
            './stepDefinitions/*.js'
        ]
    }
    // Options to be passed to Jasmine-node.
    // jasmineNodeOpts: {
    //     showColors: true, // Use colors in the command line report.
    // }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVXLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLHVCQUF1QjtJQUN2QixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQywyQkFBMkI7SUFFM0IsS0FBSyxFQUFFLENBQUMsOEJBQThCLENBQUM7SUFDdkMsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1NBQzNCO0tBQ0o7SUFDRCx3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLGtFQUFrRTtJQUNsRSxJQUFJO0NBRVAsQ0FBQyJ9