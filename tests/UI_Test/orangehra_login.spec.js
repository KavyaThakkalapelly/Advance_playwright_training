const { test, expect } = require('@playwright/test');
test ('Validate Login Scenario', async ({page}) =>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("[name='username']").fill("Admin")
await page.locator("[type='password']").fill("admin123")
await page.locator("[type='submit']").click();
await expect(page.getByRole('heading', { name: 'Dashboard' })).toHaveText("Dashboard")
//await page.pause();
})
