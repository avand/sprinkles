Object.prototype.$forEach = function(callback) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) callback(key, this[key]);
  }
};

Object.prototype.$try = function() {
  var args = Array.prototype.slice.call(arguments);
  var method = this[args.shift()];
  if (method === undefined) {
    return;
  } else if (typeof method === 'function') {
    return method.apply(null, args);
  } else {
    return method;
  }
};
