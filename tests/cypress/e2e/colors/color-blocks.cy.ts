/// <reference types="cypress" />
import { colorsPage } from '../../support/colors/index'

describe('Color blocks', () => {
  beforeEach(() => {
    colorsPage.visitTheColorsPage()
  })

  it('should have different CSS colors', () => {
    colorsPage.countTheColorBlocksOnThePage().as('totalBlockNumber')

    colorsPage.countTheDistinctBlockClolors().as('numberOfDistinctColors')

    colorsPage.assertBlocksHaveDifferentColors('totalBlockNumber', 'numberOfDistinctColors')
  })
})
