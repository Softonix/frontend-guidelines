import { expect, Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export class ExamplePage extends GeneralCommands {
  generalStoreButton: Locator
  generalStoreText: Locator

  constructor (page: Page) {
    super(page)
    this.generalStoreButton = page.getByTestId('general-store-button')
    this.generalStoreText = page.getByTestId('general-store-text')
  }

  async clickGeneraStoreButton () {
    await this.generalStoreButton.click()
  }

  async interceptTheGeneralStoreRequest () {
    this.interceptTheRequest('https://jsonplaceholder.typicode.com/posts/')
  }

  async assertGeneralStoreTextId () {
    await expect(this.generalStoreText).toContainText(`"id": ${this.response.id}`)
  }

  // AV Changes
  async interceptTheGeneralStoreRequestV2 () {
    return this.interceptTheRequestV2('https://jsonplaceholder.typicode.com/posts/')
  }

  async assertGeneralStoreTextIdV2 (id: number) {
    await expect(this.generalStoreText).toContainText(`"id": ${id}`)
  }
}
