module("location extensions");

test("Location.$getParams", function() {
  deepEqual(Location.$getParams("?a=1"),         { "a": "1" });
  deepEqual(Location.$getParams("?1=a"),         { "1": "a" });
  deepEqual(Location.$getParams("?a=1&b=2"),     { "a": "1", "b": "2" });
  deepEqual(Location.$getParams("?a=1&a=2"),     { "a": "2" });
  deepEqual(Location.$getParams("?a%201=b%3D2"), { "a 1": "b=2" });
});

test("Location.$getParam", function() {
  deepEqual(Location.$getParam("?a=1", "a"),           "1");
  deepEqual(Location.$getParam("?1=a", "1"),           "a");
  deepEqual(Location.$getParam("?a=1&b=2", "a"),       "1");
  deepEqual(Location.$getParam("?a=1&a=2", "a"),       "2");
  deepEqual(Location.$getParam("?a%201=b%3D2", "a 1"), "b=2");
});

test("Location.prototype.$getParams()", function() {
  this.spy(Location, "$getParams");

  deepEqual(window.location.$getParams(), {});
  ok(Location.$getParams.calledOnce);
  ok(Location.$getParams.calledWithExactly(""));

  Location.$getParams.restore();
});

test("Location.prototype.$getParam()", function() {
  this.spy(Location, "$getParam");

  equal(window.location.$getParam("a"), null);
  ok(Location.$getParam.calledOnce);
  ok(Location.$getParam.calledWithExactly("", "a"));

  Location.$getParam.restore();
});
