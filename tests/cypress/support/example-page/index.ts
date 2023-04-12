import { GeneralCommands } from '../'

export class ExamplePage extends GeneralCommands {
  visitTheExamplesPage () {
    cy.visit('/example')
  }

  getTheGeneralStoreButton () {
    return cy.get('[data-cy="general-store-button"]')
  }

  getTheGeneralStoreText () {
    return cy.get('[data-cy="general-store-text"]')
  }

  interceptGetGeneralStoreRequest (requestAlias: string) {
    cy.intercept({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/*'
    }).as(requestAlias)
  }

  clickTheGeneralStoreButton () {
    this.getTheGeneralStoreButton().click()
  }

  saveTheResponseId (requestAlias: string, requestIdAlias: string) {
    cy.wait(`@${requestAlias}`).then(({ response }) => {
      const requestID = `"id": ${response && response.body.id}`

      cy.wrap(requestID).as(`${requestIdAlias}`)
    })
  }

  assertTheIdAppearedInTheGeneralStoreText (requestId: string) {
    cy.get(`@${requestId}`).then((requestID) => {
      this.getTheGeneralStoreText()
        .should('contain.text', `${requestID}`)
    })
  }
}

export const examplesPage = new ExamplePage()
