require('../lib/jquery.deparam')

export default {

    getUrlQueryParams() {
      return $.deparam(location.search.substring(1))
    },

    // return for parse search query params
    // e.g. /?search={"where":{"town":{"$regex":"shibuya"}}}#/
    getUrlSearchQueryParams() {
      var search = {}
      var params = this.getUrlQueryParams()
      if(params && params.search) {
        try {
          search = JSON.parse(params.search)
        } catch(e) {}
      }
      return search
    }
}