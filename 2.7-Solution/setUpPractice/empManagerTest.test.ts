import {Builder, By, Capabilities,until, WebDriver} from "selenium-webdriver";
import { employeePage } from "../../2.6/empManagerTest.test";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import { empManagerTest } from "./empManagerPO";

const newEmployee = new empManagerTest(driver);

describe("practicing adding and editing an employee", ()=> {
    beforeEach(async() =>{
        await newEmployee.navigate()

    })
    afterAll(async ()=>{
        await newEmployee.driver.quit()
    });

    test("add new employee", async() =>{
        await newEmployee.click(newEmployee.addEmployee);
        
    })
})
