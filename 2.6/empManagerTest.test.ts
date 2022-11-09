import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
  }

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await driver.getemployeePage.navigate();
      })
      afterAll(async () => {
          await driver.quit()
      })
      const header: By = By.name()
      const addEmployee: By = By.name("inputField");
      const newEmployee: By = By.()
      const nameInput: By = By.
      const phoneInput: By = By.
      const titleInput: By = By.
    
      
      
      
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(By.name("header"))
          await driver.findElement(By.name("addEmployee").click()
          await driver.findElement(By.name("newEmployee").click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Change this")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("Change this")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Change this")
  })