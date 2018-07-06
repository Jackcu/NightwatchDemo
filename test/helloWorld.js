var comm = require("../libs/comm.js");

module.exports = {

    '测试百度title关键字': function (browser) {
        browser
            .url('https://www.baidu.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[id=kw]', 'nightwatch')
            .pause(2000)

            .getTitle(function (title) {
                this.assert.equal(
                    title.includes("night")
                    , true, "title contains 'night'")
            })

            .end();
    },

    '测试supplier端首页验证码是否显示': function (browser) {
        browser
            .url('http://supplier.uhetrip.com/')
            .waitForElementVisible('body', 2000)

            .getTitle(function (title) {
                this.assert.equal(
                    title.includes("signIn")
                    , true, "title contains 'signIn'")
            })

            .waitForElementVisible('img[class=validateCode]', 1000)
            .end();
    }
    
};