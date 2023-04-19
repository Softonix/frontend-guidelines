/// <reference types="cypress" />

Cypress.Commands.add('getByTestId', (value) => {
  return cy.get(`[data-testid="${value}"]`)
})
