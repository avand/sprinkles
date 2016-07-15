describe("Location", function() {
  describe("$getParams()", function() {
    it("returns an object with each parameter as a property", function() {
      assert.deepEqual(Location.$getParams("?a=1"), { "a": "1" });
      assert.deepEqual(Location.$getParams("?1=a"), { "1": "a" });
      assert.deepEqual(Location.$getParams("?a=1&b=2"), { "a": "1", "b": "2" });
      assert.deepEqual(Location.$getParams("?a=1&a=2"), { "a": "2" });
      assert.deepEqual(Location.$getParams("?a%201=b%3D2"), { "a 1": "b=2" });
    });
  });

  describe("$getParam()", function() {
    it("returns the value of a given parameter", function() {
      assert.deepEqual(Location.$getParam("?a=1", "a"), "1");
      assert.deepEqual(Location.$getParam("?1=a", "1"), "a");
      assert.deepEqual(Location.$getParam("?a=1&b=2", "a"), "1");
      assert.deepEqual(Location.$getParam("?a=1&a=2", "a"), "2");
      assert.deepEqual(Location.$getParam("?a%201=b%3D2", "a 1"), "b=2");
    });
  });
});
