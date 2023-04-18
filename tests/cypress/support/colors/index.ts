import { GeneralCommands } from '../'

export class ColorsPage extends GeneralCommands {
  visitTheColorsPage () {
    cy.visit('/example-colors')
  }

  getTheColorBlock () {
    return cy.getByTestId('color-block')
  }

  countTheColorBlocksOnThePage () {
    this.getTheColorBlock()
      .then((colorBlocks) => {
        const numberOfBlocks = colorBlocks.length

        cy.wrap(numberOfBlocks).as('numberOfBlocks')
      })
  }

  countTheDistinctBlockClolors () {
    cy.get('@numberOfBlocks').then((numberOfBlocks) => {
      const arrayOfColors: any = []

      for (let blockNumber = 0; blockNumber < +numberOfBlocks; blockNumber++) {
        this.getTheColorBlock()
          .eq(blockNumber)
          .invoke('attr', 'style')
          .then((blockColor) => {
            if (!arrayOfColors.includes(blockColor)) {
              arrayOfColors.push(blockColor)
            }
          })
      }

      cy.wrap(arrayOfColors).as('distinctColors')
    })
  }

  assertBlocksHaveDifferentColors () {
    cy.get('@numberOfBlocks').then((numberOfBlocks) => {
      cy.get('@distinctColors').then((distinctColors) => {
        expect(numberOfBlocks).to.equal(distinctColors.length)
      })
    })
  }
}

export const colorsPage = new ColorsPage()
