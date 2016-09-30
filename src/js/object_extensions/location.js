Object.defineProperties(Location.prototype, {
  $params: {
    enumerable: false,
    get: function() {
      return Sprinkles.QueryString.parse(this.search);
    }
  }
});
