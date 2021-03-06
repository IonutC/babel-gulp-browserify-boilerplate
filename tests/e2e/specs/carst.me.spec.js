module.exports = {
  "Test carst.me" : function (browser) {
      browser
        .url('https://carst.me')
        .waitForElementVisible('body', 1000)
        .click('#menu-item-405')
        .pause(1000)
        .url('https://carst.me/about-me/')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .assert.containsText('.entry-title', 'About Me')
        .end();
  }
};
