import { test, expect, type Page } from '@playwright/test'

async function validateResponse (page: Page, url: string, status = 200) {
  const response = await page.waitForResponse(response => response.url() === url && response.status() === status)

  return await response.json()
}

test('intro', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page).toHaveTitle(/Softonix/)

  await expect(page).toHaveURL(/.*example/)

  await expect(page.getByTestId('heading-text')).toHaveText('teleported from example view')

  await page.getByTestId('general-store-button').click()

  const res = await validateResponse(page, 'https://jsonplaceholder.typicode.com/posts/1')

  await expect(res.userId).toBe(1)

  await expect(page.getByTestId('general-store-text')).toHaveText(/"userId"/)
})
