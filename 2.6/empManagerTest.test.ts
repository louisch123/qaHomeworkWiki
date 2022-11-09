import {Builder,By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  export class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
        constructor(driver:WebDriver, url: string){
            this.driver = driver
            this.url = url
        }
  }

  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await employeePage.navigate("");// Are we giving navigate an attribute

      });
      afterAll(async () => {
          await driver.quit()
      });
      /*Locators Syntax: CSS-Static> $$('. or #attribute') or $$('[name = "attribute"]') XParth> $x('//li[@name="attribute*]')*/
      
      const header: By = By.id("titleText") // not able to find this selector // 
      const addEmployee: By = By.name("inputField");
      const newEmployee: By = By.name("employee11");
      const nameInput: By = By.name("materialInput");
      const phoneInput: By = By.name("materialInput");
      const titleInput: By = By.name("materialInput"); // Would this qualify for By.css? How do I determine in the elements tool on the Console?
    
      
      
      
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(By.id("header")))
          await driver.findElement(By.name("addEmployee")).click()
          await driver.findElement(By.name("newEmployee")).click()
          await driver.findElement(By.name("employee11")).click()
          await driver.findElement(By.name ("nameEntry")).clear()
          await driver.findElement(By.name("materialInput")).sendKeys("John Cusayk")
          await driver.findElement(By.name("materialInput")).click()
          await driver.findElement(By.name("materialInput")).clear()
          await driver.findElement(By.name("materialInput")).sendKeys("1234567890")
          await driver.findElement(By.name("materialInput")).click()
          await driver.findElement(By.name("materialInput")).clear()
          await driver.findElement(By.name("materialInput")).sendKeys("Motivational Speaker")
      });
  });