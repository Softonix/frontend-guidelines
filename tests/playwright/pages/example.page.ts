import { expect, Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export let responseId: number

export class ExamplePage extends GeneralCommands {
  page: Page
  generalStoreButton: Locator
  generalStoreText: Locator

  constructor (page: Page) {
    super(page)
    this.page = page
    this.generalStoreButton = page.getByTestId('general-store-button')
    this.generalStoreText = page.getByTestId('general-store-text')
  }

  async clickGeneraStoreButton () {
    await this.generalStoreButton.click()
  }

  async declarateResponseId () {
    await this.response.json().then((response: any) => {
      responseId = response.id
    })
  }

  async interceptTheGeneralStoreRequest () {
    this.interceptTheRequest('https://jsonplaceholder.typicode.com/posts/')
  }

  async assertGeneralStoreTextId () {
    await expect(this.generalStoreText).toContainText(`"id": ${responseId}`)
  }
}
