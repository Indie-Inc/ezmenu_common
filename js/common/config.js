var $ = window.jQuery || window.Zepto
var globalConfig = (window.OPTION && window.OPTION.config) || {}

var parseKeys = {
  production: {
    url: 'https://api.parse.com/1',
    appId: 'OBhvHWm77KWjcaqExrOouaaMXihA4CtQAB4pzsfz',
    appKey: 'LYs8VzHUXjuFLssXQmYmbQ2qRSZgNXrqTH7rU44i'
  },
  development: {
    url: 'https://api.parse.com/1',
    appId: 'OBhvHWm77KWjcaqExrOouaaMXihA4CtQAB4pzsfz',
    appKey: 'LYs8VzHUXjuFLssXQmYmbQ2qRSZgNXrqTH7rU44i'
  }
}

module.exports = $.extend({}, globalConfig, {
    api: parseKeys[globalConfig.environment || 'development']
})