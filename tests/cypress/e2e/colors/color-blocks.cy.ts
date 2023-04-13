import { colorsPage } from '../../support'

describe('Color blocks', () => {
  beforeEach(() => {
    colorsPage.visitTheColorsPage()
  })

  it('should have different CSS colors', () => {
    colorsPage.countTheColorBlocksOnThePage()

    colorsPage.countTheNumberOfDistinctBlocClolors()

    colorsPage.assertBlocksHaveDifferentColors()
  })
})
