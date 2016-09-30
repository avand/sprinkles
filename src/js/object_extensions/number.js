Object.defineProperties(Number.prototype, {
  $ordinalize: {
    enumerable: false,
    value: function() {
      var abs = Math.abs(this);

      if ((abs % 100) >= 11 && (abs % 100) <= 13) {
        return this + "th";
      } else {
        switch (abs % 10) {
          case 1:  return this + "st";
          case 2:  return this + "nd";
          case 3:  return this + "rd";
          default: return this + "th";
        }
      }
    }
  },

  $round: {
    enumerable: false,
    value: function(decimalPlaces) {
      return parseFloat(this.toFixed(decimalPlaces));
    }
  }
});
