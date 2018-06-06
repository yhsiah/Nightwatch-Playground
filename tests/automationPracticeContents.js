var config = require('../nightwatch.conf.js');

module.exports = {
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://www.ultimateqa.com/automation/')
      .waitForElementVisible('body')
      .assert.title('Automation Practice - Ultimate QA')
      .end();
  }
};
