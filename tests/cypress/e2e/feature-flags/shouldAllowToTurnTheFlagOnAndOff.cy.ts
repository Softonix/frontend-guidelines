import { featureFlags } from '../../support'

describe('Feature Flag Page', () => {
  beforeEach(() => {
    featureFlags.visitTheFeatureFlagPage()
  })

  it('should display Feature Enabled when visiting the first time', () => {
    featureFlags.verifyTheSwitcherIsUnchecked()

    featureFlags.clickTheSwithcer()

    featureFlags.verifyTheSwitcherIsChecked()

    featureFlags.saveTheFeatureFlagName()

    featureFlags.assertFFexistInLocalStorage()

    featureFlags.clickTheLoginButton()

    featureFlags.assertTheFFButtonExist()

    cy.reload()

    featureFlags.assertFFexistInLocalStorage()

    featureFlags.visitTheFeatureFlagPage()

    featureFlags.clickTheSwithcer()

    featureFlags.assertFFremovedFromLocalStorage()

    featureFlags.clickTheLoginButton()

    featureFlags.assertTheFFButtonDoesntExist()
  })
})
