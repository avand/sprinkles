Object.defineProperties(Node.prototype, {
  $removeChildren: {
    enumerable: false,
    value: function() {
      while (this.hasChildNodes()) {
        this.removeChild(this.lastChild);
      }
    }
  }
});
