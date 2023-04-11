import { featureFlag } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/featureFlagPageObject';

describe('Feature Flag Page', () => {
    it('should display Feature Enabled when visiting the first time', () => {

        featureFlag.visitTheFeatureFlagPage();

        featureFlag.verifyTheSwitcherIsUnchecked();

        featureFlag.clickTheSwithcer();

        featureFlag.verifyTheSwitcherIsChecked();

        featureFlag.saveTheFeatureFlagName();
        
        featureFlag.assertFFexistInLocalStorage();
        

        featureFlag.clickTheLoginButton();

        featureFlag.assertTheFFButtonExist();

        cy.reload();

        featureFlag.assertFFexistInLocalStorage();

        featureFlag.visitTheFeatureFlagPage();

        featureFlag.clickTheSwithcer();

        featureFlag.assertFFremovedFromLocalStorage();

        featureFlag.clickTheLoginButton();

        featureFlag.assertTheFFButtonDoesntExist();
    });
  })