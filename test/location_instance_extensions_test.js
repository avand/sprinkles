var search = "?foo=bar";

if (window.location.search != search) window.location.search = search;

describe("Location.prototype", function() {
  describe("$getParams()", function() {
    it("passes the call along to the static method", function() {
      sinon.spy(Location, "$getParams");

      assert.deepEqual(window.location.$getParams(), { "foo": "bar" });
      assert.isOk(Location.$getParams.calledOnce);
      assert.isOk(Location.$getParams.calledWithExactly(search));

      Location.$getParams.restore();
    })
  });

  describe("$getParam()", function() {
    it("passes the call along to the static method", function() {
      sinon.spy(Location, "$getParam");

      assert.equal(window.location.$getParam("foo"), "bar");
      assert.isOk(Location.$getParam.calledOnce);
      assert.isOk(Location.$getParam.calledWithExactly(search, "foo"));

      Location.$getParam.restore();
    })
  });
});
