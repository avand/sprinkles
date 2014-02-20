Sprinkles
=========

Sprinkles is the [ActiveSupport][as] of [Vanilla JS][vjs].

The goal of this project is to isolate a small collection of helpers and extensions to make our lives as front-end engineers a little easier — just like ActiveSupport has done for [Ruby on Rails][ror] engineers.

What you'll find in this project is:

* [Array extensions](#array-extensions):
  * `flatten()`
* [Date extensions](#date-extensions):
  * `beginningOfDay()`
  * `endOfDay()`
  * `beginningOfMonth()`
  * `endOfMonth()`
  * `monthName()`
  * `dayName()`
  * `tomorrow()`
  * `yesterday()`
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

This project is under active development so things will change dramatically as it matures. For contributions, please fork and submit pull requests.

[as]:  https://github.com/rails/rails/tree/master/activesupport
[vjs]: http://vanilla-js.com
[ror]: http://rubyonrails.org
[siz]: http://sizzlejs.com

## Arrays Extensions

Your browser is all grown up! Let vanilla JS `loop()`, `map()`, and `reduce()` arrays for you.

``` js
var pies = ["apple", "pecan", "cherry"];

pies.forEach(function(pie, i) {
  alert("Do you like " + pie + " pie ?");
});

pies.map(function(pie, i) {
  return pie + " pie";
}); // => ["apple pie", "pecan pie", "cherry pie"]

pies.reduce(function(previousPie, currentPie) {
  return previousPie + "," + currentPie;
}); // => "apple,pecan,cherry"
```

Sprinkles adds `flatten()` to `Array.prototype`.

``` js
[[1], [2], [3]].flatten(); // => [1, 2, 3]
```

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

## String Inflections

ActiveSupport has a bunch of slick [string inflections][inf]. The most popular are represented in Sprinkles.

``` js
"1".ordinalize()      // "1st"
"22".ordinalize()     // "22nd"
"cat".pluralize()     // "cats" (coming soon, maybe?)
"dogs".singularize(); // "dog"  (coming soon, maybe?)
```

[inf]: http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html

## XHR (AJAX)

Modern web applications frequently talk to servers with JSON over HTTP. Creating an `XMLHttpRequest` object from scratch is tedious, so `get()` and `getJSON()` have been added as methods on `window` as convenience.

``` js
window.get("http://example.com/plain-text",
  function(text) { console.log(text) }, // success
  function(text) { console.log(text) }  // error
);

window.getJSON("http://example.com/json",
  function(object) { console.log(object) }, // success
  function(object) { console.log(object) }  // error
})
```
