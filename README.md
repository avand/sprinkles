Sprinkles
=========

Sprinks is the [ActiveSupport][as] of Vanilla [JS][vjs].

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
