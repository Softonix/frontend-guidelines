/// <reference types="cypress" />
import { featureFlags } from '../../support'

describe('Feature flag switcher', () => {
  beforeEach(() => {
    featureFlags.visitTheFeatureFlagPage()
  })

  it('should turn On and Off the Feature flag if clicking', () => {
    featureFlags.verifyTheSwitcherIsUnchecked()

    featureFlags.clickTheSwithcer()

    featureFlags.verifySwitcherIsChecked()

    featureFlags.saveTheFeatureFlagName().as('featureFlagName')

    featureFlags.assertTheValueInLocalStorage('featureFlagName')

    featureFlags.clickTheLoginButton()

    featureFlags.assertTheFFButtonExist()

    cy.reload()

    featureFlags.assertTheValueInLocalStorage('featureFlagName')

    featureFlags.visitTheFeatureFlagPage()

    featureFlags.clickTheSwithcer()

    featureFlags.assertTheValueIsNotInLocalStorage('featureFlagName')

    featureFlags.clickTheLoginButton()

    featureFlags.assertTheFFButtonDoesntExist()
  })
})
