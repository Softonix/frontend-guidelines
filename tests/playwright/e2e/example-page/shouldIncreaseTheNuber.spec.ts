import { test } from '@playwright/test'
import { ExamplePage, request } from '../../pages/example.page'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/example')
})

test('Clicking the [General store] should increase the Id value in a box', async ({ page }) => {
  const examplePage = new ExamplePage(page)

  examplePage.interceptTheGeneralStoreRequest()

  await examplePage.clickGeneraStoreButton()

  await examplePage.declarateResponseId(request)

  await examplePage.assertGeneralStoreTextId()

  examplePage.interceptTheGeneralStoreRequest()

  await examplePage.clickGeneraStoreButton()

  await examplePage.declarateResponseId(request)

  await examplePage.assertGeneralStoreTextId()
})
