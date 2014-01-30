module("date extensions");

test("beginningOfDay", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 24);
  deepEqual(b, a.beginningOfDay());
});

test("endOfDay", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 24, 23, 59, 59, 999);
  deepEqual(b, a.endOfDay());
});

test("beginningOfMonth", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 1);
  deepEqual(b, a.beginningOfMonth());
});

test("endOfMonth", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 31, 23, 59, 59, 999);
  deepEqual(b, a.endOfMonth());
});

test("monthName", function() {
  equal("January",   (new Date(1986, 0,  1).monthName()));
  equal("February",  (new Date(1986, 1,  1).monthName()));
  equal("March",     (new Date(1986, 2,  1).monthName()));
  equal("April",     (new Date(1986, 3,  1).monthName()));
  equal("May",       (new Date(1986, 4,  1).monthName()));
  equal("June",      (new Date(1986, 5,  1).monthName()));
  equal("July",      (new Date(1986, 6,  1).monthName()));
  equal("August",    (new Date(1986, 7,  1).monthName()));
  equal("September", (new Date(1986, 8,  1).monthName()));
  equal("October",   (new Date(1986, 9,  1).monthName()));
  equal("November",  (new Date(1986, 10, 1).monthName()));
  equal("December",  (new Date(1986, 11, 1).monthName()));
});

test("dayName", function() {
  equal("Monday",    (new Date(1986, 0, 20).dayName()));
  equal("Tuesday",   (new Date(1986, 0, 21).dayName()));
  equal("Wednesday", (new Date(1986, 0, 22).dayName()));
  equal("Thursday",  (new Date(1986, 0, 23).dayName()));
  equal("Friday",    (new Date(1986, 0, 24).dayName()));
  equal("Saturday",  (new Date(1986, 0, 25).dayName()));
  equal("Sunday",    (new Date(1986, 0, 26).dayName()));
});

test("tomorrow", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 25, 20, 25);
  deepEqual(b, a.tomorrow());
});

test("yesterday", function() {
  var a = new Date(1986, 0, 24, 20, 25), b = new Date(1986, 0, 23, 20, 25);
  deepEqual(b, a.yesterday());
});
