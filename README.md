# Notes

- conf and tests directories were created manually following along with the Youtube tutorial
- spec and support directories were created following along with this tutorial: https://jasmine.github.io/2.3/node.html#section-Configuration; note: it currently does not point to the test in my `tests` directory - the spec file naming is different
- to add nicer console output, I installed jasmine-console-reporter based on the third answer on this question: https://stackoverflow.com/questions/7157999/output-jasmine-test-results-to-the-console
- TODO: as of March 21, not seeing verbose logs following those steps. Where to call jasmine.callReporter() or whatever

## to run:

requires `conf.js` and `spec.js`
Does NOT need to be named that

1. conf.js = configuration file: browsers, framework, etc; points at test file
2. spec.js = test file

# Useful documentation

1. Jasmine cheatsheet: https://devhints.io/jasmine
2. Protractor API: https://www.protractortest.org/#/api

# Jasmine console reporter docs

Jasmine console reporter node package: https://www.npmjs.com/package/jasmine-console-reporter
Github repo, not much more info except for pretty screenshots: https://github.com/onury/jasmine-console-reporter

# Protractor and Cucumber:

https://medium.com/@tuliobluz/automa%C3%A7%C3%A3o-com-protractor-pageobject-e-cucumber-122537179ab7
https://www.npmjs.com/package/protractor-cucumber-framework

# Parameterizing

I parameterized my calculator test according to the process described here: https://stackoverflow.com/a/55909737/11149190

# Allure report, html docs:

Step 1 : Install jasmine allure reports plugin

https://www.npmjs.com/package/jasmine...​

`npm i -g jasmine-allure-reporter`

Step 2 : Add configuration in conf.js

Step 3 : Run conf.js and check allure-reports are generated - changed destination to target folder

- this will generate an xml report

Step 4 : Add allure command line tool:

- REQUIRES Java 8 or higher installed

https://www.npmjs.com/package/allure-...​

`npm i allure-commandline`

Step 5 : Run command
`allure serve “location/of/allure-results/folder”`
