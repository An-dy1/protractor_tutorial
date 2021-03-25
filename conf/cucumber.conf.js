exports.config = {
    capabilities: {
        browserName: 'chrome',

        /**
         * If this is set to be true, specs will be sharded by file (i.e. all
         * files to be run by this set of capabilities will run in parallel).
         * Default is false.
         */
        shardTestFiles: true
    },

    baseUrl:'https://angularjs.org',

    // set to "custom" instead of cucumber.
    framework: 'custom',
  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // require feature files
    specs: [
      './tests/features/*.feature' // accepts a glob
    ],
  
    cucumberOpts: {
      // require step definitions
      require: [
        'path/to/step/definitions/**/*.steps.js' // accepts a glob
      ]
    },


    /**
   * A callback function called once protractor is ready and available, and
   * before the specs are executed. If multiple capabilities are being run,
   * this will run once per capability.
   *
   * You can specify a file containing code to run by setting onPrepare to
   * the filename string. onPrepare can optionally return a promise, which
   * Protractor will wait for before continuing execution. This can be used if
   * the preparation involves any asynchronous calls, e.g. interacting with
   * the browser. Otherwise Protractor cannot guarantee order of execution
   * and may start the tests before preparation finishes.
   *
   * At this point, global variable 'protractor' object will be set up, and
   * globals from the test framework will be available. For example, if you
   * are using Jasmine, you can add a reporter with:
   *
   *    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
   *      'outputdir/', true, true));
   *
   * If you need access back to the current configuration object,
   * use a pattern like the following:
   *
   *    return browser.getProcessedConfig().then(function(config) {
   *      // config.capabilities is the CURRENT capability being run, if
   *      // you are using multiCapabilities.
   *      console.log('Executing capability', config.capabilities);
   *    });
   */
    onPrepare: function () {
        const {Given, Then, When, Before} = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before;
      }
  };