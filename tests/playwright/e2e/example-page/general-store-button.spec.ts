import { test } from '@playwright/test'
import { ExamplePage } from '../../pages'

test('Clicking the [General store] should increase the Id value in a box', async ({ page }) => {
  const examplePage = new ExamplePage(page)

  await examplePage.visitTheExamplesPage()

  let requestPromise = examplePage.interceptTheGeneralStoreRequest()

  await examplePage.clickGeneraStoreButton()

  let examplePageResponse = await examplePage.interceptTheResponse(requestPromise)

  await examplePage.assertGeneralStoreTextId(examplePageResponse.id)

  requestPromise = examplePage.interceptTheGeneralStoreRequest()

  await examplePage.clickGeneraStoreButton()

  examplePageResponse = await examplePage.interceptTheResponse(requestPromise)

  await examplePage.assertGeneralStoreTextId(examplePageResponse.id)
})
