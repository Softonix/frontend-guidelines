import { test } from '@playwright/test'
import { ColorsPage } from '../../pages/colors.page'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/example-colors')
})

test('Each color block should have a different CSS color', async ({ page }) => {
  const colorsPage = new ColorsPage(page)

  await colorsPage.getTheNumberOfColorBlocks()

  await colorsPage.countDistinctBlockColors()

  await colorsPage.assertBlocksHaveDifferentColors()
})
