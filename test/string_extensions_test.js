module("string extensions");

test("ordinalize", function() {
  equal("1st",  "1".ordinalize())
  equal("2nd",  "2".ordinalize())
  equal("3rd",  "3".ordinalize())
  equal("4th",  "4".ordinalize())
  equal("11th", "11".ordinalize())
  equal("12th", "12".ordinalize())
  equal("13th", "13".ordinalize())
  equal("21st", "21".ordinalize())
  equal("22nd", "22".ordinalize())
  equal("23rd", "23".ordinalize())
  equal("-1st", "-1".ordinalize())
})
