export class GeneralCommands {
  getTheFirstRow () {
    return cy.get('tbody').find('tr').eq(0)
  }

  getThePageHeader () {
    return cy.getByTestId('page-header')
  }

  clickTheLoginButton () {
    this.getThePageHeader()
      .contains('Login').click()
  }
}
