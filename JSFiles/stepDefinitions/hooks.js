"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
//SAMPLE HOOKS NOTATION FROM OFFICIAL DOCUMENTATION - FOR DEMO PURPOSES
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before({ tags: "@foo" }, function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.Before({ tags: "@foo or @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
});
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFFdkMsdUVBQXVFO0FBQ3ZFLGlCQUFNLENBQUM7SUFDSCxrREFBa0Q7QUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFO0lBQ3JCLCtEQUErRDtBQUNqRSxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUU7SUFDOUIsd0VBQXdFO0FBQzFFLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsRUFBRTtJQUM3Qix1RUFBdUU7QUFDekUsQ0FBQyxDQUFDLENBQUM7QUFFSCxnRUFBZ0U7QUFDaEUsaUJBQU0sQ0FBQyxNQUFNLEVBQUU7SUFDYiwrREFBK0Q7QUFDakUsQ0FBQyxDQUFDLENBQUMifQ==