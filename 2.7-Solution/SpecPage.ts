import { By, WebDriver, until, Capabilities, WebElement,Builder} from "selenium-webdriver";


export class SpecPage {
    driver: WebDriver;
    url: string = "https://www.google.com";

    searchBar: By = By.name('q')
    results: By = By.id("rso")
    header: By = By.css('lnXdpd');
    addPurple: By = By.css('[name="A8SBwf"]');



    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.searchBar))
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementsLocated(elementBy))
        return(await this.driver.findElement(elementBy)).click()
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).getText()
    }
    async doSearch(text: string) {
        return this.sendKeys(this.searchBar, `${text}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
    
    async getElement(elementBy: By): Promise<WebElement>{
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }

    
    
}