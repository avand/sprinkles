module("cookies", {
  clearCookies: function() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
  },

  setup: function() {
    this.clearCookies();
  }
});

test("setItem", function() {
  cookies.setItem("foo", "bar");
  equal(document.cookie, "foo=bar");
});

test("getItem", function() {
  equal(cookies.getItem("foo"), null);
  document.cookie = "foo=bar";
  equal(cookies.getItem("foo"), "bar");
});

test("getItem", function() {
  cookies.removeItem("foo");
  equal(document.cookie, "");
});

test("clear", function() {
  document.cookie = "foo=bar";
  document.cookie = "bar=baz";
  cookies.clear();
  equal(document.cookie, "");
});
