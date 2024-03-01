
//Run "npm install csv" to install the full csv module or run npm install csv-parse
//if you are only interested by the CSV parser.
 
const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');
const assert = require('assert')
const { parse } = require('csv-parse/sync');
 
const records = parse(fs.readFileSync(path.join('./tests/Test_Data', 'nopcommerce_login_data_1.csv')), {
  columns: true,
  skip_empty_lines: true
});
 
for (const record of records) {
  test(`Weborder: ${record.test_case}`, async ({ page }) => {
    console.log(record.uname, record.pass, record.Exp_Result);
     
  await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
 
  // Fill input[name="ctl00\$MainContent\$username"]
  await page.fill('input[name="Email"]', record.uname);
 
  // Fill input[name="ctl00\$MainContent\$password"]
  await page.fill('[name="Password"]', record.pass);
  await page.click('[type=submit]');
  if( record.Exp_Result == 'Logout')  
  {
  //await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');
   // Click text=Logout
   //await page.getByLabel('link', { name: 'Logout'}).click();
   await expect(page.locator('text=Logout')).toHaveText("Logout");
   await page.locator('text=Logout').click();
   await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  }
  else if(record.Exp_Result == 'Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect.')
{
  let errorMsgloc= page.locator("[class='message-error validation-summary-errors']");
  let errorMsg= await errorMsgloc.textContent();
  console.log("error msg is" +errorMsg)
 /await expect(errorMsgloc).toContainText("Login was unsuccessful. Please correct the errors and try again.") 
 //await expect(errorMsg).toBe(record.Exp_Result)
}  
   
 
  });
}
 