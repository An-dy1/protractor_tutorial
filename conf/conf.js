// An example configuration file.
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'calculator-smoke-report.html'
});

exports.config = {

  // TODO: what does this do?
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator_spec.js'],

  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }, 

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'target/allure-results'
    }));
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  // html reporter 2 not generating xml file from which to create the html report; not worried about troubleshooting atm

  // onComplete: function() {
  //   var browserName, browserVersion;
  //   var capsPromise = browser.getCapabilities();

  //   capsPromise.then(function (caps) {
  //      browserName = caps.get('browserName');
  //      browserVersion = caps.get('version');
  //      platform = caps.get('platform');

  //      var HTMLReport = require('protractor-html-reporter-2');

  //      testConfig = {
  //          reportTitle: 'Protractor Test Execution Report',
  //          outputPath: './target/html-reporter',
  //          outputFilename: 'ProtractorTestReport',
  //          screenshotPath: './target/html-reporter/screenshots',
  //          testBrowser: browserName,
  //          browserVersion: browserVersion,
  //          modifiedSuiteName: false,
  //          screenshotsOnlyOnFailure: true,
  //          testPlatform: platform
  //      };
  //      new HTMLReport().from('./target/html-reporter/xmlresults.xml', testConfig);
   });
}

};
