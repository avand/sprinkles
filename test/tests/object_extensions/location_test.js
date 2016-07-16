var search = "?foo=bar";

if (window.location.search != search) window.location.search = search;

describe("Location.prototype", function() {
  describe("$params", function() {
    it("passes window.location.search to Sprinkles.QueryString.parse and returns the results", function() {
      sinon.spy(Sprinkles.QueryString, "parse");

      assert.deepEqual(window.location.$params, { "foo": "bar" });
      assert.isOk(Sprinkles.QueryString.parse.calledOnce);
      assert.isOk(Sprinkles.QueryString.parse.calledWithExactly(search));

      Sprinkles.QueryString.parse.restore();
    })
  });
});
