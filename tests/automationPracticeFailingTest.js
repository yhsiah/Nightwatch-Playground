var config = require('../nightwatch.conf.js');

// Note that this test is designed to fail

module.exports = {
  disabled: true,

  'Assert Automation Practice Title (Should Fail)': function(browser) {
    browser
      .url('https://www.ultimateqa.com/automation/')
      .waitForElementVisible('body')
      .assert.title('Automation Practice - Failing Test')
      .end();
  }
};
