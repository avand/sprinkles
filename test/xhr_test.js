module("xhr", {
  setup: function() {
    this.server = sinon.fakeServer.create();
  },

  teardown: function() {
    this.server.restore();
  }
});

test("get success", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.$get("/foo.txt", success, error);
  this.server.respond("GET", "/foo.txt", [200, {}, "success"]);

  ok(success.calledWith("success"));
  ok(error.notCalled);
});

test("get error", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.$get("/foo.txt", success, error);
  this.server.respond("GET", "/foo.txt", [500, {}, "error"]);

  ok(success.notCalled);
  ok(error.calledWith("error"));
});

test("getJSON success", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.$getJSON("/foo.json", success, error);
  this.server.respond("GET", "/foo.json", [200, {}, '{ "foo": "bar" }']);

  ok(success.calledWith({ foo: "bar" }));
  ok(error.notCalled);
});

test("getJSON error", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.$getJSON("/foo.json", success, error);
  this.server.respond("GET", "/foo.json", [500, {}, '{ "foo": "bar" }']);

  ok(success.notCalled);
  ok(error.calledWith({ foo: "bar" }));
});
