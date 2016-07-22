Document.prototype.$cookies = {
  set: function(key, value) {
    document.cookie = key + "=" + value + "; path=/";
    return value;
  },

  get: function(key) {
    var matches = document.cookie.match(new RegExp(key + "=(.*)(;)?"));
    return matches ? matches[1] : null;
  },

  remove: function(key) {
    var value = this.get(key);
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    return value;
  },

  clear: function() {
    document.cookie.split(";").forEach(function(cookie) {
      var key = cookie.replace(/=.*/, "");
      this.remove(key);
    }.bind(this));
  }
};

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

Object.defineProperties(Location.prototype, {
  $params: {
    get: function() {
      return Sprinkles.QueryString.parse(this.search);
    }
  }
});

Node.prototype.$removeChildren = function() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
};

Number.prototype.$ordinalize = function() {
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
};

Object.defineProperties(Object.prototype, {
  $forEach: {
    enumerable: false,
    value: function(callback) {
      for (var key in this) {
        if (this.hasOwnProperty(key)) callback(key, this[key]);
      }
    }
  },

  $try: {
    enumerable: false,
    value: function() {
      var args = Array.prototype.slice.call(arguments);
      var method = this[args.shift()];
      if (method === undefined) {
        return;
      } else if (typeof method === 'function') {
        return method.apply(null, args);
      } else {
        return method;
      }
    }
  }
});

Sprinkles = typeof Sprinkles == "undefined" ? {} : Sprinkles;

Sprinkles.QueryString = {
  parse: function(url) {
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
  }
};

function $get(url, success, error) {
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
}

function $getJSON(url, success, error) {
  $get(url,
    function(json) { success(JSON.parse(json)); },
    function(json) { error(JSON.parse(json)); }
  );
}
