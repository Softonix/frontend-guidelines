import type { Page, Locator } from '@playwright/test'

export let featureFlagValue: string

export class GeneralCommands {
  page: Page
  pageHeader: Locator
  tableRow: Locator

  constructor (page: Page) {
    this.page = page
    this.pageHeader = page.getByTestId('page-header')
    this.tableRow = page.locator('td')
  }

  async firstTableRow () {
    return this.tableRow.first()
  }
}
