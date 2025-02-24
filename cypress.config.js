const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
//const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
   async setupNodeEvents(on, config) {
      // implement node event listeners here
      
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],  // Ensure this is correctly configured
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      require("@shelex/cypress-allure-plugin/writer")(on, config); // Enable Allure
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "allure-results",
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      allure: true, // Enable Allure
    },
    
  },
});