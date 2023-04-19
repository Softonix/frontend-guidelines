import { GeneralCommands } from '../'

export class ColorsPage extends GeneralCommands {
  visitTheColorsPage () {
    cy.visit('/example-colors')
  }

  getTheColorBlock () {
    return cy.getByTestId('color-block')
  }

  countTheColorBlocksOnThePage () {
    return this.getTheColorBlock().its('length')
  }

  countTheDistinctBlockClolors () {
    return this.getTheColorBlock()
      .then((blocks) => {
        const stylesArray = Array.from(blocks, (blocks) => blocks.getAttribute('style'))
        const numberOfDistinctColors = (new Set(stylesArray)).size

        return numberOfDistinctColors
      })
  }

  assertBlocksHaveDifferentColors (numberOfBlocks: string, numberOfDistinctColors: string) {
    cy.get(`@${numberOfBlocks}`).then((numberOfBlocks) => {
      cy.get(`@${numberOfDistinctColors}`).then((distinctColors) => {
        expect(numberOfBlocks).to.equal(distinctColors)
      })
    })
  }
}

export const colorsPage = new ColorsPage()
