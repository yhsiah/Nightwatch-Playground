var config = require('../nightwatch.conf.js');

module.exports = {

  'Assert Automation Practice Title, Header and Subheader': function(browser) {
    var automationPracticePage = browser.page.automationPractice();

    automationPracticePage
      .navigate()
      .waitForElementVisible('body')
      .assert.title('Automation Practice - Ultimate QA')
      .waitForElementVisible('@header')
      .assert.containsText('@header', 'Automation Practice')
      .waitForElementVisible('@subHeader')
      .assert.containsText('@subHeader',  'Use your skills to learn how to automate different scenarios')
  },

  'Assert Automation Practice Contents': function(browser) {
    var automationPracticePage = browser.page.automationPractice();
    var contents = automationPracticePage.section.contents;

    automationPracticePage.expect.section('@contents').to.be.visible;
    contents.expect.element('@bigPage').text.to.equal('Big page with many elements');
    contents.expect.element('@landingPage').text.to.equal('Fake Landing Page');
    contents.expect.element('@pricingPage').text.to.equal('Fake Pricing Page');
    contents.expect.element('@formsPage').text.to.equal('Fill out forms');
    contents.expect.element('@changingPage').text.to.equal('Learn how to automate an application that evolves over time');
    contents.expect.element('@loginPage').text.to.equal('Login automation');
    contents.expect.element('@simplePage').text.to.equal('Interactions with simple elements');
    browser.end();
  }
};
