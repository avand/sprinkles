Document.prototype.$cookies = {
  set: function(key, value) {
    document.cookie = key + "=" + value + "; path=/";
  },

  get: function(key) {
    var matches = document.cookie.match(new RegExp(key + "=(.*)(;)?"));
    return matches ? matches[1] : null;
  },

  remove: function(key) {
    var value = this.get(key);
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    return value;
  },

  clear: function() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      this.remove(key);
    }.bind(this));
  }
};
