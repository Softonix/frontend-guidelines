import { expect, Page, Locator } from '@playwright/test'
import { GeneralCommands } from './general-commands.page'

export let numberOfColorBlocks: number
export let numberOfDistinctColors: number

export class ColorsPage extends GeneralCommands {
  page: Page
  colorBlock: Locator

  constructor (page: Page) {
    super(page)
    this.page = page
    this.colorBlock = page.getByTestId('color-block')
  }

  async getTheNumberOfColorBlocks () {
    numberOfColorBlocks = await this.colorBlock.count()
  }

  async countDistinctBlockColors () {
    const distinctColors: any = []
    for (let blockNumber = 0; blockNumber < numberOfColorBlocks; blockNumber++) {
      await this.colorBlock.nth(blockNumber).getAttribute('style').then((value) => {
        if (!distinctColors.includes(value)) {
          distinctColors.push(value)
        }
      })
    }
    numberOfDistinctColors = distinctColors.length
  }

  async assertBlocksHaveDifferentColors () {
    expect(numberOfColorBlocks).toEqual(numberOfDistinctColors)
  }
}
