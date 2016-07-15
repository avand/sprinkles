describe("Node.prototype", function() {
  describe("$removeChildren()", function() {
    it("should remove all descendant nodes", function() {
      var parent     = document.createElement("ul"),
          child      = document.createElement("li"),
          grandchild = document.createTextNode("foo");

      child.appendChild(grandchild);
      parent.appendChild(child);

      parent.$removeChildren();

      assert.equal(parent.childNodes.length, 0);
    })
  });
});
