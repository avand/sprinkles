Sprinkles 🍩
===========

If you've used [Ruby on Rails][ror] you're probably familiar with [ActiveSupport][as]. Sprinkles is like ActiveSupport for your browser. It's chock-full of helpers that you'll use every day. Things like flattening or grouping an array, reading and writing cookies, rewinding a date to "yesterday," grabbing parameters from the query string, and making HTTP requests.

The goal of this project is to isolate a small collection of helpers and extensions to make our lives as front-end engineers a little easier — just like ActiveSupport has done for  engineers.

Though syntatically optimal, monkey patching is general considered a [bad idea][red] so Sprinkles prefixes all methods and globals with a "$" to differentiate them from any native methods your client may have.

In Sprinkles, you'll find:

* [Array extensions](#array-extensions)
* [Cookies](#cookies)
* [Date extensions](#date-extensions)
* [Node extensions](#node-extensions)
* [Number extensions](#number-extensions)
* [Object extensions](#object-extensions)
* [Query string params](#query-string-params)
* [XHR helpers](#xhr-ajax)

What you won't find in this project is:

* Effects or animation (e.g., `fadeOut()`)
* Browser backwards-compatibility
* Heavy-handed DOM manipulation (e.g., `wrapAll()`)
* DOM selection (e.g., [Sizzle][siz])
* Anything a modern browser can already do

This project is under active development so things will change dramatically as it matures. For contributions, please fork and submit pull requests.

[as]:  https://github.com/rails/rails/tree/master/activesupport
[ror]: http://rubyonrails.org
[siz]: http://sizzlejs.com
[red]: http://www.reddit.com/r/javascript/comments/279ion/sprinkles_the_activesupport_of_vanilla_js/

## Array Extensions

Your browser is all grown up! Let it `forEach()`, `map()`, and `reduce()` your arrays.

``` js
var pies = ["apple", "pecan", "cherry"];

pies.forEach(function(pie, i) {
  alert("Do you like " + pie + " pie ?");
}); // Alerts "Do you like..." three times

pies.map(function(pie, i) {
  return pie + " pie";
}); // Returns ["apple pie", "pecan pie", "cherry pie"]

pies.reduce(function(previousPie, currentPie) {
  return previousPie + "," + currentPie;
}); // Returns "apple,pecan,cherry"
```

Sprinkles adds **`$flatten()`** to `Array.prototype`.

``` js
[[1], [2], [3]].$flatten(); // Returns [1, 2, 3]
```

Sprinkles also adds **`$groupBy()`**.

``` js
["cat", "dog", "turtle"].$groupBy(function(animal) {
  return animal.length;
})

// Returns { 3: ["cat", "dog"], 6: ["turtle"] }
```

Sprinkles adds **`$includes()`**.

``` js
["mac", "linux", "windows"].$includes('mac');

// Returns true
```

## Cookies

Working with cookies isn't very fun if all you have is `document.cookie`. Sprinkles adds **`document.$cookies`** that makes managing cookies a little easier.

``` js
document.$cookies.set("flavor", "chocolate chip"); // Write a cookie, "flavor", with value "chocolate chip"
document.$cookies.get("flavor");                   // Returns "chocolate chip"
document.$cookies.remove("flavor");                // Remove cookie, "flavor"
document.$cookies.clear();                         // Remove all cookies
```

Sprinkles always assumes the path on all your cookies is `/` and does not support cookies that specify `domain`, `max-age`, `expires`, or `secure` — maybe one day.

## Date Extensions

Manipulating a dates in JavaScript sucks. Sprinkles makes it suck less.

``` js
var d = new Date(1986, 0, 24, 20, 25); // Jan 24th, 1986 at 20:25
d.$beginningOfDay;                     // Jan 24th, 1986 at 00:00
d.$endOfDay;                           // Jan 24th, 1986 at 23:59
d.$beginningOfMonth;                   // Jan  1st, 1986 at 00:00
d.$endOfMonth;                         // Jan 31st, 1986 at 23:59
d.$tomorrow;                           // Jan 25th, 1986 at 20:25
d.$yesterday;                          // Jan 23rd, 1986 at 20:25
d.$monthName;                          // "January"
d.$dayName;                            // "Friday"
```

## DOM Manipulation

Sprinkles won't do things a modern browser can already do, even if that means a bit more typing.

``` js
var results = document.querySelector("#results"), // Retrieve an element
    result  = document.createElement("div");      // Create an element

result.classList.add("result");                   // Add a class to an element
result.textContent = "One more thing...";         // Set the content of an element

results.appendChild(result);                      // Add an element as a child
```

If you do a lot of this maybe you should write a function like `createElement(name, content, parent)` or use jQuery (gasp!).

## Node Extensions

If you want to clear an element of all its children, you can do `el.innerHTML = ""` (gross) or loop through all the child nodes and remove them one at a time (tedious). Sprinkles adds **`$removeChildren()`** to `Node.prototype` to make it easy.

``` js
var ul = document.querySelector("ul");
ul.$removeChildren(); // Removes all the list items (clears the list)
```

## Number Extensions

ActiveSupport has a bunch of slick [string inflections][inf]. Sprinkles just has this one for now:

``` js
var n;
n = 1; n.$ordinalize()  // "1st"
n = 22; n.$ordinalize() // "22nd"
```

[inf]: http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html

## Object Extensions

In Ruby, there's little distinction between looping over an array or a hash — you call the same method (i.e. `each()`). The difference is the signature of the callback function. For an array, the callback receives one primary argument (each item in the aray); for a hash, the callback recieves two arguments (each key value pair in the hash). Sprinkles adds **`$forEach()`** to `Object.prototype` so that you can similarly loop through the keys and values of any object.

``` js
var object = { a: 1, b: 2, c: 3 },
    keys   = [],
    values = [];

object.$forEach(function(key, value) {
  keys.push(key);
  values.push(value);
})

// keys   = ["a", "b", "c"]
// values = [1, 2, 3]
```

ActiveSupport extends all objects with a `try()` method - Sprinkles does too. `$try()` allows you to attempt to call a method or access a property on an object that might otherwise be undefined.

``` js
var car = { make: "Porsche", model: "911", start: function(key) { } };
car.$try("make")         // Returns "Porsche"
car.$try("color")        // Returns undefined
car.$try("start", "...") // Calls start() and passes in "..." as the key
```

## Query String Params

Use a global class method to parse the query string params from any URL:

``` js
Sprinkles.QueryString.parse("http://example.com/?a=1&b=2") // Returns { "a": "1", "b": "2" }
```

Sprinkles also adds a property to `Location.prototype` to parse the query string params in `window.location.search`:

``` js
// Assume window.location = "http://example.com/?a=1&b=2"
window.location.$params      // Returns { "a": "1", "b": "2" }
window.location.$params["a"] // Returns "1"
```

## XHR (AJAX)

Creating an `XMLHttpRequest` object from scratch is tedious, so **`get()`** and **`getJSON()`** have been added to `window` as convenience.

``` js
window.$get("http://example.com/plain-text",
  function(text) { console.log(text) },     // success
  function(text) { console.log(text) }      // error
);

window.$getJSON("http://example.com/json",
  function(object) { console.log(object) }, // success
  function(object) { console.log(object) }  // error
})
```

Since all variables and methods delegate to `window` you can simply call `$get()`.

## Development

Sprinkles uses [Grunt][grn] to run development-oriented tasks. Grunt relies on [Node Packaged Modules][npm] (NPM). You can install NPM with [Homebrew][hmb]. With NPM installed and from inside the Sprinkles project root run:

``` sh
npm install
```

This is the Ruby equivalent of running `bundle install`. Now you can run the following tasks individually:

* `grunt concat`
* `grunt jshint`
* `grunt uglify`

Unfortunately, you cannot run tests from the command line. This is due to the fact that things like PhantomJS, which usually drive headless tests, are not real browsers. This means that things like `document.cookie` and `window.location` don't behave like you'd expect. It seems sensible that running tests in-browser takes priority over running them from the command line so for now to run them boot up Sprinkles in web server (e.g., `python -m SimpleHTTPServer 8080`) and hit the test file directly (e.g. http://localhost:8080/test/index.html).

Please note there is a separate test file dedicated to testing query strings because if you set `window.location.search` during a test, the browser will reload the page. In a separate file, it's possible to test query string parameters in isolation.

When you're done with a feature, you should [semantically](sem) increment the version number in `package.json` and run `grunt build` to update the distribution files.

[grn]: http://gruntjs.com
[npm]: https://www.npmjs.org
[hmb]: http://brew.sh
[sem]: http://semver.org
