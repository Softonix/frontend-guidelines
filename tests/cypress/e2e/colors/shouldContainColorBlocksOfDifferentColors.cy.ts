import { colorsPage } from '../../support'

describe('Colors page', () => {
  beforeEach(() => {
    colorsPage.visitTheColorsPage()
  })

  it('should contain color blocks of different CSS colors', () => {
    colorsPage.countTheColorBlocksOnThePage()

    colorsPage.countTheNumberOfDistinctBlocClolors()

    colorsPage.assertBlocksHaveDifferentColors()
  })
})
