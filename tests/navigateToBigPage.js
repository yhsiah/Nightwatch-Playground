var config = require('../nightwatch.conf.js');

module.exports = {

  'Assert Link to Big Page is valid and works': function(browser) {
    var automationPracticePage = browser.page.automationPractice();
    var contents = automationPracticePage.section.contents;

    automationPracticePage.navigate()

    contents
      .waitForElementVisible('@bigPage')
      .expect.element('@bigPage').text.to.equal('Big page with many elements');

    contents.click('@bigPage')

    browser
      .pause(3000)
      .end();
  }
};
