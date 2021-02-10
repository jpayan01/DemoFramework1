import { element, ElementFinder, by } from "protractor";

export class HomePage {

    //WebElements
    diamonds: ElementFinder;
    engagement: ElementFinder;
    roundShape: ElementFinder;

    //constructor
    constructor() {
        this.diamonds = element(by.xpath(`//span[text() = 'Diamonds']`));
        this.engagement = element(by.xpath(`//span[text() = 'Engagement ']`));
        this.roundShape = element(by.xpath(`//span[text() = 'Round']`));
    
    }


    
}