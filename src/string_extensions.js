String.prototype.$ordinalize = function() {
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

String.prototype.$truncate = function (length, omission) {
  var string = this.slice(0, length),
  omission   = !omission ? '...' : omission;

  return string + omission;
};

String.prototype.$truncateFromCenter = function (length, omission) {
  var omission   = !omission ? '...' : omission;

  if (this.length <= omission.length || length <= omission.length) {
    return this.slice(0, length);
  }

  var middle    = (length - omission.length) / 2.0,
  omissionStart = Math.ceil(middle),
  omissionEnd   = this.length - Math.floor(middle);

  var beginningString = this.slice(0, omissionStart),
  endString           = this.slice(omissionEnd, this.length);
  
  return beginningString + omission + endString;
};