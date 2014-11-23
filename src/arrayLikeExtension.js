Object.getOwnPropertyNames(this).filter(function (e) {
  return(this[e] && this[e].prototype && this[e].prototype && this[e].prototype.item);
}).forEach(function (w) {
  Object.getOwnPropertyNames(Array.prototype).forEach(function (e) {
    if(!this[w].prototype[e]) {
      this[w].prototype[e] = Array.prototype[e];
    }
  });
});
