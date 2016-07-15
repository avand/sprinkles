describe("Date.prototype", function() {
  describe("$beginningOfDay()", function() {
    it("returns the beginning of the day", function() {
      var a = new Date(1986, 0, 24, 20, 25);
      var b = new Date(1986, 0, 24);
      assert.deepEqual(a.$beginningOfDay(), b);
    });
  });

  describe("$endOfDay()", function() {
    it("returns the end of the day", function() {
      var a = new Date(1986, 0, 24, 20, 25);
      var b = new Date(1986, 0, 24, 23, 59, 59, 999);
      assert.deepEqual(a.$endOfDay(), b);
    });
  });

  describe("$beginningOfMonth()", function() {
    it("returns the beginning of the month", function() {
      var a = new Date(1986, 0, 24, 20, 25);
      var b = new Date(1986, 0, 1);
      assert.deepEqual(a.$beginningOfMonth(), b);
    });
  });

  describe("$endOfMonth()", function() {
    it("returns the end of the month", function() {
      var a = new Date(1986, 0, 24, 20, 25);
      var b = new Date(1986, 0, 31, 23, 59, 59, 999);
      assert.deepEqual(a.$endOfMonth(), b);
    });
  });

  describe("$monthName()", function() {
    it("returns the English name of the month", function() {
      assert.equal((new Date(1986, 0, 1)).$monthName(), "January");
      assert.equal((new Date(1986, 1, 1)).$monthName(), "February");
      assert.equal((new Date(1986, 2, 1)).$monthName(), "March");
      assert.equal((new Date(1986, 3, 1)).$monthName(), "April");
      assert.equal((new Date(1986, 4, 1)).$monthName(), "May");
      assert.equal((new Date(1986, 5, 1)).$monthName(), "June");
      assert.equal((new Date(1986, 6, 1)).$monthName(), "July");
      assert.equal((new Date(1986, 7, 1)).$monthName(), "August");
      assert.equal((new Date(1986, 8, 1)).$monthName(), "September");
      assert.equal((new Date(1986, 9, 1)).$monthName(), "October");
      assert.equal((new Date(1986, 10, 1)).$monthName(), "November");
      assert.equal((new Date(1986, 11, 1)).$monthName(), "December");
    });
  });

  describe("$dayName()", function() {
    it("returns the English name of the day", function() {
      assert.equal((new Date(1986, 0, 20)).$dayName(), "Monday");
      assert.equal((new Date(1986, 0, 21)).$dayName(), "Tuesday");
      assert.equal((new Date(1986, 0, 22)).$dayName(), "Wednesday");
      assert.equal((new Date(1986, 0, 23)).$dayName(), "Thursday");
      assert.equal((new Date(1986, 0, 24)).$dayName(), "Friday");
      assert.equal((new Date(1986, 0, 25)).$dayName(), "Saturday");
      assert.equal((new Date(1986, 0, 26)).$dayName(), "Sunday");
    });
  });

  describe("$tomorrow()", function() {
    it("returns the date plus one day", function() {
      var a = new Date(1986, 0, 24, 20, 25);
      var b = new Date(1986, 0, 25, 20, 25);
      assert.deepEqual(a.$tomorrow(), b);
    });
  });

  describe("$yesterday()", function() {
    it("returns the date minus one day", function() {
      var a = new Date(1986, 0, 24, 20, 25);
      var b = new Date(1986, 0, 23, 20, 25);
      assert.deepEqual(a.$yesterday(), b);
    });
  });
})
