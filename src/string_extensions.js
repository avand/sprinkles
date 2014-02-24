String.prototype.ordinalize = function() {
  var number = parseInt(this),
      abs    = Math.abs(number);

  if ((abs % 100) >= 11 && (abs % 100) <= 13) {
    return number + "th";
  } else {
    switch (abs % 10) {
      case 1:  return number + "st";
      case 2:  return number + "nd";
      case 3:  return number + "rd";
      default: return number + "th";
    }
  }
};
