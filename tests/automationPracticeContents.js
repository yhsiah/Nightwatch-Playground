var config = require('../nightwatch.conf.js');

module.exports = {
  'Assert Automation Practice Title': function(browser) {
    browser
      .url('https://www.ultimateqa.com/automation/')
      .waitForElementVisible('body')
      .assert.title('Automation Practice - Ultimate QA')
  },

  'Assert Automation Practice Contents': function(browser) {
    browser
      .waitForElementVisible('.et_pb_text_inner')
      .assert.containsText('.et_pb_text_inner', 'Big page with many elements')
      .assert.containsText('.et_pb_text_inner', 'Fake Landing Page')
      .assert.containsText('.et_pb_text_inner', 'Fake Pricing Page')
      .assert.containsText('.et_pb_text_inner', 'Fill out forms')
      .assert.containsText('.et_pb_text_inner', 'Learn how to automate an application that evolves over time')
      .assert.containsText('.et_pb_text_inner', 'Login automation')
      .assert.containsText('.et_pb_text_inner', 'Interactions with simple elements')
      .end();
  }
};
