import { defineConfig } from 'cypress'
import { LOCAL } from './cypress/e2e/constants/routes/URL';
import { resolve } from 'path';

export default defineConfig({

  e2e: {
    baseUrl: LOCAL,
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