const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 

    baseUrl : 'http://localhost:3000',

    //iphone un comment to switch to this view
    // viewportWidth : 412,
    // viewportHeight : 915, 

    //


    experimentalStudio : true, 

    // this is where you can define diffrent screen width and height 
  },
});
