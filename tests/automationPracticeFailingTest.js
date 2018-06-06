var config = require('../nightwatch.conf.js');

// Note that this test is designed to fail

module.exports = {
  // disabled: true,

  'Assert Automation Practice Title (Should Fail)': function(browser) {
    var automationPracticePage = browser.page.automationPractice();

    automationPracticePage
      .navigate()
      .waitForElementVisible('body')
      .assert.title('Automation Practice - Failing Test');

    browser.end();
  }
};
