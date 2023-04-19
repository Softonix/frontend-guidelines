import { test } from '@playwright/test'
import { ExamplePage } from '../../pages'

test.beforeEach(async ({ page }) => {
  await page.goto('/example')
})

test('Clicking the [General store] should increase the Id value in a box', async ({ page }) => {
  const examplePage = new ExamplePage(page)

  let requestPromise = examplePage.interceptTheGeneralStoreRequestV2()

  await examplePage.clickGeneraStoreButton()

  let examplePageResponse = await examplePage.interceptTheResponseV2(requestPromise)

  await examplePage.assertGeneralStoreTextIdV2(examplePageResponse.id)

  requestPromise = examplePage.interceptTheGeneralStoreRequestV2()

  await examplePage.clickGeneraStoreButton()

  examplePageResponse = await examplePage.interceptTheResponseV2(requestPromise)

  await examplePage.assertGeneralStoreTextIdV2(examplePageResponse.id)
})
