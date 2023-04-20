import { GeneralCommands } from '../'

export class ExamplePage extends GeneralCommands {
  visitTheExamplesPage () {
    cy.visit('/example')
  }

  getTheGeneralStoreButton () {
    return cy.getByTestId('general-store-button')
  }

  getTheGeneralStoreText () {
    return cy.getByTestId('general-store-text')
  }

  interceptGetGeneralStoreRequest () {
    return cy.intercept({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/*'
    })
  }

  clickTheGeneralStoreButton () {
    this.getTheGeneralStoreButton().click()
  }

  saveTheResponseId (requestAlias: string) {
    return cy.wait(`@${requestAlias}`).then(({ response }) => {
      const responseId = `"id": ${response && response.body.id}`

      return responseId
    })
  }

  assertTheValueInGeneralStoreText (valueAlias: string) {
    return cy.get(`@${valueAlias}`).then((valueAlias) => {
      this.getTheGeneralStoreText()
        .should('contain.text', `${valueAlias}`)
    })
  }

  assertTheRequestIDsAreDifferent (firstRequestIdalias: string, secondRequestIdAlias: string) {
    cy.get(`@${firstRequestIdalias}`).then((firstRequestId) => {
      cy.get(`@${secondRequestIdAlias}`).then((secondRequestId) => {
        expect(firstRequestId).not.equal(secondRequestId)
      })
    })
  }
}

export const examplesPage = new ExamplePage()
