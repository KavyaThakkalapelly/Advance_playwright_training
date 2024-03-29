const { test } = require('@playwright/test');
const { Login_LogoutPage } = require('./baseTest');
 
test.describe('WebOrder E2E Test tests', () => {
    let loginPage;
 
    test.beforeEach(async ({ page }) => {
        loginPage = new Login_LogoutPage(page);
        await loginPage.gotoURL();
        await loginPage.LoginToApp("Tester", "test");
    });
 
    test('Go to Order Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Order' }).nth(1).click();
     
    });
 
    test('Go to View All Order Page', async ({ page }) => {
        await page.getByRole('link', { name: 'View all orders' }).click();
     
    });
   
    test.afterEach(async ({ page }) => {
        //Logout from Application
        await loginPage.LogoutFromApp();
    });
});