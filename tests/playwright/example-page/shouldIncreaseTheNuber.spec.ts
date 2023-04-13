import { test, expect } from '@playwright/test'

test.only('Clicking the [] button should respond with incremented id', async ({ page, request }) => {
  await page.goto('http://localhost:5173/example')

  const catchFirstRequest = page.waitForResponse(resp => resp.url().includes('https://jsonplaceholder.typicode.com/posts/'))

  await page.getByTestId('general-store-button').click()

  const firstResponce = await catchFirstRequest.json()
  console.log(firstResponce.id)

  const catchSecondRequest = page.waitForResponse(resp => resp.url().includes('https://jsonplaceholder.typicode.com/posts/'))

  await page.getByTestId('general-store-button').click()

  const secondResponce = await catchSecondRequest.json()
  console.log(secondResponce.id)
})
