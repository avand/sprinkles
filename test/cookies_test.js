describe("document.$cookies", function() {
  function clearCookies() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    });
  };

  beforeEach(clearCookies);

  describe("setItem()", function() {
    it("set the value of a cookie by name", function() {
      document.$cookies.setItem("foo", "bar");
      assert.equal(document.cookie, "foo=bar");
    });
  });

  describe("getItem()", function() {
    it("returns null for a cookie that is not set", function() {
      assert.equal(document.$cookies.getItem("foo"), null);
    });

    it("returns the value of a cookie that is set", function() {
      document.cookie = "foo=bar; path=/";
      assert.equal(document.$cookies.getItem("foo"), "bar");
    });
  });

  describe("removeItem()", function() {
    it("removes a cookie by name", function() {
      document.cookie = "foo=bar; path=/";
      document.$cookies.removeItem("foo");
      assert.equal(document.cookie, "");
    })
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
