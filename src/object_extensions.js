Object.prototype.$forEach = function(callback) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) callback(key, this[key]);
  }
};
