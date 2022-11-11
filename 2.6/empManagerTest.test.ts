import {Builder,By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  export class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";

        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
      headerLogo: By = By.name("titleText") // not able to find this selector // 
       addEmployee: By = By.name('addEmployee');
       newEmployee: By = By.name("employee11");
       nameInput: By = By.name("materialInput");
       phoneInput: By = By.name("materialInput");
       titleInput: By = By.name("materialInput"); // Would this qualify for By.css? How do I determine in the elements tool on the Console?

        constructor(driver:WebDriver){
            this.driver = driver // if you include the constructor w/in the import cotainer you do not need to add const to the selectors 
            
        }
        async navigate(){
            await this.driver.get(this.url)
            await this.driver.wait(until.elementsLocated(this.headerLogo))
            await this.driver.wait(until.elementIsVisible(await driver.findElement(this.addEmployee)))
        }
        async sendKeys(elementBy: By, keys){
            await this.driver.wait(until.elementLocated(elementBy));
            return driver.findElement(elementBy).sendKeys(keys);
        }
  }
  const emPage = new employeePage(driver);

  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await emPage.navigate();// Are we giving navigate an attribute

      });
      afterAll(async () => {
          await driver.quit()
      });
      /*Locators Syntax: CSS-Static> $$('. or #attribute') or $$('[name = "attribute"]') XParth> $x('//li[@name="attribute*]')*/
      
      
    
      
      
      
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.headerLogo))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("John Cusayk")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("1234567890")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Motivational Speaker")
      });
  });