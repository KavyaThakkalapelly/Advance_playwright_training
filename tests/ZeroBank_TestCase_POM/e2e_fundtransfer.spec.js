const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../Page_Objects/LoginPage')
const { HomePage } = require('../../Page_Objects/HomePage')
const { Navbar } = require('../../Page_Objects/Components/Navbar')
const { TransferFundPage } = require('../../Page_Objects/TransferFundPage')
 
test.describe('Transfer Funds and Make Payment', () => {
  let homePage= HomePage
  let loginPage= LoginPage
  let navbar= Navbar
  let transferFundPage = TransferFundPage
 
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    navbar = new Navbar(page)
    transferFundPage = new transferFundPage(page)
 
    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')
    //This is to bypass SSL error
     await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
  })
 
  test('Transfer Funds', async ({ page }) => {
    //await homePage.clickOnOnlineBankingLink()
    await navbar.clickOnTab('Transfer Funds')
    await transferFundPage.makePayment()
    await transferFundPage.assertSuccessMessage()
   
  })
})