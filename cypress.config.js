const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true,
  e2e: {
    baseUrl: 'https://staging.azmeel.in/',
    requestTimeout: 300000,
    responseTimeout: 300000,
    setupNodeEvents(on, config) {
      return require('./plugins/index')(on,config)
      // implement node event listeners here
    },
  },
});
