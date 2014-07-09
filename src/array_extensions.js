Array.prototype.$flatten = function() {
  return this.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};

Array.prototype.$groupBy = function(accumulator) {
  var result = {};

  this.forEach(function(n) {
    var key = accumulator(n);
    if (result[key] === undefined) result[key] = [];
    result[key].push(n);
  });

  return result;
};
