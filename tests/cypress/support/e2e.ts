/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */

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
