Sprinkles 🍩
============

Sprinkles makes your browser more developer friendly. Sprinkles extends built-in JavaScript objects to make them more useful and provides generic CSS utility classes that you'd want on every project.

## Preface

If you've used [Ruby on Rails][ror] you're probably familiar with [ActiveSupport][as]. Sprinkles does to browser-based JavaScript what ActiveSupport does to Ruby. Sprinkles will make it easier to work with arrays, read and write cookies, rewind a date to "yesterday," grab parameters from the query string, make asynchronous HTTP requests, and more.

Sprinkles works by adding function and properties to existing objects. This kind of "monkey-patching" is generally considered a [bad idea][red] but it is syntactically optimal. So to get the best of both worlds, Sprinkles prefixes any methods or properties it adds to built-in objects with a "$" to differentiate them from any native methods the client may have.

[as]:  https://github.com/rails/rails/tree/master/activesupport
[ror]: http://rubyonrails.org
[red]: http://www.reddit.com/r/javascript/comments/279ion/sprinkles_the_activesupport_of_vanilla_js/

## Documentation

* JavaScript
  * [Arrays](#arrays)
  * [Cookies](#cookies)
  * [Dates](#dates)
  * [Nodes](#nodes)
  * [Numbers](#numbers)
  * [Objects](#objects)
  * [Query String Params](#query-string-params)
  * [AJAX](#ajax)
* CSS
  * Floats
  * Positioning

## Arrays

### `Array.prototype.$flatten()`

Collapse an array of arrays into a new one-dimensional array.

``` js
[["vanilla"], ["chocolate"], ["strawberry"]].$flatten();
// => ["vanilla", "chocolate", "strawberry"]
```

### `Array.prototype.$groupBy()`

Group an array by the results of a function applied to each item.

``` js
["cream", "fudge", "caramel"].$groupBy(function(topping) {
  return topping.length;
});
// => { 5: ["cream", "fudge"], 7: ["caramel"] }
```

## Cookies

Working with cookies isn't very fun if all you have is `document.cookie`. Sprinkles makes managing cookies a little easier.

Sprinkles always assumes the path on all your cookies is `/` and does not (yet) support cookies that specify `domain`, `max-age`, `expires`, or `secure`.

### `document.$cookies.set()`

Write a cookie by name and value.

``` js
document.$cookies.set("flavor", "mint chocolate chip");
// => "mint chocolate chip"
```

### `document.$cookies.get()`

Read the value of a cookie by name.

``` js
document.$cookies.set("flavor", "vanilla");
document.$cookies.get("flavor");
// => "vanilla"
```

### `document.$cookies.remove()`

Delete a cookie by name. Returns the value of the cookie, just in case.

``` js
document.$cookies.set("flavor", "chocolate");
document.$cookies.remove("flavor");
// => "chocolate"
```

### `document.$cookies.clear()`

Deletes all cookies.

``` js
document.$cookies.clear();
```

## Dates

Manipulating dates in JavaScript can be a real chore. Sprinkles extends the Date class with a few helpful properties.

### `Date.prototype.$beginningOfDay`

Returns a new date with the time set to the beginning of the day (0:00).

### `Date.prototype.$endOfDay`

Returns a new date with the time set to the end of the day (23:59:59).

### `Date.prototype.$beginningOfMonth`

Returns a new date with the date set to the 1st and the time set to the beginning of the day (0:00).

### `Date.prototype.$endOfMonth`

Returns a new date with the date set to the last day of the month and the time set to the end of the day (23:59:59).

### `Date.prototype.$tomorrow`

Returns a new date with the date set to one day into the future. The time remains unchanged.

### `Date.prototype.$yesterday`

Returns a new date with the date set to one day into the past. The time remains unchanged.

### `Date.prototype.$monthName`

Returns the name of the month in English.

### `Date.prototype.$dayName`

Returns the name of the day in English.

## Nodes

### `Node.prototype.$removeChildren()`

Removes all the children of the current node or element effectively emptying its contents. It's the equivalent to `el.innerHTML = ""` (gross) or repeatedly calling `removeChild()` (tedious).

``` js
var ul = document.querySelector("ul");
ul.$removeChildren();
```

## Numbers

### `Number.prototype.$ordinalize()`

Returns an ordinal string used to denote order (e.g., 1st, 2nd, 3rd).

``` js
var n = 42;
n.$ordinalize();
// => "42nd"
```

[inf]: http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html

## Objects

### `Object.prototype.$forEach()`

In Ruby, looping over an array or looping over a hash is very similiar—you call the same method, `each()`. The difference is the signature of the callback function. For an array, the callback receives one primary argument (each item in the aray); for a hash, the callback receives two arguments (each key and value).

``` js
var object = { scoops: 1, flavor: "vanilla", sprinkles: true },
    keys   = [],
    values = [];

object.$forEach(function(key, value) {
  keys.push(key);
  values.push(value);
})

// keys => ["scoops", "flavor", "sprinkles"]
// values => [1, "vanilla", true]
```

### `Object.prototype.$try()`

Try to access a property or call a function of an object that might be `undefined`. Helps to avoid writing conditional statements.

``` js
// Instead of this...
if (iceCream.addToppings) iceCream.addToppings("caramel", "coconut", "cream");
// Try this...
iceCream.try("addToppings", "caramel", "coconut", "cream");
```

## Query String Params

### `Sprinkles.QueryString.parse()`

Returns an object representing the query string params from any URL. Also works on query string fragments too like `window.location.search`.

``` js
Sprinkles.QueryString.parse("http://icecreamfinder.com/?flavor=strawberry&location=san%20francisco");
// => { "flavor": "strawberry", "location": "san francisco" }
```

### `window.location.$params`

Returns an object representing the query string params from `window.location.search`. Pair with `forEach()` to loop through URL parameters.

``` js
// Assume window.location = "http://icecreamfinder.com/?flavor=strawberry
window.location.$params
// => { "flavor": "strawberry" }
window.location.$params["flavor"]
// => "strawberry"

window.location.$params.$forEach(function(key, value) {
  // Loop through every parameter
})
```

## AJAX

### `$get()`

Perform an HTTP GET request to a specified resource and call the appropriate callback when the request is complete.

``` js
$get("http://api.icecreamfinder.com/stores.csv", success, error);

function success(response) {
  // Handle the success...
};

function error(response) {
  // Handle the error...
};
```

### `$getJSON()`

Just like `$get()` but the response is parsed as JSON before the success or error callbacks are called.

## Development

### Environment

Sprinkles uses [Grunt][grn] to run development-oriented tasks. Grunt relies on [Node Packaged Modules][npm] (NPM). You can install NPM with [Homebrew][hmb]. With NPM installed and from inside the Sprinkles project root run:

``` sh
npm install
```

This is the Ruby equivalent of running `bundle install`. You can run tasks individually if you must but the default task, which is available simply by calling `grunt` should be all you need.

When you're done with a feature, you should [semantically](sem) increment the version number in `package.json` and run `grunt` to update the distribution files.

### Tests

Unfortunately, you cannot run Sprinkles' tests from the command line. This is due to the fact that things like PhantomJS, which usually drive headless tests, are not real browsers. This means that things like `document.cookie` and `window.location` don't behave like you'd expect. It seems sensible that running tests in-browser takes priority over running them from the command line so for now to run them boot up Sprinkles in web server (e.g., `python -m SimpleHTTPServer 8080`) and hit the test file directly (e.g. http://localhost:8080/test/index.html).

Please note there is a separate test file dedicated to testing query strings because if you set `window.location.search` during a test, the browser will reload the page. In a separate file, it's possible to test query string parameters in isolation.

[grn]: http://gruntjs.com
[npm]: https://www.npmjs.org
[hmb]: http://brew.sh
[sem]: http://semver.org
