import { expect, Page, Locator } from '@playwright/test'

export let responseId: number
export let request: any

export class ExamplePage {
  page: Page
  generalStoreButton: Locator
  generalStoreText: Locator

  constructor (page: Page) {
    this.page = page
    this.generalStoreButton = page.getByTestId('general-store-button')
    this.generalStoreText = page.getByTestId('general-store-text')
  }

  async clickGeneraStoreButton () {
    await this.generalStoreButton.click()
  }

  async declarateResponseId (request: Promise<any>) {
    await (await request).response().then(async (response: Response) => {
      await response?.json().then((resp) => {
        responseId = resp.id
      })
    })
  }

  async interceptTheGeneralStoreRequest () {
    request = this.page.waitForRequest(request => request.url()
      .includes('https://jsonplaceholder.typicode.com/posts/'))
  }

  async assertGeneralStoreTextId () {
    await expect(this.generalStoreText).toContainText(`"id": ${responseId}`)
  }
}
