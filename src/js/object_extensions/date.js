Object.defineProperties(Date.prototype, {
  $beginningOfDay: {
    enumerable: false,
    get: function() {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate());
    }
  },

  $endOfDay: {
    enumerable: false,
    get: function() {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate(),
        23, 59, 59, 999);
    }
  },

  $beginningOfMonth: {
    enumerable: false,
    get: function() {
      return new Date(this.getFullYear(), this.getMonth());
    }
  },

  $endOfMonth: {
    enumerable: false,
    get: function() {
      return new Date(this.getFullYear(), this.getMonth() + 1, 0,
        23, 59, 59, 999);
    }
  },

  $monthName: {
    enumerable: false,
    get: function() {
      return ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"][this.getMonth()];
    }
  },

  $dayName: {
    enumerable: false,
    get: function() {
      return ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"][this.getDay()];
    }
  },

  $tomorrow: {
    enumerable: false,
    get: function() {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() + 1,
        this.getHours(),
        this.getMinutes(),
        this.getSeconds(),
        this.getMilliseconds()
      );
    }
  },

  $yesterday: {
    enumerable: false,
    get: function() {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() - 1,
        this.getHours(),
        this.getMinutes(),
        this.getSeconds(),
        this.getMilliseconds()
      );
    }
  }
});
