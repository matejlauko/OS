export const resetStyles = {
  /*! tailwindcss v2.2.16 | MIT License | https://tailwindcss.com */

  /*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

  /**
   * 1. Prevent padding and border from affecting element width.
   *
   *    We used to set this in the html element and inherit from
   *    the parent element for everything else. This caused issues
   *    in shadow-dom-enhanced elements like <details> where the content
   *    is wrapped by a div with box-sizing set to `content-box`.
   *
   *    https://github.com/mozdevs/cssremedy/issues/4
   *
   *
   * 2. Allow adding a border to an element by just adding a border-width.
   *
   *    By default, the way the browser specifies that an element should have no
   *    border is by setting it's border-style to `none` in the user-agent
   *    stylesheet.
   *
   *    In order to easily add borders to elements by just setting the `border-width`
   *    property, we change the default border-style for all elements to `solid`, and
   *    use border-width to hide them instead. This way our `border` utilities only
   *    need to set the `border-width` property instead of the entire `border`
   *    shorthand, making our border utilities much more straightforward to compose.
   *
   *    https://github.com/tailwindcss/tailwindcss/pull/116
   */

  '*, ::before, ::after': {
    'box-sizing': 'border-box' /* 1 */,
    'border-width': 0 /* 2 */,
    'border-style': 'solid' /* 2 */,
    // 'border-color': 'currentColor' /* 2 */,
  },

  /*
Document
========
*/

  /**
Use a more readable tab size (opinionated).

1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

  html: {
    '-moz-tab-size': 4,
    'tab-size': 4,
    'line-height': 1.15 /* 1 */,
    '-webkit-text-size-adjust': '100%' /* 2 */,
  },

  /*
Sections
========
*/

  /**
Remove the margin in all browsers.
*/

  body: {
    margin: 0,
  },

  /**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

  /* body {
  'font-family': system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
} */

  /*
Grouping content
================
*/

  /**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

  hr: {
    height: 0 /* 1 */,
    color: 'inherit' /* 2 */,

    // Ensure horizontal rules are visible by default
    'border-top-width': '1px',
  },

  /*
Text-level semantics
====================
*/

  /**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

  'abbr[title]': {
    '-webkit-text-decoration': 'underline dotted',
    'text-decoration': 'underline dotted',
  },

  /**
Add the correct font weight in Edge and Safari.
*/

  'b, strong': {
    'font-weight': 'bolder',
  },

  /**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

  'code, kbd, samp, pre': {
    'font-family':
      'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo,monospace' /* 1 */,
    'font-size': '1em' /* 2 */,
  },

  /**
Add the correct font size in all browsers.
*/

  small: {
    'font-size': '80%',
  },

  /*
Tabular data
============
*/

  /**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

  table: {
    'text-indent': 0 /* 1 */,
    'border-color': 'inherit' /* 2 */,

    'border-collapse': 'collapse',
  },

  /*
Forms
=====
*/

  /**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.

* Reset form element properties that are easy to forget to
   * style explicitly so you don't inadvertently introduce
   * styles that deviate from your design system. These styles
   * supplement a partial reset that is already applied by
   * normalize.css.
*/

  'button, input, optgroup, select, textarea': {
    'font-family': 'inherit' /* 1 */,
    'font-size': '100%' /* 1 */,
    'line-height': 1.15 /* 1 */,
    margin: 0 /* 2 */,

    padding: 0,
    color: 'inherit',
  },

  /**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

  'button, select': {
    /* 1 */
    'text-transform': 'none',
  },

  /**
Correct the inability to style clickable types in iOS and Safari.
*/

  'button, [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button',
  },

  /**
Remove the inner border and padding in Firefox.
*/

  '::-moz-focus-inner': {
    'border-style': 'none',
    padding: 0,
  },

  /**
Restore the focus styles unset by the previous rule.
*/

  ':-moz-focusring': {
    outline: '1px dotted ButtonText',
  },

  /**
Remove the additional ':invalid' styles in Firefox.
'See': https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

  ':-moz-ui-invalid': {
    'box-shadow': 'none',
  },

  /**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

  legend: {
    padding: 0,
  },

  /**
Add the correct vertical alignment in Chrome and Firefox.
*/

  progress: {
    'vertical-align': 'baseline',
  },

  /**
Correct the cursor style of increment and decrement buttons in Safari.
*/

  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },

  /**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

  '[type="search"]': {
    '-webkit-appearance': 'textfield' /* 1 */,
    'outline-offset': '-2px' /* 2 */,
  },

  /**
Remove the inner padding in Chrome and Safari on macOS.
*/

  '::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },

  /**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button' /* 1 */,
    font: 'inherit' /* 2 */,
  },

  /*
Interactive
===========
*/

  /*
Add the correct display in Chrome and Safari.
*/

  summary: {
    display: 'list-item',
  },

  /**
 '* Manually forked from SUIT CSS Base': https://github.com/suitcss/base
 * A thin layer on top of normalize.css that provides a starting point more
 * suitable for web applications.
 */

  'input::placeholder, textarea::placeholder': {
    opacity: 1,
  },

  'h1, h2, h3, h4, h5, h6': {
    display: 'block',
  },

  /**
   * Reset links to optimize for opt-in styling instead of
   * opt-out.
   */

  a: {
    color: 'inherit',
    'text-decoration': 'inherit',
  },

  /**
  '* 1. Make replaced elements `display': block` by default as that's
  *    the behavior you want almost all of the time. Inspired by
  *    CSS Remedy, with `svg` added as well.
  *
  *    https://github.com/mozdevs/cssremedy/issues/14
  *
  '* 2. Add `vertical-align': middle` to align replaced elements more
  *    sensibly by default when overriding `display` by adding a
  *    utility like `inline`.
  *
  *    This can trigger a poorly considered linting error in some
  *    tools but is included by design.
  *
  *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210
  */

  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: 'block' /* 1 */,
    'vertical-align': 'middle' /* 2 */,
  },

  /**
   * Constrain images and videos to the parent width and preserve
   * their intrinsic aspect ratio.
   *
   * https://github.com/mozdevs/cssremedy/issues/14
   */

  'img, video': {
    'max-width': '100%',
    height: 'auto',
  },

  /**
   * Ensure the default browser behavior of the `hidden` attribute.
   */

  '[hidden]': {
    display: 'none',
  },
} as const
