import type { Page, Locator } from '@playwright/test'

export let featureFlagValue: string

export class GeneralCommands {
  page: Page
  pageHeader: Locator
  tableRow: Locator
  request: any
  response: any

  constructor (page: Page) {
    this.page = page
    this.pageHeader = page.getByTestId('page-header')
    this.tableRow = page.locator('td')
    this.request = null
    this.response = null
  }

  async firstTableRow () {
    return this.tableRow.first()
  }

  async interceptTheRequest (url: string) {
    return this.page.waitForRequest(request => request.url()
      .includes(`${url}`)).then((request) => {
      this.request = request
    })
  }

  async interceptResponse () {
    return await (await this.request).response().then(async (response: Response) => {
      this.response = response

      return this.response
    })
  }
}
