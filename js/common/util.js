import $ from 'jquery'

var util = {

    _requests: {},

    escapeHTML(text) {
      return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },

    trim(str) {
      if (str === null) { str = '' }
      str = str.trim()
      return str.replace(/\n/g, '');
    },

    timestamp() {
      return new Date().getTime()
    },

    request(options={}) {
      return new Promise((resolve, reject) => {
        var headers = options.headers || {}
        var requestId = util.timestamp()
        var xhr = $.ajax({    
          type: options.type || 'GET',
          headers: headers,
          url: options.url,
          data: options.data || null,
          dataType: options.dataType || 'json',
          contentType: options.contentType || 'application/json; charset=utf-8',
          cache: options.cache || false,
          success: resolve,
          error: reject,
          complete() {
            delete util._requests[requestId]
          }
        })
        util._requests[requestId] = xhr
      })
    },

    abortRequests() {
      // abort all existing requests
      for (var requestId in util._requests) {
        if (requestId && util._requests[requestId]) {
          util._requests[requestId].abort()
        }
      }
      util._requests = {}
    },

    detect(list, iterator) {
      var r = null
      list.forEach((obj) => {
        var result = iterator(obj)
        if (result) {
          r = obj
        }
      })
      return r
    },

    throttle(callback, limit) {
      var wait = false
      return function () {
        if (!wait) {
          callback()
          wait = true
          setTimeout(function () {
              wait = false
              callback()
          }, limit)
        }
      }
    },

    debouncer(onStart, onStop, delay) {
        var timer,
            count = 0
        return () => {
            if(count === 0) {
                onStart && onStart()
            }
            timer && clearTimeout(timer)
            timer = setTimeout(() => {
                onStop && onStop()
                count = 0
            }, delay || 500)
        }
    },

    pluck(arr, key) {
      if (!arr || arr.length === 0) { return [] }
      var newArr = []
      arr.forEach((obj) => {
        newArr.push(obj[key])
      })
      return newArr
    },

    simpleDeepClone(data) {
      return JSON.parse(JSON.stringify(data))
    },

    without(list, rejectedItem, key) {
      var item, i, len
      var results = []
      for (var i = 0, len = list.length; i < len; i++) {
        item = list[i]
        if ((!key && item !== rejectedItem) || (key && item[key] !== rejectedItem[key]))  {
          results.push(item)
        }
      }
      return results
    }
}

export default util