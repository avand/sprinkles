Document.prototype.$cookies = {
  setItem: function(key, value) {
    document.cookie = key + "=" + value + "; path=/";
  },

  getItem: function(key) {
    var matches = document.cookie.match(new RegExp(key + "=(.*)(;)?"));
    return matches ? matches[1] : null;
  },

  removeItem: function(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  },

  clear: function() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      this.removeItem(key);
    }.bind(this));
  }
};
