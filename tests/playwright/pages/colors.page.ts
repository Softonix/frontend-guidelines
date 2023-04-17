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
    const styles = await Promise.all(Array.from(
      { length: numberOfColorBlocks },
      (_, i) => this.colorBlock.nth(i).getAttribute('style')
    ))

    numberOfDistinctColors = ([...new Set(styles)]).length
  }

  async assertBlocksHaveDifferentColors () {
    expect(numberOfColorBlocks).toEqual(numberOfDistinctColors)
  }
}
