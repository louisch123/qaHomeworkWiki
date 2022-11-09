import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
// UI( user interface) Testing
describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })
/* In the Dev. Tools, How can we know which locator to use for each selector?
Selector- Used to find elements based on their tag name, id, classes, types, attributes values of attributes
*/
    const hdrInput: By = By.name("inputField");//Fill in the blank // To find name attribute in the console$$('[name=""]')
    const mkeInput: By = By. name("inputField");//fill in the blank
    const oriInput: By = By. name("inputField");//fill in the blank
    const nameInput: By = By.name("inputField");//fill in the blank
    const clrBtn: By = By.id("clearButton"); //fill in blank 
    const submitBtn: By = By.id("saveButton"); //fill in blank// To find class attribute in the console $$('. or # in front of the Id or Name')
    const errorMsg: By = By.id("errorList") // fill in blank // is there additional code for the setting the error msg?

    test("Filling in the blanks ", async () => { // Is the async funtion intended to be used?
        await driver.findElement(By.name("hdrInput")).sendKeys("Ticket");
        await driver.findElement(By.name("mkeInput")).sendKeys("Idaho");
        await driver.findElement(By.name("oriInput")).sendKeys("PKE");
        await driver.findElement(By.name("nameInput")).sendKeys("Louis Haynes");
        await driver.findElement(By.id("submitBtn")).click()
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
       
    });
});