import type { Page, Locator, Request } from '@playwright/test'

export let featureFlagValue: string

export class GeneralCommands {
  page: Page
  pageHeader: Locator

  constructor (page: Page) {
    this.page = page
    this.pageHeader = page.getByTestId('page-header')
  }

  firstTableRow () {
    return this.page.locator('td').first()
  }

  async countDistinctAttributeValues (parentElement: Locator, attributeName: string) {
    const parentElementNumber = await parentElement.count()

    const styles = await Promise.all(Array.from(
      { length: parentElementNumber },
      (_, i) => parentElement.nth(i).getAttribute(attributeName)
    ))

    return ([...new Set(styles)]).length
  }

  async getTheLocalStorage () {
    return this.page.evaluate(() => window.localStorage)
  }

  async interceptTheRequest (url: string) {
    return this.page.waitForRequest(request => request.url().includes(url))
  }

  async interceptTheResponse (requestPromise: Promise<Request>) {
    return requestPromise
      .then(request => request.response())
      .then(response => response?.json())
  }
}
