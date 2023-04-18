import type { Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export let numberOfColorBlocks: number
export let numberOfDistinctColors: number

export class ColorsPage extends GeneralCommands {
  page: Page
  colorBlock: Locator
  numberOfColorBlocks: number
  numberOfDistinctColors: number

  constructor (page: Page) {
    super(page)
    this.page = page
    this.colorBlock = page.getByTestId('color-block')
    this.numberOfColorBlocks = this.numberOfElements
    this.numberOfDistinctColors = this.numberOfElementsByAttribute
  }

  async getTheNumberOfColorBlocks () {
    await this.countTheNumberOfElements(this.colorBlock)
  }

  async countDistinctBlockColors () {
    await this.countElementsByAttribute(this.colorBlock, 'style')
  }

  async assertBlocksHaveDifferentColors () {
    await this.assertVariablesEquality(numberOfColorBlocks, numberOfDistinctColors)
  }
}
