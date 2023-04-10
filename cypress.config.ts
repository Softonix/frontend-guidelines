import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    fixturesFolder: 'tests/cypress/fixtures',
    specPattern: 'tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    screenshotsFolder: 'tests/cypress/screenshots',
    videosFolder: 'tests/cypress/videos',
    downloadsFolder: 'tests/cypress/downloads',

    baseUrl: 'http://localhost:5173'
  }
})
