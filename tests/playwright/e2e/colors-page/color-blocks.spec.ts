import { test } from '@playwright/test'
import { ColorsPage } from '../../pages'

test('Each block should have a different CSS color', async ({ page }) => {
  const colorsPage = new ColorsPage(page)

  await colorsPage.visitColorsPage()

  const numberOfColorBlocks = await colorsPage.getTheNumberOfColorBlocks()

  const countDistingBlockColors = await colorsPage.countDistinctBlockColors()

  colorsPage.assertBlocksHaveDifferentColors(numberOfColorBlocks, countDistingBlockColors)
})
