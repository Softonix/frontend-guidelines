import { Page, Locator, expect } from '@playwright/test'

export let featureFlagValue: string

export class GeneralMethods {
  page: Page
  request: any
  response: any
  numberOfElements: number
  numberOfElementsByAttribute: number

  constructor (page: Page) {
    this.page = page
    this.request = null
    this.response = null
    this.numberOfElements = 0
    this.numberOfElementsByAttribute = 0
  }

  async countElementsByAttribute (parentElement: Locator, attributeName: string) {
    const parentElementNumber = await parentElement.count()

    const styles = await Promise.all(Array.from(
      { length: parentElementNumber },
      (_, i) => parentElement.nth(i).getAttribute(attributeName)
    ))

    this.numberOfElementsByAttribute = ([...new Set(styles)]).length

    return this.numberOfElementsByAttribute
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

  async countTheNumberOfElements (element: Locator) {
    this.numberOfElements = await element.count()
  }

  async assertVariablesEquality (parameterOne: number, parameterTwo: number) {
    expect(parameterOne).toEqual(parameterTwo)
  }
}
