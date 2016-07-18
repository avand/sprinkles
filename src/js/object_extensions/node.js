Node.prototype.$removeChildren = function() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
};
