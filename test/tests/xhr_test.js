describe("XHR", function() {
  var server;

  beforeEach(function() { server = sinon.fakeServer.create(); });
  afterEach(function() { server.restore() });

  describe("$get()", function() {
    it("calls success with the response as a parameter", function() {
      var success = sinon.spy(), error = sinon.spy();

      $get("/foo.txt", success, error);
      server.respond("GET", "/foo.txt", [200, {}, "success"]);

      assert.isOk(success.calledWith("success"));
      assert.isOk(error.notCalled);
    });

    it("calls error with the response as a parameter", function() {
      var success = sinon.spy(), error = sinon.spy();

      $get("/foo.txt", success, error);
      server.respond("GET", "/foo.txt", [500, {}, "error"]);

      assert.isOk(success.notCalled);
      assert.isOk(error.calledWith("error"));
    });
  });

  describe("$getJSON()", function() {
    it("calls success with the parsed JSON response as a parameter", function() {
      var success = sinon.spy(), error = sinon.spy();

      $getJSON("/foo.json", success, error);
      server.respond("GET", "/foo.json", [200, {}, '{ "foo": "bar" }']);

      assert.isOk(success.calledWith({ foo: "bar" }));
      assert.isOk(error.notCalled);
    });

    it("calls error with the parsed JSON response as a parameter", function() {
      var success = sinon.spy(), error = sinon.spy();

      $getJSON("/foo.json", success, error);
      server.respond("GET", "/foo.json", [500, {}, '{ "foo": "bar" }']);

      assert.isOk(success.notCalled);
      assert.isOk(error.calledWith({ foo: "bar" }));
    })
  });
});

// test("getJSON success", function() {
// });
//
// test("getJSON error", function() {
// });
