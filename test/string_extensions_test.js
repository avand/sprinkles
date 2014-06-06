module("string extensions");

test("ordinalize", function() {
  equal("1".ordinalize(),  "1st");
  equal("2".ordinalize(),  "2nd");
  equal("3".ordinalize(),  "3rd");
  equal("4".ordinalize(),  "4th");
  equal("11".ordinalize(), "11th");
  equal("12".ordinalize(), "12th");
  equal("13".ordinalize(), "13th");
  equal("21".ordinalize(), "21st");
  equal("22".ordinalize(), "22nd");
  equal("23".ordinalize(), "23rd");
  equal("-1".ordinalize(), "-1st");
});


test("truncate", function () {
  equal("Hello World".truncate(5), "Hello...");
  equal("Hi".truncate(5), "Hi...");
  equal("Hi".truncate(0), "...");
});

test("truncateFromCenter", function () {
  equal("foo".truncateFromCenter(1), "f");
  equal("foo".truncateFromCenter(3), "foo");
  equal("foobar".truncateFromCenter(4), "f...");
  equal("foobar".truncateFromCenter(4, "-"), "fo-r");
  equal("foobarbaz".truncateFromCenter(6), "fo...z");
});