const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions:{
    charts : true,
    resultsDir: "allure-results",
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
},
  e2e: {
   async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],  // Ensure this is correctly configured
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      
    
      return config;
    },
    env: {
        allureReuseAfterSpec: true,
        allure:true
    },
    specPattern: "cypress/e2e/**/*.feature",
    
  },

});