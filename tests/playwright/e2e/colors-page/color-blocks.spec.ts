import { test } from '@playwright/test'
import { ColorsPage } from '../../pages'

test.beforeEach(async ({ page }) => {
  await page.goto('/example-colors')
})

test('Each block should have a different CSS color', async ({ page }) => {
  const colorsPage = new ColorsPage(page)

  const numberOfColorBlocks = await colorsPage.getTheNumberOfColorBlocks()

  const countDistingBlockColors = await colorsPage.countDistinctBlockColors()

  colorsPage.assertBlocksHaveDifferentColors(numberOfColorBlocks, countDistingBlockColors)
})
