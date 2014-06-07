module("date extensions");

test("$beginningOfDay", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 24);
  deepEqual(a.$beginningOfDay(), b);
});

test("$endOfDay", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 24, 23, 59, 59, 999);
  deepEqual(a.$endOfDay(), b);
});

test("$beginningOfMonth", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 1);
  deepEqual(a.$beginningOfMonth(), b);
});

test("$endOfMonth", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 31, 23, 59, 59, 999);
  deepEqual(a.$endOfMonth(), b);
});

test("$monthName", function() {
  equal((new Date(1986, 0,  1)).$monthName(), "January");
  equal((new Date(1986, 1,  1)).$monthName(), "February");
  equal((new Date(1986, 2,  1)).$monthName(), "March");
  equal((new Date(1986, 3,  1)).$monthName(), "April");
  equal((new Date(1986, 4,  1)).$monthName(), "May");
  equal((new Date(1986, 5,  1)).$monthName(), "June");
  equal((new Date(1986, 6,  1)).$monthName(), "July");
  equal((new Date(1986, 7,  1)).$monthName(), "August");
  equal((new Date(1986, 8,  1)).$monthName(), "September");
  equal((new Date(1986, 9,  1)).$monthName(), "October");
  equal((new Date(1986, 10, 1)).$monthName(), "November");
  equal((new Date(1986, 11, 1)).$monthName(), "December");
});

test("dayName", function() {
  equal((new Date(1986, 0, 20)).$dayName(), "Monday");
  equal((new Date(1986, 0, 21)).$dayName(), "Tuesday");
  equal((new Date(1986, 0, 22)).$dayName(), "Wednesday");
  equal((new Date(1986, 0, 23)).$dayName(), "Thursday");
  equal((new Date(1986, 0, 24)).$dayName(), "Friday");
  equal((new Date(1986, 0, 25)).$dayName(), "Saturday");
  equal((new Date(1986, 0, 26)).$dayName(), "Sunday");
});

test("tomorrow", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 25, 20, 25);
  deepEqual(a.$tomorrow(), b);
});

test("yesterday", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 23, 20, 25);
  deepEqual(a.$yesterday(), b);
});
