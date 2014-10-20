Object.prototype.$forEach = function(callback) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) callback(key, this[key]);
  }
};

Object.prototype.$try = function(method, args) {
  method = this[method];
  if (method === undefined) {
    return null;
  } else if (typeof method === 'function') {
    return method.apply(null, args);
  } else {
    return method;
  }
};
