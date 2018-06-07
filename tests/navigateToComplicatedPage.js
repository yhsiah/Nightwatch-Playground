var config = require('../nightwatch.conf.js');

module.exports = {

  'Assert Link to Big Page is valid and works': function(browser) {
    var automationPracticePage = browser.page.automationPractice();
    var contents = automationPracticePage.section.contents;

    automationPracticePage.navigate()

    contents
      .waitForElementVisible('@complicatedPage')
      .expect.element('@complicatedPage').text.to.equal('Big page with many elements');

    contents.click('@complicatedPage')
  },

  'Assert Big Page view is loaded': (browser) => {
    var complicatedPage = browser.page.complicatedPage();

    complicatedPage
      .waitForElementVisible('@header')
      .expect.element('@header').text.to.equal('Skills Improved:')

    complicatedPage
      .waitForElementVisible('@subHeader')
      .expect.element('@subHeader').text.to.contain('How to deal with a large page that has many elements and divisions?')

    complicatedPage
      .expect.element('@subHeader').text.to.contain('Properly structuring your page objects');

    browser.end();
  }
};
