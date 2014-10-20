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
  var cbTest = function() {
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

  // It should call and return a object function
  deepEqual(object.$try('foo'), "Foo");
  // It should return an child object
  deepEqual(typeof(object.$try('bar')), "object");
  // It should call and return a object string
  deepEqual(object.$try('bar').$try('taz'), "Bar Taz");
  // It should call and if method doesn't exist return null
  deepEqual(object.$try('bar').$try('test'), null);
  // It should pass args as expected
  deepEqual(object.$try('qux', ["foo"]), "foo");
  // It should call a function
  deepEqual(object.$try('qux', ["foo", cbTest]), "test");
  // It should return a callback function
  deepEqual(object.$try('qux', ["foo", function(){return "test2"}]), "test2");
});
