Object.defineProperties(Date.prototype, {
  $beginningOfDay: {
    get: function() {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate());
    }
  },

  $endOfDay: {
    get: function() {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate(),
        23, 59, 59, 999);
    }
  },

  $beginningOfMonth: {
    get: function() {
      return new Date(this.getFullYear(), this.getMonth());
    }
  },

  $endOfMonth: {
    get: function() {
      return new Date(this.getFullYear(), this.getMonth() + 1, 0,
        23, 59, 59, 999);
    }
  },

  $monthName: {
    get: function() {
      return ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"][this.getMonth()];
    }
  },

  $dayName: {
    get: function() {
      return ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"][this.getDay()];
    }
  },

  $tomorrow: {
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
