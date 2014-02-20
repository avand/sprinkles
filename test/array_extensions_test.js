module("array extensions");

test("flatten", function() {
  deepEqual([1, 2, 3].flatten(),        [1, 2, 3]);
  deepEqual([[1], [2], [3]].flatten(),   [1, 2, 3]);
  deepEqual([[1, 2], [3]].flatten(),     [1, 2, 3]);
  deepEqual([[1], [[2]], [3]].flatten(), [1, [2], 3]);
})
