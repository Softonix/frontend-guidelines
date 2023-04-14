import { expect, Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export let featureFlagValue: string

export class FeatureFlag extends GeneralCommands {
  page: Page
  featureFlagSwitcher: Locator
  featureFlagButton: Locator

  constructor (page: Page) {
    super(page)
    this.page = page
    this.featureFlagSwitcher = page.getByTestId('heading-text')
    this.featureFlagButton = page.getByTestId('feature-flag')
  }

  async clickTheFirstFF () {
    await this.featureFlagSwitcher.first().click()
  }

  async assertTheFirstFlagDisabled () {
    await expect(this.featureFlagSwitcher.first()
      .locator('input')).toHaveAttribute('aria-checked', 'false')
  }

  async saveTheFeatureFlagValue () {
    featureFlagValue = (await (await this.firstTableRow()).innerText()).toString()
  }

  async getTheLocalStorage () {
    return await this.page.evaluate(() => window.localStorage)
  }

  async assertTheFlagInLocalStorage () {
    await this.getTheLocalStorage().then(storage => {
      expect(storage).toHaveProperty(`${featureFlagValue}`)
    })
  }

  async assertTheFlagNotInStorage () {
    expect(await this.getTheLocalStorage())
      .not.toHaveProperty(`${featureFlagValue}`)
  }

  async clickTheLoginButton () {
    await this.pageHeader.getByText('Login').click()
  }

  async assertTheFFlagButtonVisible () {
    await expect(this.featureFlagButton).toBeVisible()
  }

  async assertFFlagButtonNotVisible () {
    await expect(this.featureFlagButton).not.toBeVisible()
  }
}
