import { browser, element, by } from "protractor"
import { calculator } from "../../PageObjects/calculator";

describe('chain locators demo', () => {
    it('Open Angular js website', async () => {
        // let calc = new calculator();

        // await browser.get('http://juliemr.github.io/protractor-demo/');

        // BEFORE POM STRUCTURE
        // await element(by.model("first")).sendKeys("3");
        // await element(by.model("second")).sendKeys("2");
        // await element(by.id("gobutton")).click();
        // let myText = await element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText();
        // console.log(myText);

        // element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
        //     console.log(text);
        // })

        // await calc.firstEditBox.sendKeys("3");
        // await calc.secondEditBox.sendKeys("5");
        // await calc.calcButton.click();

        // let myText = await calc.getResult.getText();
        // console.log(myText);

    });

});