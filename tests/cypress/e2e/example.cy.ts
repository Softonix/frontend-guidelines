describe('example', () => {
  it('intro', () => {
    cy.visit('/')

    cy.get('title').contains('Softonix')

    cy.url().should('include', '/example')

    cy.get('[data-testid=heading-text]').should('have.text', 'teleported from example view')

    cy.get('[data-testid=general-store-button]').click()

    cy.get('[data-testid=general-store-text]').contains('"userId"')
  })
})
