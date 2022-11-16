import { Google } from "./googleHWBP";
const fs = require('fs')
const google = new Google()

/* adding fs to keep a record of results*/
test("do a search", async () => {
    await google.navigate()
        await google.search('The Connors')
        let text = await google.getResults()
        expect(text).toContain('The Connors')
        await fs.writeFile(`${__dirname}/test.txt`,text, (e)=> {
            if (e) console.error(e)
            else console.log('Save Successful')// creates a new text file in the directory
        })


        await fs.writeFile(`${__dirname}/googleScreenshot.png`,
            await google.driver.takeScreenshot(), "base64",
            (e) => {
                if (e) console.error(e)
                else console.log
            })

        
        await google.driver.quit()
 } )