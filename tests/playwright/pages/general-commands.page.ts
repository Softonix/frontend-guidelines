import type { Page, Locator } from '@playwright/test'
import { GeneralMethods } from './general-methods.page'

export let featureFlagValue: string

export class GeneralCommands extends GeneralMethods {
  page: Page
  pageHeader: Locator
  tableRow: Locator

  constructor (page: Page) {
    super(page)
    this.page = page
    this.pageHeader = page.getByTestId('page-header')
    this.tableRow = page.locator('td')
  }

  async firstTableRow () {
    return this.tableRow.first()
  }

  async getTheLocalStorage () {
    return await this.page.evaluate(() => window.localStorage)
  }
}
