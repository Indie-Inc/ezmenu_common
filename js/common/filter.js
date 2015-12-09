import Vue from 'vue'

Vue.filter('resizeImage', (url, width, height) => {
  if (!url) { return '' } 
  var prefixes = []
  if (width) {
    prefixes.push('w_' + width)
  }
  if (height) {
    prefixes.push('h_' + height)
  }
  if (prefixes.length == 0) {
    return url
  } else {
    // http://res.cloudinary.com/demo/image/upload/v1449646690/boulder.jpg
    // http://res.cloudinary.com/demo/image/upload/w_500,h_150/v1449646690/boulder.jpg
    var strs = url.split('/')
    var orgs = strs.splice(0, strs.length - 2)
    return [orgs.join('/'), prefixes.join(','), strs[0], strs[1]].join('/')
  }
})

export default Vue
