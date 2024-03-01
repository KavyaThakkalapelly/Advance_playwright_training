const { test, expect } = require('@playwright/test'); 
const fs = require('fs');
const path =require('path')
//const basePath = path.join(__dirname, 'tests', 'Screenshots', 'Spreecom-homepage-chromium-win32.png');
const basePath = path.join(__dirname, '..', 'Screenshots', 'Spreecom-homepage-chromium-win32.png');
//const baseScreenshot =fs.readFileSync(basePath)
const baseScreenshot = fs.readFileSync(basePath);
test.describe('Visual Regression Testing Example', () => {
 
    test('Full Page Snapshot', async ({ page }) => {
      //await page.setViewportSize({ width: 780, height: 720 });
      //await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?')
      await page.goto('https://demo.spreecommerce.org/')  
      await page.waitForTimeout(5000)
      //expect(await page.screenshot()).toMatchSnapshot('Spreecom_homepage.png')
      expect(await page.screenshot()).toMatchSnapshot(baseScreenshot)
    })
   
    test('Single Element Snapshot', async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      await page.waitForTimeout(5000)
      const pageElement = page.locator("//button[@type='submit']")
      expect(await pageElement.screenshot()).toMatchSnapshot('Login.png')
    })
  })