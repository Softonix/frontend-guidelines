import { test, expect } from '@playwright/test'

test('intro', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page).toHaveTitle(/Softonix/)

  await expect(page).toHaveURL(/.*example/)

  await expect(page.getByTestId('heading-text')).toHaveText('teleported from example view')

  const responsePromise = page.waitForResponse(response => response.url() === 'https://jsonplaceholder.typicode.com/posts/1' && response.status() === 200)

  await page.getByTestId('general-store-button').click()

  const response = await responsePromise

  const res = await response.json()

  await expect(res.userId).toBe(1)
})
