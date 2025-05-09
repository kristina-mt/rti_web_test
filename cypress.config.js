const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://rtiautolocksmith.co.uk",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    }
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  }
});
