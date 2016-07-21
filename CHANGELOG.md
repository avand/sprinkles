# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- This Change Log!
- `Sprinkles.QueryString.parse()` to parse query string params from any URL.
- `location.$params` returns the params in `window.location.search`.
- `Number.prototype.$ordinalize()` (moved from `String.prototype`).
- CSS utilities for cursor, display, floats, lists, opacity, position, and type.

### Changed
- Moved off QUnit in favor of Mocha.
- Cookie-related methods `setItem()`, `getItem()`, and `removeItem()` have been
  renamed to simply `set()`, `get()`, and `remove()`.
- All date extensions are now implemented as properties with getter functions.
  No more parenthesis needed.
- `Object.prototype.$try()` will return `undefined` now instead of `null` if it
  can't find the property.
- `document.$cookies.remove()` & `document.$cookies.set()` return the value of
  the cookie.

### Removed
- Command line tests—use the browser for now.
- `Location.$getParams()`
- `Location.$getParam()`
- `Location.prototype.$getParams()`
- `Location.prototype.$getParam()`
- `String.prototype.$ordinalize()`
- `Array.prototype.$includes()`

## [1.4.0] - 2014-07-09
### Added
- `Array.prototype.$flatten()`
- `Array.prototype.$groupBy()`
- `document.$cookies.getItem()`
- `document.$cookies.setItem()`
- `document.$cookies.removeItem()`
- `document.$cookies.clear()`
- `Date.prototype.$beginningOfDay()`
- `Date.prototype.$endOfDay()`
- `Date.prototype.$beginningOfMonth()`
- `Date.prototype.$endOfMonth()`
- `Date.prototype.$monthName()`
- `Date.prototype.$dayName()`
- `Date.prototype.$tomorrow()`
- `Date.prototype.$yesterday()`
- `Node.prototype.$removeChildren()`
- `Object.prototype.$forEach()`
- `Location.$getParams()`
- `Location.$getParam()`
- `Location.prototype.$getParams()`
- `Location.prototype.$getParam()`
- `window.$get()`
- `window.$getJSON()`

[Unreleased]: https://github.com/avand/sprinkles/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/avand/sprinkles/releases/tag/v1.4.0
