const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
