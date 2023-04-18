import { Page, Locator, Request, expect } from '@playwright/test'

export let featureFlagValue: string

export class GeneralCommands {
  page: Page
  pageHeader: Locator
  request?: Request
  response?: any

  constructor (page: Page) {
    this.page = page
    this.pageHeader = page.getByTestId('page-header')
  }

  firstTableRow () {
    return this.page.locator('td').first()
  }

  async getTheLocalStorage () {
    return await this.page.evaluate(() => window.localStorage)
  }

  async countElementsByAttribute (parentElement: Locator, attributeName: string) {
    const parentElementNumber = await parentElement.count()

    const styles = await Promise.all(Array.from(
      { length: parentElementNumber },
      (_, i) => parentElement.nth(i).getAttribute(attributeName)
    ))

    return ([...new Set(styles)]).length
  }

  async interceptTheRequest (url: string) {
    return this.page.waitForRequest(request => request.url().includes(`${url}`)).then((request) => {
      this.request = request
    })
  }

  async interceptResponse () {
    if (this.request) {
      return this.request.response().then(async (response) => {
        this.response = await response?.json()

        return this.response
      })
    }
  }

  // AV Changes

  async interceptTheRequestV2 (url: string) {
    return this.page.waitForRequest(request => request.url().includes(url))
  }

  async interceptTheResponseV2 (requestPromise: Promise<Request>) {
    return requestPromise
      .then(request => request.response())
      .then(response => response?.json())
  }

  async assertVariablesEquality (parameterOne: number, parameterTwo: number) {
    expect(parameterOne).toEqual(parameterTwo)
  }
}
