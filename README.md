Sprinkles
=========

Sprinkles is the [ActiveSupport][as] of [Vanilla JS][vjs].

The goal of this project is to isolate a small collection of helpers and extensions to make our lives as front-end engineers a little easier — just like ActiveSupport has done for [Ruby on Rails][ror] engineers.

What you'll find in this project is:

* [Array extensions](#array-extensions):
  * `flatten()`
* [Cookies](#cookies)
  * `setItem()`, `getItem()`
  * `removeItem()`
  * `clear()`
* [Date extensions](#date-extensions):
  * `beginningOfDay()`, `endOfDay()`
  * `beginningOfMonth()`, `endOfMonth()`
  * `monthName()`, `dayName()`
  * `tomorrow()`, `yesterday()`
* [String inflections](#string-inflections):
  * `ordinalize()`
* [XHR helpers](#xhr-helpers):
  * `get()`
  * `getJSON()`

What you won't find in this project is:

* Effects or animation (e.g., `fadeOut()`)
* Browser backwards-compatibility
* Heavy-handed DOM manipulation (e.g., `wrapAll()`)
* DOM selection (e.g., [Sizzle][siz])
* Anything a modern browser can alrady do

Sprinkles is of the opinion that selectively extending existing JavaScript objects is manageable. You may [disagree][ext] and I'd love to know why.

This project is under active development so things will change dramatically as it matures. For contributions, please fork and submit pull requests.

[as]:  https://github.com/rails/rails/tree/master/activesupport
[vjs]: http://vanilla-js.com
[ror]: http://rubyonrails.org
[siz]: http://sizzlejs.com
[ext]: http://perfectionkills.com/whats-wrong-with-extending-the-dom/

## Arrays Extensions

Your browser is all grown up! Let it `loop()`, `map()`, and `reduce()` your arrays.

``` js
var pies = ["apple", "pecan", "cherry"];

pies.forEach(function(pie, i) {
  alert("Do you like " + pie + " pie ?");
});

pies.map(function(pie, i) {
  return pie + " pie";
}); // Returns ["apple pie", "pecan pie", "cherry pie"]

pies.reduce(function(previousPie, currentPie) {
  return previousPie + "," + currentPie;
}); // Returns "apple,pecan,cherry"
```

Sprinkles adds `flatten()` to `Array.prototype`.

``` js
[[1], [2], [3]].flatten(); // Returns [1, 2, 3]
```

## Cookies

Working with cookies isn't very fun if all you have is `document.cookie`. Sprinkles adds a `cookies` object that makes managing cookies a little easier. The API is designed to closely match that of `localStorage`.

``` js
cookies.setItem("foo", "bar"); // Write a cookie, "foo", with value "bar"
cookies.getItem("foo");        // Returns "bar"
cookies.removeItem("foo");     // Remove cookie, "foo"
cookies.clear();               // Remove all cookies
```

Sprinks always assumes the path on all your cookies is `/` and does not support cookies that specify `domain`, `max-age`, `expires`, or `secure` — maybe one day.

## Date Extensions

The date helpers in Sprinkles are built right onto `Date.prototype` because `d.tomorrow()` reads much better than `DateExtensions.tomorrow(d)`.

``` js
var d = new Date(1986, 0, 24, 20, 25); // Jan 24th, 1986 at 20:25
d.beginningOfDay();                    // Jan 24th, 1986 at 00:00
d.endOfDay();                          // Jan 24th, 1986 at 23:59
d.beginningOfMonth();                  // Jan  1st, 1986 at 00:00
d.endOfMonth();                        // Jan 31st, 1986 at 23:59
d.tomorrow();                          // Jan 25th, 1986 at 20:25
d.yesterday();                         // Jan 23rd, 1986 at 20:25
d.monthName();                         // "January"
d.dayName();                           // "Friday"
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

If you do a lot of this, maybe you should write a function like `createElement(name, content, parent)`.

## String Inflections

ActiveSupport has a bunch of slick [string inflections][inf]. Sprinkles just has the one for now.

``` js
"1".ordinalize()  // "1st"
"22".ordinalize() // "22nd"
```

[inf]: http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html

## XHR (AJAX)

Creating an `XMLHttpRequest` object from scratch is tedious, so `get()` and `getJSON()` have been added as methods on `window` as convenience.

``` js
window.get("http://example.com/plain-text",
  function(text) { console.log(text) },     // success
  function(text) { console.log(text) }      // error
);

window.getJSON("http://example.com/json",
  function(object) { console.log(object) }, // success
  function(object) { console.log(object) }  // error
})
```

## Development

Sprinkles uses [Grunt][grn] to run development-oriented tasks. Grunt relies on [Node Packaged Modules][npm] (NPM). You can install NPM with [Homebrew][hmb]. With NPM installed and from inside the Sprinkles project root run:

``` sh
npm install
```

This is the Ruby equivalent of running `bundle install`. Now you can run the following tasks individually:

* `grunt concat`
* `grunt qunit`
* `grunt jshint`
* `grunt uglify`

You can also run `grunt test` to validate syntax and test. When you're work is done, run `grunt` to validate, test, concatenate, and minify.

[grn]: http://gruntjs.com
[npm]: https://www.npmjs.org
[hmb]: http://brew.sh
