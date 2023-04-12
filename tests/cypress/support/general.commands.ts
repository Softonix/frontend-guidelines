export class GeneralCommands {
  clickTheLoginButton () {
    this.getThePageHeader()
      .contains('Login').click()
  }

  getTheFirstRow () {
    return cy.get('tbody').find('tr').eq(0)
  }

  getThePageHeader () {
    return cy.get('[data-cy="page-header"]')
  }
}
