describe("document.$cookies", function() {
  function clearCookies() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
  };

  beforeEach(clearCookies);

  describe("set()", function() {
    it("set the value of a cookie by name", function() {
      document.$cookies.set("foo", "bar");
      assert.equal(document.cookie, "foo=bar");
    });
  });

  describe("get()", function() {
    it("returns null for a cookie that is not set", function() {
      assert.equal(document.$cookies.get("foo"), null);
    });

    it("returns the value of a cookie that is set", function() {
      document.cookie = "foo=bar; path=/";
      assert.equal(document.$cookies.get("foo"), "bar");
    });
  });

  describe("remove()", function() {
    it("removes a cookie by name", function() {
      document.cookie = "foo=bar; path=/";
      document.$cookies.remove("foo");
      assert.equal(document.cookie, "");
    });

    it("returns the value of the cookie", function() {
      document.cookie = "foo=bar; path=/";
      assert.equal(document.$cookies.remove("foo"), "bar");
    });
  });

  describe("clear()", function() {
    it("removes all cookies", function() {
      document.cookie = "foo=bar; expires=Wed, 24 Jan 2024 00:00:01 GMT; path=/";
      document.cookie = "bar=baz; expires=Wed, 24 Jan 2024 00:00:01 GMT; path=/";
      document.$cookies.clear();
      assert.equal(document.cookie, "");
    })
  });
})
