Sprinkles
=========

Sprinks is the [ActiveSupport][as] of [Vanilla JS][vjs].

The goal of this project is to isolate a small collection of helpers and extensions to make our lives as front-end engineers a little easier. Just like ActiveSupport has done for [Ruby on Rails][ror] engineers.

What you'll find in this project is:

* String inflections (e.g., `ordinalize()`),
* XHR helpers (e.g., `getJSON()`),
* DOM manipulation helpers (e.g., `addClass()`),
* Date extensions (e.g., `endOfMonth()`),
* Some cross-browser compatibility helpers (e.g., `addAnimationEndEventListener()`).

What you won't find in this project is:

* Effects or animation (e.g., `fadeOut()`),
* Browser backwards-compatibility,
* Heavy-handed DOM manipulation (e.g., `wrapAll()`),
* DOM selection (e.g., [Sizzle][siz]),
* Anything a modern browser can alrady do.

This project is under active development so things will change dramatically as it matures. For contributions, please fork and submit pull requests.

[as]:  https://github.com/rails/rails/tree/master/activesupport
[vjs]: http://vanilla-js.com
[ror]: http://rubyonrails.org
[siz]: http://sizzlejs.com

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

## String Inflections

ActiveSupport has a bunch of slick [string inflections][inf]. The most popular are represented in Sprinkles.

``` js
"1".ordinalize()      // "1st"
"22".ordinalize()     // "22nd"
"cat".pluralize()     // "cats" (coming soon, maybe?)
"dogs".singularize(); // "dog"  (coming soon, maybe?)
```

[inf]: http://api.rubyonrails.org/classes/ActiveSupport/Inflector.html
