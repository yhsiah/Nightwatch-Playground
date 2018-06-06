module.exports = {
  url: 'https://www.ultimateqa.com/automation/',
  elements: {
    header: {selector: '.et_pb_module_header'},
    subHeader:{selector: '.et_pb_fullwidth_header_subhead'}
  },

  sections: {
    contents: {
      selector: '.et_pb_text_inner',
      elements: {
        bigPage: {selector: 'ul > li:nth-child(1) > a'},
        landingPage: {selector: 'ul > li:nth-child(2) > a'},
        pricingPage: {selector: 'ul > li:nth-child(3) > a'},
        formsPage: {selector: 'ul > li:nth-child(4) > a'},
        changingPage: {selector: 'ul > li:nth-child(5) > a'},
        loginPage: {selector: 'ul > li:nth-child(6) > a'},
        simplePage: {selector: 'ul > li:nth-child(7) > a'}
      }
    }
  }
}
