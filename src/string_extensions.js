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

String.prototype.truncate = function (position) {
  var string = this.slice(0, position);
  string += '...';

  return string;
};

String.prototype.truncateFromCenter = function (position) {
  var beginningString = this.slice(0, position / 2),
      endString = this.slice(this.length - position / 2, this.length);
  
  var string = beginningString +'...'+ endString;

  return string;
};