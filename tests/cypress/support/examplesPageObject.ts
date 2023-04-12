import { GeneralCommands } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/generalPageObject';

export class ExamplesPage extends GeneralCommands {
    visitTheExamplesPage() {
        cy.visit('/example')
    }
    
    interceptGetGeneralStoreRequest(requestAlias: string) {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/*',
          }).as(`${requestAlias}`);
    }

    clickTheGeneralStoreButton() {
        this.getTheGeneralStoreButton()
        .click();
    }

    saveTheResposeId(requestAlias: string, requestIdAlias: string){
        cy.wait(`@${requestAlias}`).then((request) => {
            const requestID = `"id": ${request.response.body.id}`;

            cy.wrap(requestID).as(`${requestIdAlias}`)
        });
    }

    assertTheIdAppearedInTheGeneralStoreText(requestId: string) {
        cy.get(`@${requestId}`).then((requestID) => {
          this.getTheGeneralStoreText()
          .should('contain.text', `${requestID}`)
        })
      }

    getTheGeneralStoreButton() {
        return cy.get('[data-cy="general-store-button"]');
    }

    getTheGeneralStoreText() {
        return cy.get('[data-cy="general-store-text"]');
    }
}

export const examplesPage = new ExamplesPage();