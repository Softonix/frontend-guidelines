import { test, expect } from '@playwright/test'

test.only('User should be able to turn the Feature flag On and Off', async ({ page }) => {
  await page.goto('http://localhost:5173/example-colors')

  const colorBlock = page.getByTestId('color-block')

  const numberOfColorBlocks = await colorBlock.count()

  const distinctColors: any = []
  for (let blockNumber = 0; blockNumber < numberOfColorBlocks; blockNumber++) {
    await colorBlock.nth(blockNumber).getAttribute('style').then((value) => {
      if (!distinctColors.includes(value)) {
        distinctColors.push(value)
      }
    })
  }

  expect(numberOfColorBlocks).toEqual(distinctColors.length)
})
