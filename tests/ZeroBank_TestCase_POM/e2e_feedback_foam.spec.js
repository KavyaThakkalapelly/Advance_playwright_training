import { test, expect } from '@playwright/test'
const  { HomePage }= require ('../../Page_Objects/HomePage')
const { FeedbackPage } = require('../../Page_Objects/FeedbackPage')
 
 
test.describe('Feedback Form', () => {
  let homePage= HomePage
  let feedbackPage= FeedbackPage
 
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    feedbackPage = new FeedbackPage(page)
 
    await homePage.visit()
    await homePage.clickOnFeedbackLink()
  })
 
  // Reset feedback form
  test('Reset feedback form', async ({ page }) => {
    await feedbackPage.fillForm(
      'name',
      'email@mail.com',
      'subject',
      'my awesome message'
    )
    await feedbackPage.resetForm()
    await feedbackPage.assertReset()
  })
 
  // Submit feedback form
  test('Submit feedback form', async ({ page }) => {
    await feedbackPage.fillForm(
      'name',
      'email@mail.com',
      'subject',
      'my awesome message'
    )
    await feedbackPage.submitForm()
    await feedbackPage.feedbackFormSent()
  })
})