describe("Object.prototype", function() {
  describe("$forEach()", function() {
    it("does not iterate over an empty object", function() {
      var keys = [], values = [], object = {};

      object.$forEach(function(key, value) {
        keys.push(key);
        values.push(value);
      });

      assert.deepEqual(keys, []);
      assert.deepEqual(values, []);
    });

    it("iterates over an objects keys and values", function() {
      var keys = [], values = [], object = { a: 1, b: 2, c: 3 };

      object.$forEach(function(key, value) {
        keys.push(key);
        values.push(value);
      });

      assert.deepEqual(keys, ["a", "b", "c"]);
      assert.deepEqual(values, [1, 2, 3]);
    });
  })

  describe("$try()", function() {
    var object;

    beforeEach(function() {
      object = {
        foo: function() {
          return "Foo";
        },
        bar: {
          taz: "Bar Taz"
        },
        qux: function(foo, callback) {
          if(typeof(callback) === "function") {
            return callback();
          } else {
            return foo;
          }
        }
      }
    });

    it("accesses the known property of an object", function() {
      assert.equal(object.$try("foo"), "Foo");
      assert.deepEqual(object.$try("bar"), { taz: "Bar Taz" });
    });

    it("allows calls to be chained", function() {
      assert.equal(object.$try("bar").$try("taz"), "Bar Taz");
    });

    it("returns undefined if the property does not exist", function() {
      assert.isUndefined(object.$try("bar").$try("test"));
    });

    it("calls a function and passes along parameters", function() {
      assert.equal(object.$try("qux", "foo"), "foo");
    });

    it("calls a function and passes along function parameters", function() {
      var callback = function() { return "test"; };
      assert.equal(object.$try("qux", "foo", callback), "test");
    });

    it("calls a function and passes along anonymous function parameters", function() {
      assert.equal(object.$try("qux", "foo", function() {
        return "test2";
      }), "test2");
    })
  })
});
