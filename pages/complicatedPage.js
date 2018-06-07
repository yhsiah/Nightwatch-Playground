module.exports = {
  url: 'https://www.ultimateqa.com/complicated-page',
  elements: {
    header: {selector: 'div.et_pb_text:nth-child(1) > div:nth-child(1) > h2'},
    subHeader: {selector: 'div.et_pb_text:nth-child(1) > div:nth-child(1) > ul'},
    buttonsHeader: {selector: '.et_pb_text_1 > div:nth-child(1) > h1'},
    socialMediaHeader: {selector: '.et_pb_text_2 > div:nth-child(1) > h1'}, // to fill
    randomStuffHeader: {selector: '.et_pb_text_3 > div:nth-child(1) > h1'} // to fill
  },

  sections: {
    buttons: {
      selector: 'div.et_pb_row:nth-child(3)',
      elements: {
        button0: {selector: '.et_pb_button_0'},
        button1: {selector: '.et_pb_button_1'},
        button2: {selector: '.et_pb_button_2'},
        button3: {selector: '.et_pb_button_3'},
        button4: {selector: '.et_pb_button_4'},
        button5: {selector: '.et_pb_button_5'},
        button6: {selector: '.et_pb_button_6'},
        button7: {selector: '.et_pb_button_7'},
        button8: {selector: '.et_pb_button_8'},
        button9: {selector: '.et_pb_button_9'},
        button10: {selector: '.et_pb_button_10'},
        button11: {selector: '.et_pb_button_11'}
      }
    }
    // TO DO - sections for socialMedia and randomStuff
  }
}
