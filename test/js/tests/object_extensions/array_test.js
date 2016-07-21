describe("Array.prototype", function() {
  describe("$flatten()", function() {
    it("returns a one-dimensional flattening of the array", function() {
      assert.deepEqual([1, 2, 3].$flatten(), [1, 2, 3]);
      assert.deepEqual([[1], [2], [3]].$flatten(), [1, 2, 3]);
      assert.deepEqual([[1, 2], [3]].$flatten(), [1, 2, 3]);
      assert.deepEqual([[1], [[2]], [3]].$flatten(), [1, [2], 3])
    });
  });

  describe("$groupBy()", function() {
    it("returns an empty object for an empty array", function() {
      assert.deepEqual([].$groupBy(function(n) {
        return n;
      }), {});
    });

    it("groups objects under undefined", function() {
      assert.deepEqual(["cat", "dog", "turtle"].$groupBy(function(n) {
        return undefined;
      }), { undefined: ["cat", "dog", "turtle"] });
    });

    it("groups objects by a specified key", function() {
      assert.deepEqual(["cat", "dog", "turtle"].$groupBy(function(animal) {
        return animal.length;
      }), { 3: ["cat", "dog"], 6: ["turtle"] });
    });
  });
});
