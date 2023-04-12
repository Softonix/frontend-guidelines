import { GeneralCommands } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/generalPageObject';

export class ColorsPage extends GeneralCommands {
    visitTheColorsPage() {
        cy.visit('/example-colors');
    }

    countTheColorBlocksOnThePage() {
        this.getTheColorBlock()
        .then((colorBlocks) => {
            const numberOfBlocks = colorBlocks.length;

            cy.wrap(numberOfBlocks).as('numberOfBlocks');
        });
    }

    countTheNumberOfDistinctBlocClolors() {
        cy.get('@numberOfBlocks').then((numberOfBlocks) => {
            const arrayOfColors: any = [];

            for(let blockNumber = 0; blockNumber < +numberOfBlocks; blockNumber++ ) {
                this.getTheColorBlock()
                .eq(blockNumber)
                .invoke('attr', 'style')
                .then((blockColor) => {
                    if(!arrayOfColors.includes(blockColor)) {
                        arrayOfColors.push(blockColor);
                    };
                });
            };

            cy.wrap(arrayOfColors).as('distinctColors');
        });
    }

    assertBlocksHaveDifferentColors() {
        cy.get('@numberOfBlocks').then((numberOfBlocks) => {
            cy.get('@distinctColors').then((distinctColors) => {
                expect (numberOfBlocks).to.equal(distinctColors.length);
            })
        })
    }

    getTheColorBlock() {
        return cy.get('[data-cy="color-bloc"]');
    }
}

export const colorsPage = new ColorsPage();