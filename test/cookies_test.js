module("cookies", {
  clearCookies: function() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    })
  },

  setup: function() {
    this.clearCookies();
  }
});

test("setItem", function() {
  $cookies.setItem("foo", "bar");
  equal(document.cookie, "foo=bar");
});

test("getItem", function() {
  equal($cookies.getItem("foo"), null);
  document.cookie = "foo=bar; path=/";
  equal($cookies.getItem("foo"), "bar");
});

test("getItem", function() {
  $cookies.removeItem("foo");
  equal(document.cookie, "");
});

test("clear", function() {
  document.cookie = "foo=bar; expires=Wed, 24 Jan 2024 00:00:01 GMT; path=/";
  document.cookie = "bar=baz; expires=Wed, 24 Jan 2024 00:00:01 GMT; path=/";
  $cookies.clear();
  equal(document.cookie, "");
})

test("setItem, getItem, and removeItem", function() {
  $cookies.setItem("foo", "bar");
  equal($cookies.getItem("foo"), "bar");
  $cookies.removeItem("foo");
  equal($cookies.getItem("foo"), null)
})
