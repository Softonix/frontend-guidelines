import { featureFlags } from '../../support'

describe('Feature flag switcher', () => {
  beforeEach(() => {
    featureFlags.visitTheFeatureFlagPage()
  })

  it('should turn On and Off the Feature flag if clicking', () => {
    featureFlags.verifyTheSwitcherIsUnchecked()

    featureFlags.clickTheSwithcer()

    featureFlags.verifySwitcherIsChecked()

    featureFlags.saveTheFeatureFlagName()

    featureFlags.assertFFInLocalStorage()

    featureFlags.clickTheLoginButton()

    featureFlags.assertTheFFButtonExist()

    cy.reload()

    featureFlags.assertFFInLocalStorage()

    featureFlags.visitTheFeatureFlagPage()

    featureFlags.clickTheSwithcer()

    featureFlags.assertFFremovedFromLocalStorage()

    featureFlags.clickTheLoginButton()

    featureFlags.assertTheFFButtonDoesntExist()
  })
})
