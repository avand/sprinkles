module("node extensions");

test("$removeChildren", function() {
  var parent     = document.createElement("ul"),
      child      = document.createElement("li"),
      sibling    = document.createElement("li"),
      grandchild = document.createTextNode("foo");

  child.appendChild(grandchild);
  parent.appendChild(child);
  parent.appendChild(sibling);

  equal(parent.childNodes.length, 2);
  equal(child.childNodes.length,  1);

  parent.$removeChildren();
  child.$removeChildren();

  equal(parent.childNodes.length, 0);
  equal(child.childNodes.length,  0);
});
