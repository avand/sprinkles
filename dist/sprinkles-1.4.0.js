Array.prototype.$flatten = function() {
  return this.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};

Array.prototype.$groupBy = function(accumulator) {
  var result = {};

  this.forEach(function(n) {
    var key = accumulator(n);
    if (result[key] === undefined) result[key] = [];
    result[key].push(n);
  });

  return result;
};
;Document.prototype.$cookies = {
  setItem: function(key, value) {
    document.cookie = key + "=" + value + "; path=/";
  },

  getItem: function(key) {
    var matches = document.cookie.match(new RegExp(key + "=(.*)(;)?"));
    return matches ? matches[1] : null;
  },

  removeItem: function(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  },

  clear: function() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      this.removeItem(key);
    }.bind(this));
  }
};
;Date.prototype.$beginningOfDay = function() {
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
;Node.prototype.$removeChildren = function() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
};
;Object.prototype.$forEach = function(callback) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) callback(key, this[key]);
  }
};
;Location.$getParams = function(url) {
  var parameters   = url.slice(url.indexOf("?") + 1, url.length).split("&"),
      paramsObject = {};

  return parameters.reduce(function(params, parameter) {
    if (parameter.length > 0) {
      var key   = parameter.slice(0, parameter.indexOf("=")),
          value = parameter.slice(parameter.indexOf("=") + 1, parameter.length);

      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }

    return params;
  }, {});
};

Location.$getParam = function(url, key) {
  return this.$getParams(url)[key];
};

Location.prototype.$getParams = function() {
  return this.constructor.$getParams(this.search);
};

Location.prototype.$getParam = function(key) {
  return this.constructor.$getParam(this.search, key);
};
;String.prototype.$ordinalize = function() {
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
;window.$get = function(url, success, error) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        error(xhr.responseText);
      }
    }
  };

  xhr.open("GET", url);
  xhr.send();
};

window.$getJSON = function(url, success, error) {
  window.$get(url,
    function(json) { success(JSON.parse(json)); },
    function(json) {   error(JSON.parse(json)); }
  );
};
