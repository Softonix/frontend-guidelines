/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
declare global {
  namespace Cypress {
    interface Chainable {
      /**
         * Custom command to select DOM element by testId attribute.
         * @example cy.dataCy('greeting')
         */
      getByTestId(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

// Alternatively you can use CommonJS syntax:
// require('./commands')
