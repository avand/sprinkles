module("object extensions");

test("$forEach", function() {
  var keys   = [],
      values = [],
      object = {};

  object.$forEach(function(key, value) {
    keys.push(key);
    values.push(value);
  });

  deepEqual(keys,   []);
  deepEqual(values, []);

  keys   = [];
  values = [];
  object = { a: 1, b: 2, c: 3 };

  object.$forEach(function(key, value) {
    keys.push(key);
    values.push(value);
  });

  deepEqual(keys,   ["a", "b", "c"]);
  deepEqual(values, [1, 2, 3]);
});

test("$try", function() {
  var callback = function() {
    return "test";
  }

  var object = {
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
        return foo
      }
    }
  };

  deepEqual(object.$try("foo"), "Foo");
  deepEqual(typeof(object.$try("bar")), "object");
  deepEqual(object.$try("bar").$try("taz"), "Bar Taz");
  deepEqual(object.$try("bar").$try("test"), null);
  deepEqual(object.$try("qux", "foo"), "foo");
  deepEqual(object.$try("qux", "foo", callback), "test");
  deepEqual(object.$try("qux", "foo", function() { return "test2" }), "test2");
});
