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
