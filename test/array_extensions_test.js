module("array extensions");

test("$flatten", function() {
  deepEqual([1, 2, 3].$flatten(),         [1, 2, 3]);
  deepEqual([[1], [2], [3]].$flatten(),   [1, 2, 3]);
  deepEqual([[1, 2], [3]].$flatten(),     [1, 2, 3]);
  deepEqual([[1], [[2]], [3]].$flatten(), [1, [2], 3]);
});

test("$groupBy", function() {
  deepEqual([].$groupBy(function(n) {
    return n;
  }), {});

  deepEqual(["cat", "dog", "turtle"].$groupBy(function(n) {
    return undefined;
  }), { undefined: ["cat", "dog", "turtle"] });

  deepEqual(["cat", "dog", "turtle"].$groupBy(function(animal) {
    return animal.length;
  }), { 3: ["cat", "dog"], 6: ["turtle"] });
});

test("$includes", function() {
  deepEqual([1, 2, 'a', 'b', true].$includes('b'), true);
  deepEqual([1, 2, 'a', 'b', true].$includes('d'), false);
  deepEqual([1, 2, 'a', 'b', true].$includes(true), true);
});
