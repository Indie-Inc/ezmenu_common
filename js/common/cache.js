/**
 * Cache
 * Store API response cache and temp data
 */
export default {

  _ref: {
  },

  set(key, value) {
    this._ref[key] = value
  },

  get(key) {
    return this._ref[key]
  }
}
