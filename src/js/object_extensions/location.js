Object.defineProperties(Location.prototype, {
  $params: {
    get: function() {
      return Sprinkles.QueryString.parse(this.search);
    }
  }
});
