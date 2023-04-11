import { GeneralCommands } from '/Users/admin/Desktop/frontend-guidelines/tests/cypress/support/generalPageObject';

export class FeatureFlag extends GeneralCommands {
    visitTheFeatureFlagPage() {
        cy.visit('/example-flags')
    }

    verifyTheSwitcherIsUnchecked() {
        this.getTheSwitcher()
        .first()
        .find('input')
        .invoke('attr', 'aria-checked')
        .should('eq', 'false')
    }

    clickTheSwithcer() {
        this.getTheSwitcher()
        .first()
        .click()
    }

    verifyTheSwitcherIsChecked() {
        this.getTheSwitcher()
        .first()
        .find('input')
        .invoke('attr', 'aria-checked')
        .should('eq', 'true');
    }

    saveTheFeatureFlagName() {
        this.getTheFirstRow()
        .then((featureFlag) => {
            const flagName = featureFlag.text();

            cy.wrap(flagName).as('flagName')
        });
    }

    assertFFexistInLocalStorage() {
        cy.get('@flagName').then((flagName) => {
            cy.window()
            .its('localStorage')
            .invoke('getItem', flagName)
            .should('exist');
        })
    }

    assertFFremovedFromLocalStorage() {
        cy.get('@flagName').then((flagName) => {
            cy.window()
            .its('localStorage')
            .invoke('getItem', flagName)
            .should('not.exist');
        })
    }

    assertTheFFButtonExist() {
        this.getTheFeatureFlagButton()
        .should('exist');
    }

    assertTheFFButtonDoesntExist() {
        this.getTheFeatureFlagButton()
        .should('not.exist');
    }

    getTheFeatureFlagButton() {
        return cy.get('[data-cy="feature-flag"]');
    }

    getTheSwitcher() {
        return cy.get('[data-cy="swtich"]');
    }
}

export const featureFlag = new FeatureFlag();