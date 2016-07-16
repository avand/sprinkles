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
}
