import { test, expect } from '@playwright/test'

test('User should be able to turn the Feature flag On and Off', async ({ page }) => {
  await page.goto('http://localhost:5173/example-flags')

  const firstFeatureFlag = page.locator('[data-testid="heading-text"]').first()
  await expect(firstFeatureFlag.locator('input')).toHaveAttribute('aria-checked', 'false')

  await firstFeatureFlag.click()

  const localStorage = await page.evaluate(() => window.localStorage)

  const firstRowInTable = page.locator('td').first()
  const featureFlagValue = (await firstRowInTable.innerText()).toString()

  expect(localStorage).toHaveProperty(`${featureFlagValue}`)

  const pageHeader = page.locator('[data-testid="page-header"]')
  const loginButton = pageHeader.getByText('Login')

  await loginButton.click()

  await expect(page.getByTestId('feature-flag')).toBeVisible()

  await page.goto('http://localhost:5173/example-flags')

  await page.reload()

  expect(localStorage).toHaveProperty(`${featureFlagValue}`)

  await firstFeatureFlag.click()

  expect(await page.evaluate(() => window.localStorage)).not.toHaveProperty(`${featureFlagValue}`)

  await loginButton.click()

  await expect(page.getByTestId('feature-flag')).not.toBeVisible()
})
