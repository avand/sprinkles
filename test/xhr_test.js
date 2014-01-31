module("xhr", {
  setup: function() {
    this.proxy = sinon.sandbox.useFakeXMLHttpRequest();

    this.proxy.xhr.onCreate = (function(request) {
      this.request = request;
    }).bind(this);
  },

  teardown: function() { delete this.request; }
});

test("get success", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.get("/path/to/resource.txt", success, error);
  this.request.respond(200, {}, "success");

  ok(success.calledWith("success"));
  ok(error.notCalled);
});

test("get error", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.get("/path/to/resource.txt", success, error);
  this.request.respond(500, {}, "error");

  ok(success.notCalled);
  ok(error.calledWith("error"));
});

test("getJSON success", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.getJSON("/path/to/resource.json", success, error);
  this.request.respond(200, {}, '{ "foo": "bar" }')

  ok(success.calledWith({ foo: "bar" }))
  ok(error.notCalled);
});

test("getJSON error", function() {
  var success = sinon.spy(), error = sinon.spy();

  window.getJSON("/path/to/resource.json", success, error);
  this.request.respond(500, {}, '{ "foo": "bar" }');

  ok(success.notCalled);
  ok(error.calledWith({ foo: "bar" }));
});
