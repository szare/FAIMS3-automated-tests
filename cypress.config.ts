import { defineConfig } from 'cypress'
import { LOCAL } from './cypress/e2e/constants/routes/URL';
import { resolve } from 'path';

export default defineConfig({

  e2e: {
    baseUrl: LOCAL,
    testIsolation: false,
    //chromeWebSecurity: false,
    experimentalStudio: true,
    env: {
      api_url: 'working !!!!!'
    },


    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: resolve('cypress/reports/mochawesome')
    }
  },
})