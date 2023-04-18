/// <reference types="cypress" />
import { colorsPage } from '../../support/colors/index'

describe('Color blocks', () => {
  beforeEach(() => {
    colorsPage.visitTheColorsPage()
  })

  it('should have different CSS colors', () => {
    colorsPage.countTheColorBlocksOnThePage()

    colorsPage.countTheDistinctBlockClolors()

    colorsPage.assertBlocksHaveDifferentColors()
  })
})
