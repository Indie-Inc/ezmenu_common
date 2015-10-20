/**
 * localStorage
 */
export default {

    cache: {},

    adapter: {
      set(what, value) {
        return localStorage.setItem(what, value);
      },

      get(what) {
        return localStorage.getItem(what);
      },

      remove(what) {
        return localStorage.removeItem(what);
      }
    },

    set(name, elem) {
      this.cache[name] = elem;
      this.adapter.set(name, JSON.stringify(elem));
    },

    get(name) {
      if (this.cache[name]) {
        return this.cache[name];
      }
      var saved = this.adapter.get(name);
      return saved ? JSON.parse(saved) : null;
    },

    remove(name) {
      this.cache[name] = null;
      this.adapter.remove(name);
    }
}