import { expect } from '@playwright/test'
import type { Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export class LoginPage extends GeneralCommands {
  page: Page
  featureFlagButton: Locator

  constructor (page: Page) {
    super(page)
    this.page = page
    this.featureFlagButton = page.getByTestId('feature-flag')
  }

  async visitTheLoginPage () {
    return this.page.goto('/auth/login')
  }

  async assertTheFFlagButtonVisible () {
    await expect(this.featureFlagButton).toBeVisible()
  }

  async assertFFlagButtonNotVisible () {
    await expect(this.featureFlagButton).not.toBeVisible()
  }
}
