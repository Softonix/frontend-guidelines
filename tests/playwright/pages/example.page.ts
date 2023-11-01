import { expect, type Page, type Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export class ExamplePage extends GeneralCommands {
  generalStoreButton: Locator
  generalStoreText: Locator

  constructor (page: Page) {
    super(page)
    this.generalStoreButton = page.getByTestId('general-store-button')
    this.generalStoreText = page.getByTestId('general-store-text')
  }

  async visitTheExamplesPage () {
    return this.page.goto('/example')
  }

  async clickGeneraStoreButton () {
    await this.generalStoreButton.click()
  }

  async interceptTheGeneralStoreRequest () {
    return this.interceptTheRequest('https://jsonplaceholder.typicode.com/posts/')
  }

  async assertGeneralStoreTextId (id: number) {
    await expect(this.generalStoreText).toContainText(`"id": ${id}`)
  }
}
