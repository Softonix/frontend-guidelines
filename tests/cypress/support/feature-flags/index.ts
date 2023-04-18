import { GeneralCommands } from '../'

export class FeatureFlags extends GeneralCommands {
  visitTheFeatureFlagPage () {
    cy.visit('/example-flags')
  }

  getTheFeatureFlagButton () {
    return cy.getByTestId('feature-flag')
  }

  getTheSwitcher () {
    return cy.getByTestId('heading-text')
  }

  verifyTheSwitcherIsUnchecked () {
    this.getTheSwitcher()
      .first()
      .find('input')
      .invoke('attr', 'aria-checked')
      .should('eq', 'false')
  }

  clickTheSwithcer () {
    this.getTheSwitcher()
      .first()
      .click()
  }

  verifySwitcherIsChecked () {
    this.getTheSwitcher()
      .first()
      .find('input')
      .invoke('attr', 'aria-checked')
      .should('eq', 'true')
  }

  saveTheFeatureFlagName () {
    this.getTheFirstRow()
      .then((featureFlag) => {
        const flagName = featureFlag.text()

        cy.wrap(flagName).as('flagName')
      })
  }

  assertFFInLocalStorage () {
    cy.get('@flagName').then((flagName) => {
      cy.window()
        .its('localStorage')
        .invoke('getItem', flagName)
        .should('exist')
    })
  }

  assertFFremovedFromLocalStorage () {
    cy.get('@flagName').then((flagName) => {
      cy.window()
        .its('localStorage')
        .invoke('getItem', flagName)
        .should('not.exist')
    })
  }

  assertTheFFButtonExist () {
    this.getTheFeatureFlagButton()
      .should('exist')
  }

  assertTheFFButtonDoesntExist () {
    this.getTheFeatureFlagButton()
      .should('not.be.visible')
  }
}

export const featureFlags = new FeatureFlags()
