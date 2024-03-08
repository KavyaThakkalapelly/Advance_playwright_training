const { test, expect }= require('@playwright/test')
 
test.describe.parallel('API Testing', () => {
  const baseUrl = 'https://reqres.in/api'
 
 
test('POST Request - Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/users`, {
      data: {
        "name": "Kavya",
        "job": "Playwright"
    },
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(201)
    expect(response.status()).toBeOk()
    expect(responseBody.name).toBe("Kavya")
    console.log(responseBody.id)
    console.log(responseBody)
  })
})