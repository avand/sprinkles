describe("Sprinkles.QueryString", function() {
  var qs = Sprinkles.QueryString;

  describe("parse()", function() {
    it("returns an object with each parameter as a property", function() {
      var base = "http://example.com";
      assert.deepEqual(qs.parse(base + "?a=1"), { "a": "1" });
      assert.deepEqual(qs.parse(base + "?1=a"), { "1": "a" });
      assert.deepEqual(qs.parse(base + "?a=1&b=2"), { "a": "1", "b": "2" });
      assert.deepEqual(qs.parse(base + "?a=1&a=2"), { "a": "2" });
      assert.deepEqual(qs.parse(base + "?a%201=b%3D2"), { "a 1": "b=2" });
    });
  });
});
