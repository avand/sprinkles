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
  document.$cookies.setItem("foo", "bar");
  equal(document.cookie, "foo=bar");
});

test("getItem", function() {
  equal(document.$cookies.getItem("foo"), null);
  document.cookie = "foo=bar; path=/";
  equal(document.$cookies.getItem("foo"), "bar");
});

test("getItem", function() {
  document.$cookies.removeItem("foo");
  equal(document.cookie, "");
});

test("clear", function() {
  document.cookie = "foo=bar; expires=Wed, 24 Jan 2024 00:00:01 GMT; path=/";
  document.cookie = "bar=baz; expires=Wed, 24 Jan 2024 00:00:01 GMT; path=/";
  document.$cookies.clear();
  equal(document.cookie, "");
})

test("setItem, getItem, and removeItem", function() {
  document.$cookies.setItem("foo", "bar");
  equal(document.$cookies.getItem("foo"), "bar");
  document.$cookies.removeItem("foo");
  equal(document.$cookies.getItem("foo"), null)
})
