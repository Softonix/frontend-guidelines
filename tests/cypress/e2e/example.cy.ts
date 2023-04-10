describe('Test', () => {
  it('Test', () => {
    cy.visit('/')

    cy.url().should('include', '/example')

    cy.get('[data-testid=general-store-button]')
      .should('exist')
      .should('have.text', ' get general store value ')
  })
})
