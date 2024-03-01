//import { Locator, Page } from '@playwright/test'
const { expect, Locator, Page } = require('@playwright/test');
exports.LoginPage= class LoginPage {
   page= Page
   loginField= Locator
   passwordField= Locator
   signInButton= Locator
  keepMeSignCheckbox= Locator
  forgotYourPasswordLink= Locator
  errorMessage=Locator

 
  constructor(page= Page) {
    this.page = page
    this.signInButton = page.locator("[type='submit']")
    this.loginField = page.locator("[id='user_login']")
    this.passwordField = page.locator("[id='user_password']")
    this.keepMeSignCheckbox= page.locator("[type='checkbox']")
    this.forgotYourPasswordLink= page.getByRole('link', {name: "Forgot your password ?"})
    this.errorMessage = page.locator('.alert-error')
    //this.linkOnlineBanking = page.locator("//strong[normalize-space()='Online Banking']")
  }
 
  async loginToZeroBank() {
    await this.loginField.type("username")
    await this.passwordField.type("password")
    await this.signInButton.click()
    //await this.page.goto('http://zero.webappsecurity.com/')
  }
 async forgotYourPassword()
 {
    await this.forgotYourPasswordLink.click();
 }
 async assertErrorMessage() {
    await expect(this.errorMessage).toContainText('Login and/or password are wrong')
  }
  async snapshotLoginForm() {
     expect( await this.loginForm.screenshot()).toMatchSnapshot('login-form.png')
  }
 
  async snapshotErrorMessage() {
     expect( await this.errorMessage.screenshot()).toMatchSnapshot('login-error.png')
  }
}