import { Page, Locator, expect } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export class ColorsPage extends GeneralCommands {
  colorBlock: Locator

  constructor (page: Page) {
    super(page)
    this.colorBlock = page.getByTestId('color-block')
  }

  async getTheNumberOfColorBlocks () {
    return this.colorBlock.count()
  }

  async countDistinctBlockColors () {
    return this.countElementsByAttribute(this.colorBlock, 'style')
  }

  async assertBlocksHaveDifferentColors (numberOfColorBlocks: number, numberOfDistinctColors: number) {
    await expect(numberOfColorBlocks).toEqual(numberOfDistinctColors)
    // await this.assertVariablesEquality(numberOfColorBlocks, numberOfDistinctColors)
  }
}
