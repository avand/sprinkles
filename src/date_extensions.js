Date.prototype.$beginningOfDay = function() {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate());
};

Date.prototype.$endOfDay = function() {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 23, 59, 59, 999);
};

Date.prototype.$beginningOfMonth = function() {
  return new Date(this.getFullYear(), this.getMonth());
};

Date.prototype.$endOfMonth = function() {
  return new Date(this.getFullYear(), this.getMonth() + 1, 0, 23, 59, 59, 999);
};

Date.prototype.$monthName = function() {
  var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return names[this.getMonth()];
};

Date.prototype.$dayName = function(options) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return names[this.getDay()];
};

Date.prototype.$tomorrow = function() {
  return new Date(
    this.getFullYear(),
    this.getMonth(),
    this.getDate() + 1,
    this.getHours(),
    this.getMinutes(),
    this.getSeconds(),
    this.getMilliseconds()
  );
};

Date.prototype.$yesterday = function() {
  return new Date(
    this.getFullYear(),
    this.getMonth(),
    this.getDate() - 1,
    this.getHours(),
    this.getMinutes(),
    this.getSeconds(),
    this.getMilliseconds()
  );
};
