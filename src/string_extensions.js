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

String.prototype.truncate = function (position, separator) {
  var string = this.slice(0, position),
  separator  = !separator ? '...' : separator;

  return string + separator;
};

String.prototype.truncateFromCenter = function (position, separator) {
  var length = this.length,
  separator  = !separator ? '...' : separator;

  if (length <= separator.length || position <= separator.length) {
    return this.slice(0, position);
  }

  var middle     = (position - separator.length) / 2.0,
  separatorStart = Math.ceil(middle),
  separatorEnd   = length - Math.floor(middle);

  var beginningString = this.slice(0, separatorStart),
  endString           = this.slice(separatorEnd, length);
  
  return beginningString + separator + endString;
};