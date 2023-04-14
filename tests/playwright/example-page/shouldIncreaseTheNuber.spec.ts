import { test, expect } from '@playwright/test'

test.only('Clicking the [] button should respond with incremented id', async ({ page }) => {
  let responseId
  const generalStoreBlock = page.getByTestId('general-store-text')
  await page.goto('http://localhost:5173/example')

  const firstRequest = page.waitForRequest(request => request.url().includes('https://jsonplaceholder.typicode.com/posts/'))

  await page.getByTestId('general-store-button').click()

  await (await firstRequest).response().then(async (response) => {
    await response?.json().then((resp) => {
      responseId = resp.id
    })
  })

  await expect(generalStoreBlock).toContainText(`"id": ${responseId}`)

  const secondRequest = page.waitForRequest(request => request.url().includes('https://jsonplaceholder.typicode.com/posts/'))

  await page.getByTestId('general-store-button').click()

  await (await secondRequest).response().then(async (response) => {
    await response?.json().then((resp) => {
      responseId = resp.id
    })
  })

  await expect(generalStoreBlock).toContainText(`"id": ${responseId}`)
})
