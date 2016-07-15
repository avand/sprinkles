# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- This Change Log!

### Changed
- Cookie-related methods `setItem()`, `getItem()`, and `removeItem()` have been
  renamed to simply `set()`, `get()`, and `remove()`.
- All date extensions are now implemented as properties with getter functions.
  No more parenthesis needed.

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
- `String.prototype.$ordinalize()`
- `window.$get()`
- `window.$getJSON()`

[Unreleased]: https://github.com/avand/sprinkles/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/avand/sprinkles/releases/tag/v1.4.0
