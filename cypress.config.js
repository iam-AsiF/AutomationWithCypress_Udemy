const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

/*
    Suppose, we have different test folder for different test plan. To make sure cypress can find that folder and runs test
    cases inside it we need to guide cypress to that folder. Here, we need to use function called specPattern:

    How to write- specPattern: 'cypress/e2e/createdFolderName/*.cy.js'
    Here, (*.cy.js) will find every test cases, AKA spec files inside that specific folder and will be able to run.
*/

  //specPattern: 'pathDirectory'
  
  },
});
