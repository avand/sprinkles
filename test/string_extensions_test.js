module("string extensions");

test("ordinalize", function() {
  equal("1".$ordinalize(),  "1st");
  equal("2".$ordinalize(),  "2nd");
  equal("3".$ordinalize(),  "3rd");
  equal("4".$ordinalize(),  "4th");
  equal("11".$ordinalize(), "11th");
  equal("12".$ordinalize(), "12th");
  equal("13".$ordinalize(), "13th");
  equal("21".$ordinalize(), "21st");
  equal("22".$ordinalize(), "22nd");
  equal("23".$ordinalize(), "23rd");
  equal("-1".$ordinalize(), "-1st");
});
