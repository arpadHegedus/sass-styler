# SASS STYLER
[![NPM](https://img.shields.io/npm/v/sass-styler.svg?label=sass-styler)](https://www.npmjs.com/package/sass-styler)
[![Sass](https://img.shields.io/badge/sass-1.69.5-blue)](https://sass-lang.com/)
[![Github issues](https://img.shields.io/github/issues/arpadhegedus/sass-styler)](https://github.com/arpadHegedus/sass-styler/issues)
[![Tests](https://img.shields.io/badge/passed%20tests-223-brightgreen)](https://github.com/arpadHegedus/sass-styler/blob/master/test.js)
[![License](https://img.shields.io/github/license/arpadhegedus/sass-styler)](https://github.com/arpadHegedus/sass-styler/blob/master/LICENSE)

Modular scss utility library to build better styles faster

## Install

```bash
npm i sass-styler
```

## Table of Content

Styler is made up of mixins, functions and variables

<!-- start automated part -->
**Table of Content**

<table>
<tbody>
    <tr>
      <td style="vertical-align:top" rowspan="41">Mixins</td>
      <td style="vertical-align:top"><a href="#mixin-angled-edge">angled-edge</a></td><td style="vertical-align:top">Add an angled edge to a container using a generated SVG</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-angled-tritone-background">angled-tritone-background</a></td><td style="vertical-align:top">A tritone angled CSS background</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-apply">apply</a></td><td style="vertical-align:top">Add multiple extends</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-aspect-ratio-padding">aspect-ratio-padding</a></td><td style="vertical-align:top">The padding trick to keep a container the same ratio in different screen sizes</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-background-stripes">background-stripes</a></td><td style="vertical-align:top">Background gradient stripes from a list of colors</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-clearfix">clearfix</a></td><td style="vertical-align:top">Prevent elements flowing around floating elements</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-container">container</a></td><td style="vertical-align:top">Create a width-limited container with side-margin on smaller screens</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-cover-link">cover-link</a></td><td style="vertical-align:top">Cover a container with a link</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-declare-map">declare-map</a></td><td style="vertical-align:top">Declare properties via sass maps</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-elevation">elevation</a></td><td style="vertical-align:top">Add box shadow based on elevation settings</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-extend-background">extend-background</a></td><td style="vertical-align:top">Extend the background sideways of a container</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-flex-grid">flex-grid</a></td><td style="vertical-align:top">Create a flexbox grid from the wrapper and direct children elements</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-hardware-accelerate">hardware-accelerate</a></td><td style="vertical-align:top">Turn on the hardware acceleration of the browser for element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-hide-text-except-pseudo">hide-text-except-pseudo</a></td><td style="vertical-align:top">Hide text within a container but keep pesudo elements visible</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-hide-visually">hide-visually</a></td><td style="vertical-align:top">Visually hide an element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-horizontal-list">horizontal-list</a></td><td style="vertical-align:top">Make a list horizontal</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-icon-item">icon-item</a></td><td style="vertical-align:top">Align an icon and text next to one another</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-increment-z-index">increment-z-index</a></td><td style="vertical-align:top">Increment z-index value for each element in a container</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-inner-container">inner-container</a></td><td style="vertical-align:top">Set styles for containers without media queries where you use a main and a wrapper element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-keyframes">keyframes</a></td><td style="vertical-align:top">Add CSS animation only once</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-loader">loader</a></td><td style="vertical-align:top">Create a dynamic, animated CSS circle loader spinner</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-media">media</a></td><td style="vertical-align:top">Generate media queries via saved keywords or simplified syntax</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-menu-icon">menu-icon</a></td><td style="vertical-align:top">Generate a menu icon from a single element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-menu-icon-close">menu-icon-close</a></td><td style="vertical-align:top">Morph menu icon to a close (x) icon</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-normalize">normalize</a></td><td style="vertical-align:top">Normalize with best practices combined from bootstrap, tailwind, etc</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-object-fit">object-fit</a></td><td style="vertical-align:top">Create object fitted elements</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-on-circle">on-circle</a></td><td style="vertical-align:top">Mixin to place items on a circle</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-pipe-list">pipe-list</a></td><td style="vertical-align:top">Make a list horizontal and add a pipe separator (border) between the items</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-position">position</a></td><td style="vertical-align:top">Set position top, right, bottom, left, position, width, height and z-index values</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-pseudo-with-position">pseudo-with-position</a></td><td style="vertical-align:top">Add a pseduo element with position</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-pseudo">pseudo</a></td><td style="vertical-align:top">Add a pseduo element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-replace-context">replace-context</a></td><td style="vertical-align:top">Replace part of the current selector</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-reset">reset</a></td><td style="vertical-align:top">Reset styles</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-scrollbar">scrollbar</a></td><td style="vertical-align:top">Style scrollbars</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-search-icon">search-icon</a></td><td style="vertical-align:top">Generate a search icon from a single element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-search-icon-close">search-icon-close</a></td><td style="vertical-align:top">Morph search icon to a close (x) icon</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select">select</a></td><td style="vertical-align:top">Select common element groups via shorthands</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-triangle">triangle</a></td><td style="vertical-align:top">CSS-only triangle</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-truncate">truncate</a></td><td style="vertical-align:top">Truncate text in a container</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-unhide-visually">unhide-visually</a></td><td style="vertical-align:top">Unhide a previously visually hidden element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-unstyled-list">unstyled-list</a></td><td style="vertical-align:top">Remove list styles</td>
    </tr>
    <tr>
      <td style="vertical-align:top" rowspan="101">Functions</td>
      <td style="vertical-align:top"><a href="#mixin-asset">asset</a></td><td style="vertical-align:top">Get an asset url prepended by a default base path</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-best-contrast">best-contrast</a></td><td style="vertical-align:top">Get the best contrasting color from a list of colors compared to a base</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-blacken">blacken</a></td><td style="vertical-align:top">Mix a color with black</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-calc-add">calc-add</a></td><td style="vertical-align:top">Add 2 numbers or return calc if they are incompatible</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-calc-substract">calc-substract</a></td><td style="vertical-align:top">Substract 2 numbers or return calc if they are incompatible</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-cmyk">cmyk</a></td><td style="vertical-align:top">Get CMYK values from a color</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-color-from">color-from</a></td><td style="vertical-align:top">Get the color value from a list like border or background</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-color">color</a></td><td style="vertical-align:top">Return and manipulate color from a palette</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-c">c</a></td><td style="vertical-align:top">Return and manipulate color from a palette (alias of color)</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-contrast-balance">contrast-balance</a></td><td style="vertical-align:top">Change 2 colors contrast ratio by weighted balance(0-100)
0 means only second color is changed, while 100 means only the first one</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-contrast-between">contrast-between</a></td><td style="vertical-align:top">Get the contrast between 2 colors</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-contrast-ratio-by-name">contrast-ratio-by-name</a></td><td style="vertical-align:top">Get a contrast ratio by its official codename</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-contrast-with">contrast-with</a></td><td style="vertical-align:top">Adjust color towards a target color until it reaches a contrast ratio</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-decimal-round">decimal-round</a></td><td style="vertical-align:top">Round a number to specified digits</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-elevation">elevation</a></td><td style="vertical-align:top">Return box shadow based on elevation settings</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-em2px">em2px</a></td><td style="vertical-align:top">Em to Px conversion</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-em2rem">em2rem</a></td><td style="vertical-align:top">Change em to rem (units only, no calculations)</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-emval">emval</a></td><td style="vertical-align:top">Get value of a number in ems</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-ensure-unit">ensure-unit</a></td><td style="vertical-align:top">Convert a number to another unit</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-escape-classname">escape-classname</a></td><td style="vertical-align:top">Escape string to work as a classname</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-fallback">fallback</a></td><td style="vertical-align:top">Fallback for possibly null values</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-fluid-size">fluid-size</a></td><td style="vertical-align:top">Fluid size depending on viewport with minimum and maximum values</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-get">get</a></td><td style="vertical-align:top">Deeply get a value from a map</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-grid-column-width">grid-column-width</a></td><td style="vertical-align:top">Calculate the coluns width from a columns ratio and a gap value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-is-between">is-between</a></td><td style="vertical-align:top">Check if a number is between a min and max value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-is-contrasting">is-contrasting</a></td><td style="vertical-align:top">Check if 2 colors contrast enough</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-is-property">is-property</a></td><td style="vertical-align:top">Check whether a property is valid in CSS3</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-is-pseudo">is-pseudo</a></td><td style="vertical-align:top">Check whether a pseudo class is valid in CSS3</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-keyframes-name">keyframes-name</a></td><td style="vertical-align:top">Get a unique name for a keyframe animation with optional config</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-long-shadow">long-shadow</a></td><td style="vertical-align:top">Return Long shadow</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-luminance">luminance</a></td><td style="vertical-align:top">Returns XYZ value to RGB channel</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-media">media</a></td><td style="vertical-align:top">Get generated media query string via saved keywords or simplified syntax</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-merge">merge</a></td><td style="vertical-align:top">Merge maps recursively</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-num-to-length">num-to-length</a></td><td style="vertical-align:top">Add `$unit` to `$value`</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-px2em">px2em</a></td><td style="vertical-align:top">Px to Em calculation</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-px2rem">px2rem</a></td><td style="vertical-align:top">Px to Rem calculation</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-pxval">pxval</a></td><td style="vertical-align:top">Get value of a number in pixels</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-rem2em">rem2em</a></td><td style="vertical-align:top">Change rem to em (units only, no calculations)</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-rem2px">rem2px</a></td><td style="vertical-align:top">Rem to Px calculation</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-remove-nth">remove-nth</a></td><td style="vertical-align:top">Remove the $nth value of a $list</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-remove">remove</a></td><td style="vertical-align:top">Remove $keys (deeply) from $map</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-remval">remval</a></td><td style="vertical-align:top">Get value of a number in rems</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-same-units">same-units</a></td><td style="vertical-align:top">Check whether 2 numbers have the same units</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-scale-light">scale-light</a></td><td style="vertical-align:top">Scale lightness by iterations to fix rounding issues</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-scale-luminance">scale-luminance</a></td><td style="vertical-align:top">Scale a luminance of a color by a set value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-after">select-after</a></td><td style="vertical-align:top">Select all elements after a specific nth value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-all-out-of-at-least">select-all-out-of-at-least</a></td><td style="vertical-align:top">Select all elements if the number of elements in the container is at least a number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-all-out-of-at-most">select-all-out-of-at-most</a></td><td style="vertical-align:top">Select all elements if the number of elements in the container is at most a number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-all-out-of-between">select-all-out-of-between</a></td><td style="vertical-align:top">Select all elements if the number of elements in the container is between a min and max number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-before">select-before</a></td><td style="vertical-align:top">Select all elements before a specific nth value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-between">select-between</a></td><td style="vertical-align:top">Select all elements between a specific first and last nth value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-even-between">select-even-between</a></td><td style="vertical-align:top">Select all even nth elements between a specific first and last nth value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-even">select-even</a></td><td style="vertical-align:top">Select all even nth elements</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-except-first-last">select-except-first-last</a></td><td style="vertical-align:top">Select all elements except the first and last</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-except-only-child">select-except-only-child</a></td><td style="vertical-align:top">Select all elements except the only child</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-except">select-except</a></td><td style="vertical-align:top">Select all elements except a specific nth</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-first-last">select-first-last</a></td><td style="vertical-align:top">Select the first and last elements</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-first-of-type">select-first-of-type</a></td><td style="vertical-align:top">Select the first of the type element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-first-out-of">select-first-out-of</a></td><td style="vertical-align:top">Select first element if the number of elements in the container equals to a number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-first">select-first</a></td><td style="vertical-align:top">Select the first element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-last-of-type">select-last-of-type</a></td><td style="vertical-align:top">Select the last of the type element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-last-out-of">select-last-out-of</a></td><td style="vertical-align:top">Select last element if the number of elements in the container equals to a number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-last">select-last</a></td><td style="vertical-align:top">Select the last element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-middle">select-middle</a></td><td style="vertical-align:top">Select the middle element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-nth-between">select-nth-between</a></td><td style="vertical-align:top">Select all nth elements between a first and a last value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-nth-both-sides">select-nth-both-sides</a></td><td style="vertical-align:top">Select nth elements from both sides of the container</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-nth-from">select-nth-from</a></td><td style="vertical-align:top">Select nth elements from after a value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-nth">select-nth</a></td><td style="vertical-align:top">Select every nth element</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-odd-between">select-odd-between</a></td><td style="vertical-align:top">Select all odd nth elements between a specific first and last nth value</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-odd">select-odd</a></td><td style="vertical-align:top">Select all odd nth elements</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-only-child">select-only-child</a></td><td style="vertical-align:top">Select element only if it is an only child of its container</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select-owl">select-owl</a></td><td style="vertical-align:top">Mingle a list of selectors to go before and after the other adjacently</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-select">select</a></td><td style="vertical-align:top">Return selectors for common element groups via shorthands</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-selector-combine">selector-combine</a></td><td style="vertical-align:top">Combine 2 CSS selectors</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-set">set</a></td><td style="vertical-align:top">Recusrively set map values based on keys</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides-bottom">sides-bottom</a></td><td style="vertical-align:top">Get the bottom value from a list like margin or padding</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides-left">sides-left</a></td><td style="vertical-align:top">Get the left value from a list like margin or padding</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides-right">sides-right</a></td><td style="vertical-align:top">Get the right value from a list like margin or padding</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides-top">sides-top</a></td><td style="vertical-align:top">Get the top value from a list like margin or padding</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides-x">sides-x</a></td><td style="vertical-align:top">Get the right-left value from a list like margin or padding</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides-y">sides-y</a></td><td style="vertical-align:top">Get the top-bottom value from a list like margin or padding</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sides">sides</a></td><td style="vertical-align:top">Get a map of sides from a value or list (like margin, padding)</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-size">size</a></td><td style="vertical-align:top">Return a named size</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-s">s</a></td><td style="vertical-align:top">Return a named size (alias of size)</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-srgb">srgb</a></td><td style="vertical-align:top">Returns XYZ value to RGB channel</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-ends-with">str-ends-with</a></td><td style="vertical-align:top">Check if string ends with a substring</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-replace">str-replace</a></td><td style="vertical-align:top">Replace `$search` with `$replace` in `$string`</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-split">str-split</a></td><td style="vertical-align:top">Split a string into a list of strings along a delimiter</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-starts-with">str-starts-with</a></td><td style="vertical-align:top">Check if string starts with a substring</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-to-num">str-to-num</a></td><td style="vertical-align:top">Cast a string `$value` into a number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-trim-end">str-trim-end</a></td><td style="vertical-align:top">Trim whitespace from the end of a string</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-trim-start">str-trim-start</a></td><td style="vertical-align:top">Trim whitespace from the beginning of a string</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-str-trim">str-trim</a></td><td style="vertical-align:top">Trim whitespace off a string</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-strip-unit">strip-unit</a></td><td style="vertical-align:top">Remove units from a number</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-svg-base64">svg-base64</a></td><td style="vertical-align:top">Base64 encode svg code</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-svg-url">svg-url</a></td><td style="vertical-align:top">SVG base64 background url based on $svg with optional $fill color</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-tetrad">tetrad</a></td><td style="vertical-align:top">Get the tetrad pairs of a color</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-triad">triad</a></td><td style="vertical-align:top">Get the triad pairs of a color</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-unique-id-by-value">unique-id-by-value</a></td><td style="vertical-align:top">Generate a unique ID based on passed-in attributes</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-whiten">whiten</a></td><td style="vertical-align:top">Mix a color with white</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-xyz">xyz</a></td><td style="vertical-align:top">Return an RGB channel processed as XYZ</td>
    </tr>
    <tr>
      <td style="vertical-align:top" rowspan="5">Variables</td>
      <td style="vertical-align:top"><a href="#mixin-asset-path">asset-path</a></td><td style="vertical-align:top">The default asset path to prepend</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-color-palette">color-palette</a></td><td style="vertical-align:top">Named colors palette</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-media-queries">media-queries</a></td><td style="vertical-align:top">Named shorthands for media queries
(values should be full media query strings or a number value)
(if a number value, the value will be used as min-width or a calculated value when used as max-width - see examples)</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-selectors">selectors</a></td><td style="vertical-align:top">List of selector shorthands</td>
    </tr>
    <tr>
      <td style="vertical-align:top"><a href="#mixin-sizes">sizes</a></td><td style="vertical-align:top">A map of named sizes (each may have one value or a list of values)</td>
    </tr>

  </tbody>
</table>

### Mixins


#### angled-edge <a id="mixin-angled-edge">&nbsp;</a>
Add an angled edge to a container using a generated SVG

```scss
@include angled-edge($fill, $height, $location, $hypotenuse, $width, $selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>fill</td><td>The color of the angled area</td><td><code>Color</code></td><td>-</td></tr><tr><td>height</td><td>The height of the angled area</td><td><code>Number</code></td><td>50</td></tr><tr><td>location</td><td>Where to put the angle (outside-top, outside-bottom, inside-top, inside-bottom)</td><td><code>String</code></td><td>outside-top</td></tr><tr><td>hypotenuse</td><td>The hypotenuse of the angled area (upper-left, upper-right, lower-left, lower-right)</td><td><code>Srting</code></td><td>upper-left</td></tr><tr><td>width</td><td>The width of the angled area</td><td><code>Number</code></td><td>null</td></tr><tr><td>selector</td><td>The selector the angled area should be generated in</td><td><code>String</code> <code>List</code></td><td>"&::after"</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/svg-base64.scss">svg-base64</a>

**File source:** <a href="/src/angled-edge.scss">src/angled-edge.scss</a>

<br>




#### angled-tritone-background <a id="mixin-angled-tritone-background">&nbsp;</a>
A tritone angled CSS background

```scss
@include angled-tritone-background($base, $color1, $color2, $angle1, $angle2, $position1, $position2)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>base</td><td>The base color</td><td><code>Color</code></td><td>transparent</td></tr><tr><td>color1</td><td>The first color</td><td><code>Color</code></td><td>rgba(#000, 0.1)</td></tr><tr><td>color2</td><td>The second color</td><td><code>Color</code></td><td>rgba(#fff, 0.1)</td></tr><tr><td>angle1</td><td>The angle for the first color</td><td><code>Number</code></td><td>-20deg</td></tr><tr><td>angle2</td><td>The angle for the second color</td><td><code>Number</code></td><td>-110deg</td></tr><tr><td>position1</td><td>The position of the first color change</td><td><code>Number</code></td><td>30%</td></tr><tr><td>position2</td><td>The position of the second color change</td><td><code>Number</code></td><td>30%</td></tr></table>

**File source:** <a href="/src/angled-tritone-background.scss">src/angled-tritone-background.scss</a>

<br>




#### apply <a id="mixin-apply">&nbsp;</a>
Add multiple extends

```scss
@include apply($keywords)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>keywords</td><td>CSS utility component ids to apply</td><td><code>List</code> <code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-split.scss">str-split</a>, <a href="/src/escape-classname.scss">escape-classname</a>

**File source:** <a href="/src/apply.scss">src/apply.scss</a>

<br>




#### aspect-ratio-padding <a id="mixin-aspect-ratio-padding">&nbsp;</a>
The padding trick to keep a container the same ratio in different screen sizes

```scss
@include aspect-ratio-padding($x, $y, $position)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>x</td><td>Width ratio</td><td><code>Number</code></td><td>16</td></tr><tr><td>y</td><td>Height raio</td><td><code>Number</code></td><td>9</td></tr><tr><td>position</td><td>Position</td><td><code>String</code> <code>List</code></td><td>relative</td></tr></table>

**File source:** <a href="/src/aspect-ratio-padding.scss">src/aspect-ratio-padding.scss</a>

<br>




#### background-stripes <a id="mixin-background-stripes">&nbsp;</a>
Background gradient stripes from a list of colors

```scss
@include background-stripes($direction, $colors)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>direction</td><td>Gradient direction</td><td><code>String</code> <code>Number</code></td><td>-</td></tr><tr><td>colors</td><td>List of colors</td><td><code>List</code></td><td>-</td></tr></table>

**File source:** <a href="/src/background-stripes.scss">src/background-stripes.scss</a>

<br>




#### clearfix <a id="mixin-clearfix">&nbsp;</a>
Prevent elements flowing around floating elements

```scss
@include clearfix($selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>Selector for the clearfix code</td><td><code>String</code></td><td>"&::after"</td></tr></table>

**File source:** <a href="/src/clearfix.scss">src/clearfix.scss</a>

<br>




#### container <a id="mixin-container">&nbsp;</a>
Create a width-limited container with side-margin on smaller screens

```scss
@include container($width, $margin)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>width</td><td>The width-limit</td><td><code>number</code></td><td>-</td></tr><tr><td>margin</td><td>The margin size (on smaller screens)</td><td><code>number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/calc-add.scss">calc-add</a>

**File source:** <a href="/src/container.scss">src/container.scss</a>

<br>




#### cover-link <a id="mixin-cover-link">&nbsp;</a>
Cover a container with a link

```scss
@include cover-link($selector, $position, $z-index)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The cover to be generated to</td><td><code>String</code> <code>List</code></td><td>"a::before"</td></tr><tr><td>position</td><td>The position of the parent container</td><td><code>String</code></td><td>relative</td></tr><tr><td>z-index</td><td>The z-indx value of the cover</td><td><code>Number</code></td><td>2</td></tr></table>

**Requires:** <a href="/src/position.scss">position</a>

**File source:** <a href="/src/cover-link.scss">src/cover-link.scss</a>

<br>




#### declare-map <a id="mixin-declare-map">&nbsp;</a>
Declare properties via sass maps

```scss
@include declare-map($map)
```
**Example:**
```scss
@include declare-map((color: red, margin: 0));                       /* color: red; margin: 0; */
@include declare-map((color: red, "&:hover": (color: blue)));         /* color: red; &:hover { color: blue; } */
@include declare-map((color: red, "&:hover, &:focus": (color: blue))); /* color: red; &:hover, &:focus { color: blue; } */
```

**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>map</td><td>Property declaration</td><td><code>Map</code></td><td>()</td></tr></table>

**Requires:** <a href="/src/str-replace.scss">str-replace</a>

**File source:** <a href="/src/declare-map.scss">src/declare-map.scss</a>

<br>




#### elevation <a id="mixin-elevation">&nbsp;</a>
Add box shadow based on elevation settings

```scss
@include elevation($level, $color)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>level</td><td>Level of elevation</td><td><code>Number</code></td><td>1</td></tr><tr><td>color</td><td>Shadow color</td><td><code>Color</code></td><td>rgba(0, 0, 0, 0.1)</td></tr></table>

**Requires:** <a href="/src/elevation.scss">elevation</a>

**File source:** <a href="/src/elevation.scss">src/elevation.scss</a>

<br>




#### extend-background <a id="mixin-extend-background">&nbsp;</a>
Extend the background sideways of a container

```scss
@include extend-background($background, $position, $z-index)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>background</td><td>The background value</td><td><code>Color</code> <code>String</code></td><td>-</td></tr><tr><td>position</td><td>The position value</td><td><code>String</code></td><td>relative</td></tr><tr><td>z-index</td><td>The Z-index value</td><td><code>Number</code></td><td>1</td></tr></table>

**File source:** <a href="/src/extend-background.scss">src/extend-background.scss</a>

<br>




#### flex-grid <a id="mixin-flex-grid">&nbsp;</a>
Create a flexbox grid from the wrapper and direct children elements

```scss
@include flex-grid($columns, $gap, $gap, $justify-content, $align-items, $selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>columns</td><td>The columns ratio (x of y)</td><td><code>List</code> <code>String</code></td><td>1 of 2</td></tr><tr><td>gap</td><td>The gap</td><td><code>Number</code></td><td>0</td></tr><tr><td>gap</td><td>The vertical gap</td><td><code>Number</code></td><td>0</td></tr><tr><td>justify-content</td><td>The justify content value</td><td><code>String</code></td><td>center</td></tr><tr><td>align-items</td><td>The align items value</td><td><code>String</code></td><td>stretch</td></tr><tr><td>selector</td><td>The child selector</td><td><code>String</code> <code>List</code></td><td>">*"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>, <a href="/src/grid-column-width.scss">grid-column-width</a>

**File source:** <a href="/src/flex-grid.scss">src/flex-grid.scss</a>

<br>




#### hardware-accelerate <a id="mixin-hardware-accelerate">&nbsp;</a>
Turn on the hardware acceleration of the browser for element

```scss
@include hardware-accelerate($perspective, $hide-backface)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>perspective</td><td>The perspective value</td><td><code>Number</code></td><td>1000</td></tr><tr><td>hide-backface</td><td>Hide backface visibility</td><td><code>Boolean</code></td><td>true</td></tr></table>

**File source:** <a href="/src/hardware-accelerate.scss">src/hardware-accelerate.scss</a>

<br>




#### hide-text-except-pseudo <a id="mixin-hide-text-except-pseudo">&nbsp;</a>
Hide text within a container but keep pesudo elements visible

```scss
@include hide-text-except-pseudo($font-size, $color, $line-height, $font-family, $text-align)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>font-size</td><td>Font size of the pseudo elements</td><td><code>Number</code></td><td>1rem</td></tr><tr><td>color</td><td>Color of the pseudo elements</td><td><code>Color</code></td><td>null</td></tr><tr><td>line-height</td><td>Line height of the pseudo elements</td><td><code>Number</code></td><td>null</td></tr><tr><td>font-family</td><td>Font family of the pseudo elements</td><td><code>String</code> <code>List</code></td><td>null</td></tr><tr><td>text-align</td><td>Text alignment of the pseudo elements</td><td><code>String</code></td><td>null</td></tr></table>

**File source:** <a href="/src/hide-text-except-pseudo.scss">src/hide-text-except-pseudo.scss</a>

<br>




#### hide-visually <a id="mixin-hide-visually">&nbsp;</a>
Visually hide an element

```scss
@include hide-visually($position, $overflow, $visibility, $opacity, $left)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>position</td><td>Position value</td><td><code>String</code></td><td>absolute</td></tr><tr><td>overflow</td><td>Overflow value</td><td><code>String</code></td><td>hidden</td></tr><tr><td>visibility</td><td>Visibility value</td><td><code>String</code></td><td>hidden</td></tr><tr><td>opacity</td><td>Opacity value</td><td><code>Number</code></td><td>0.00001</td></tr><tr><td>left</td><td>Left property</td><td><code>Number</code></td><td>-999999px</td></tr></table>

**File source:** <a href="/src/hide-visually.scss">src/hide-visually.scss</a>

<br>




#### horizontal-list <a id="mixin-horizontal-list">&nbsp;</a>
Make a list horizontal

```scss
@include horizontal-list($gap, $justify-content, $align-items, $flex-wrap)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>gap</td><td>The gap between items</td><td><code>Number</code></td><td>null</td></tr><tr><td>justify-content</td><td>The justify-content value</td><td><code>String</code></td><td>null</td></tr><tr><td>align-items</td><td>The align-items value</td><td><code>String</code></td><td>null</td></tr><tr><td>flex-wrap</td><td>The flex-wrap value</td><td><code>String</code></td><td>null</td></tr></table>

**File source:** <a href="/src/horizontal-list.scss">src/horizontal-list.scss</a>

<br>




#### icon-item <a id="mixin-icon-item">&nbsp;</a>
Align an icon and text next to one another

```scss
@include icon-item($icon-size, $gap, $side, $justify-content, $align-items, $align-icon)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>icon-size</td><td>Icon size (width)</td><td><code>Size</code></td><td>1em</td></tr><tr><td>gap</td><td>Gap between icon and text</td><td><code>Size</code></td><td>null</td></tr><tr><td>side</td><td>Whether the icon is on the left or the right side</td><td><code>String</code></td><td>left</td></tr><tr><td>justify-content</td><td>Horizontal alignment of icon and text</td><td><code>String</code></td><td>null</td></tr><tr><td>align-items</td><td>Vertical alignment of icon and text</td><td><code>String</code></td><td>null</td></tr><tr><td>align-icon</td><td>Vertically align the icon in a different way</td><td><code>String</code></td><td>null</td></tr></table>

**File source:** <a href="/src/icon-item.scss">src/icon-item.scss</a>

<br>




#### increment-z-index <a id="mixin-increment-z-index">&nbsp;</a>
Increment z-index value for each element in a container

```scss
@include increment-z-index($from, $to, $index, $selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>from</td><td>Starting element index</td><td><code>String</code></td><td>-</td></tr><tr><td>to</td><td>Ending element index</td><td><code>String</code></td><td>-</td></tr><tr><td>index</td><td>Starting z-index</td><td><code>Number</code></td><td>1</td></tr><tr><td>selector</td><td>The selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**File source:** <a href="/src/increment-z-index.scss">src/increment-z-index.scss</a>

<br>




#### inner-container <a id="mixin-inner-container">&nbsp;</a>
Set styles for containers without media queries where you use a main and a wrapper element

```scss
@include inner-container($width, $padding, $inner-selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>width</td><td>Max-width value</td><td><code>Number</code></td><td>-</td></tr><tr><td>padding</td><td>Padding value</td><td><code>Number</code></td><td>-</td></tr><tr><td>inner-selector</td><td>The inner element selector within the wrapper</td><td><code>String</code> <code>List</code></td><td>">*"</td></tr></table>

**File source:** <a href="/src/inner-container.scss">src/inner-container.scss</a>

<br>




#### keyframes <a id="mixin-keyframes">&nbsp;</a>
Add CSS animation only once

```scss
@include keyframes($name)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>name</td><td>The animation name</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/merge.scss">merge</a>, <a href="/src/keyframes.scss">_keyframes</a>

**File source:** <a href="/src/keyframes.scss">src/keyframes.scss</a>

<br>




#### loader <a id="mixin-loader">&nbsp;</a>
Create a dynamic, animated CSS circle loader spinner

```scss
@include loader($color, $bg, $size, $width, $animation-speed, $inner-opacity, $inner-color)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>The spinner circle segment color</td><td><code>Color</code></td><td>rgba(#000, 0.5)</td></tr><tr><td>bg</td><td>The spinner circle background</td><td><code>Color</code></td><td>rgba(#000, 0.2)</td></tr><tr><td>size</td><td>The size of the circle</td><td><code>Number</code></td><td>1.5rem</td></tr><tr><td>width</td><td>The width of the circle line</td><td><code>Number</code></td><td>2px</td></tr><tr><td>animation-speed</td><td>Animation speed</td><td><code>Number</code></td><td>1s</td></tr><tr><td>inner-opacity</td><td>The opacity of the elements in the container</td><td><code>Number</code></td><td>0.5</td></tr><tr><td>inner-color</td><td>Set the container font color</td><td><code>Color</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/pseudo-with-position.scss">pseudo-with-position</a>, <a href="/src/keyframes.scss">keyframes</a>

**File source:** <a href="/src/loader.scss">src/loader.scss</a>

<br>




#### media <a id="mixin-media">&nbsp;</a>
Generate media queries via saved keywords or simplified syntax

```scss
@include media($query...)
```
**Example:**
```scss
@include media(1024px);                    /* @media (min-width: 1024px) */
@include media(800px 1024px);              /* @media (min-width: 800px) and (max-width: 1024px) */
@include media(max 1024px);                /* @media (max-width: 1024px) */
@include media(620px, max 1024px);         /* @media (min-width: 620px), (max-width: 1024px) */
$media-queries: (
  large: 1024px,
  wide: 75rem,
  dark: "(prefers-color-scheme: dark)"
);
@include media(large);                     /* @media (min-width: 1024px) */
@include media(max large);                 /* @media (max-width: 1023px) */
@include media(wide);                      /* @media (min-width: 75rem) */
@include media(max wide);                  /* @media (max-width: 74.999rem) */
@include media(large wide);                /* @media (min-width: 1024px) and (max-width: 74.999rem) */
@include media(dark large wide);           /* @media (prefers-color-scheme: dark) and (min-width: 1024px) and (max-width: 74.999rem) */
```

**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>query...</td><td>Number value for min width, or number value preceeded by "max" for max width, or 2 number values for min and max width (alternatively keyword from $media-queries instead of any number value)</td><td><code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/media.scss">media</a>

**File source:** <a href="/src/media.scss">src/media.scss</a>

<br>




#### menu-icon <a id="mixin-menu-icon">&nbsp;</a>
Generate a menu icon from a single element

```scss
@include menu-icon($color, $border-radius, $width, $height, $gutter, $transition-duration)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color of the menu lines</td><td><code>Color</code></td><td>currentColor</td></tr><tr><td>border-radius</td><td>Menu line border radius</td><td><code>Number</code></td><td>0</td></tr><tr><td>width</td><td>Width of the menu icon lines</td><td><code>Number</code></td><td>1em</td></tr><tr><td>height</td><td>Height of an individual menu icon line</td><td><code>Number</code></td><td>0.125em</td></tr><tr><td>gutter</td><td>Gutter between menu lines</td><td><code>Number</code></td><td>0.3125em</td></tr><tr><td>transition-duration</td><td>Transition speed for animations</td><td><code>Number</code></td><td>0.3s</td></tr></table>

**Requires:** <a href="/src/calc-add.scss">calc-add</a>, <a href="/src/calc-substract.scss">calc-substract</a>

**File source:** <a href="/src/menu-icon.scss">src/menu-icon.scss</a>

<br>




#### menu-icon-close <a id="mixin-menu-icon-close">&nbsp;</a>
Morph menu icon to a close (x) icon

```scss
@include menu-icon-close($color)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Overwrite icon line color (use auto to keep existing color)</td><td><code>Color</code></td><td>auto</td></tr></table>

**Requires:** <a href="/src/calc-add.scss">calc-add</a>, <a href="/src/calc-substract.scss">calc-substract</a>

**File source:** <a href="/src/menu-icon.scss">src/menu-icon.scss</a>

<br>




#### normalize <a id="mixin-normalize">&nbsp;</a>
Normalize with best practices combined from bootstrap, tailwind, etc

```scss
@include normalize($root)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>root</td><td>Whether the normalize should run for the root styles.</td><td><code>Boolean</code></td><td>true</td></tr></table>

**Requires:** <a href="/src/media.scss">media</a>

**File source:** <a href="/src/normalize.scss">src/normalize.scss</a>

<br>




#### object-fit <a id="mixin-object-fit">&nbsp;</a>
Create object fitted elements

```scss
@include object-fit($object-fit, $object-position, $position, $width, $height)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>object-fit</td><td>The object fit</td><td><code>String</code></td><td>cover</td></tr><tr><td>object-position</td><td>The object position</td><td><code>Number</code> <code>List</code></td><td>50% 50%</td></tr><tr><td>position</td><td>Element position</td><td><code>String</code></td><td>null</td></tr><tr><td>width</td><td>The element width</td><td><code>Number</code></td><td>100%</td></tr><tr><td>height</td><td>The element height</td><td><code>Number</code></td><td>100%</td></tr></table>

**File source:** <a href="/src/object-fit.scss">src/object-fit.scss</a>

<br>




#### on-circle <a id="mixin-on-circle">&nbsp;</a>
Mixin to place items on a circle

```scss
@include on-circle($item-count, $circle-size, $item-size)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>item-count</td><td>Number of items on the circle</td><td><code>Integer</code></td><td>-</td></tr><tr><td>circle-size</td><td>Large circle size</td><td><code>Length</code></td><td>-</td></tr><tr><td>item-size</td><td>Single item size</td><td><code>Length</code></td><td>-</td></tr></table>

**File source:** <a href="/src/on-circle.scss">src/on-circle.scss</a>

<br>




#### pipe-list <a id="mixin-pipe-list">&nbsp;</a>
 Make a list horizontal and add a pipe separator (border) between the items

```scss
@include pipe-list($gap, $border, $justify-content, $align-items, $flex-wrap)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>gap</td><td>The gap between items</td><td><code>Number</code></td><td>null</td></tr><tr><td>border</td><td>The border (the pipe) styles</td><td><code>List</code></td><td>null</td></tr><tr><td>justify-content</td><td>The justify-content value</td><td><code>String</code></td><td>null</td></tr><tr><td>align-items</td><td>The align-items value</td><td><code>String</code></td><td>null</td></tr><tr><td>flex-wrap</td><td>The flex-wrap value</td><td><code>String</code></td><td>null</td></tr></table>

**File source:** <a href="/src/pipe-list.scss">src/pipe-list.scss</a>

<br>




#### position <a id="mixin-position">&nbsp;</a>
Set position top, right, bottom, left, position, width, height and z-index values

```scss
@include position($top, $right, $bottom, $left, $position, $width, $height, $z-index)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>top</td><td>Top property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>right</td><td>Right property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>bottom</td><td>Bottom property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>left</td><td>Left property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>position</td><td>Position value</td><td><code>String</code></td><td>static</td></tr><tr><td>width</td><td>Width value</td><td><code>String</code></td><td>static</td></tr><tr><td>height</td><td>Height value</td><td><code>String</code></td><td>static</td></tr><tr><td>z-index</td><td>Z-index value</td><td><code>String</code></td><td>static</td></tr></table>

**File source:** <a href="/src/position.scss">src/position.scss</a>

<br>




#### pseudo-with-position <a id="mixin-pseudo-with-position">&nbsp;</a>
Add a pseduo element with position

```scss
@include pseudo-with-position($top, $right, $bottom, $left, $position, $width, $height, $z-index, $content, $display, $selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>top</td><td>Top property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>right</td><td>Right property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>bottom</td><td>Bottom property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>left</td><td>Left property</td><td><code>Number</code></td><td>auto</td></tr><tr><td>position</td><td>Position value</td><td><code>String</code></td><td>static</td></tr><tr><td>width</td><td>Width value</td><td><code>String</code></td><td>static</td></tr><tr><td>height</td><td>Height value</td><td><code>String</code></td><td>static</td></tr><tr><td>z-index</td><td>Z-index value</td><td><code>String</code></td><td>static</td></tr><tr><td>content</td><td>The content value</td><td><code>String</code></td><td>""</td></tr><tr><td>display</td><td>The display value</td><td><code>String</code></td><td>block</td></tr><tr><td>selector</td><td>The selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/pseudo.scss">pseudo</a>, <a href="/src/position.scss">position</a>

**File source:** <a href="/src/pseudo-with-position.scss">src/pseudo-with-position.scss</a>

<br>




#### pseudo <a id="mixin-pseudo">&nbsp;</a>
Add a pseduo element

```scss
@include pseudo($content, $display, $selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>content</td><td>The content value</td><td><code>String</code></td><td>""</td></tr><tr><td>display</td><td>The display value</td><td><code>String</code></td><td>block</td></tr><tr><td>selector</td><td>The selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**File source:** <a href="/src/pseudo.scss">src/pseudo.scss</a>

<br>




#### replace-context <a id="mixin-replace-context">&nbsp;</a>
Replace part of the current selector

```scss
@include replace-context($from, $to, $select-after)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>from</td><td>Selector part to be changed</td><td><code>String</code></td><td>-</td></tr><tr><td>to</td><td>Replacement of the selector part</td><td><code>String</code></td><td>-</td></tr><tr><td>select-after</td><td>Append additional selectors</td><td><code>String</code></td><td>null</td></tr></table>

**File source:** <a href="/src/replace-context.scss">src/replace-context.scss</a>

<br>




#### reset <a id="mixin-reset">&nbsp;</a>
Reset styles

```scss
@include reset
```
**Type:** mixin

**File source:** <a href="/src/reset.scss">src/reset.scss</a>

<br>




#### scrollbar <a id="mixin-scrollbar">&nbsp;</a>
Style scrollbars

```scss
@include scrollbar($width, $track-color, $thumb-color, $thumb-hover-color, $scrollbar-width)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>width</td><td>The width of the scrollbar (webkit only)</td><td><code>Number</code></td><td>-</td></tr><tr><td>track-color</td><td>Color of the scrollbar track</td><td><code>Color</code></td><td>-</td></tr><tr><td>thumb-color</td><td>Color of the scrollbar handle</td><td><code>Color</code></td><td>-</td></tr><tr><td>thumb-hover-color</td><td>Color of the scrollbar handle when hovered</td><td><code>Color</code></td><td>-</td></tr><tr><td>scrollbar-width</td><td>The width of the scrollbar (moz)</td><td><code>Color</code></td><td>thin</td></tr></table>

**File source:** <a href="/src/scrollbar.scss">src/scrollbar.scss</a>

<br>




#### search-icon <a id="mixin-search-icon">&nbsp;</a>
Generate a search icon from a single element

```scss
@include search-icon($color, $border-radius, $size, $thickness, $transition-duration)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color of the menu lines</td><td><code>Color</code></td><td>currentColor</td></tr><tr><td>border-radius</td><td>Menu line border radius</td><td><code>Number</code></td><td>0</td></tr><tr><td>size</td><td>Size of the icon altogether</td><td><code>Number</code></td><td>1em</td></tr><tr><td>thickness</td><td>Thickness of an individual icon line</td><td><code>Number</code></td><td>0.125em</td></tr><tr><td>transition-duration</td><td>Transition speed for animations</td><td><code>Number</code></td><td>0.3s</td></tr></table>

**File source:** <a href="/src/search-icon.scss">src/search-icon.scss</a>

<br>




#### search-icon-close <a id="mixin-search-icon-close">&nbsp;</a>
Morph search icon to a close (x) icon

```scss
@include search-icon-close($color)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Overwrite icon line color (use auto to keep existing color)</td><td><code>Color</code></td><td>auto</td></tr></table>

**File source:** <a href="/src/search-icon.scss">src/search-icon.scss</a>

<br>




#### select <a id="mixin-select">&nbsp;</a>
Select common element groups via shorthands

```scss
@include select($key)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>key</td><td>Selector group key</td><td><code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/select.scss">select</a>

**File source:** <a href="/src/select.scss">src/select.scss</a>

<br>




#### triangle <a id="mixin-triangle">&nbsp;</a>
CSS-only triangle

```scss
@include triangle($direction, $color, $size, $selector)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>direction</td><td>The triangle pointing direction</td><td><code>String</code></td><td>right</td></tr><tr><td>color</td><td>The triangle color</td><td><code>Color</code></td><td>#000</td></tr><tr><td>size</td><td>The width and height or size of the triangle</td><td><code>Number</code> <code>List</code></td><td>0.5rem 0.75rem</td></tr><tr><td>selector</td><td>The triangle selector</td><td><code>String</code> <code>List</code></td><td>"&::after"</td></tr></table>

**File source:** <a href="/src/triangle.scss">src/triangle.scss</a>

<br>




#### truncate <a id="mixin-truncate">&nbsp;</a>
Truncate text in a container

```scss
@include truncate($width)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>width</td><td>The max-width of the container</td><td><code>Number</code></td><td>100%</td></tr></table>

**File source:** <a href="/src/truncate.scss">src/truncate.scss</a>

<br>




#### unhide-visually <a id="mixin-unhide-visually">&nbsp;</a>
Unhide a previously visually hidden element

```scss
@include unhide-visually($position, $overflow, $visibility, $opacity, $left)
```
**Type:** mixin

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>position</td><td>Position value</td><td><code>String</code></td><td>static</td></tr><tr><td>overflow</td><td>Overflow value</td><td><code>String</code></td><td>visible</td></tr><tr><td>visibility</td><td>Visibility value</td><td><code>String</code></td><td>visible</td></tr><tr><td>opacity</td><td>Opacity value</td><td><code>Number</code></td><td>1</td></tr><tr><td>left</td><td>Left property</td><td><code>Number</code></td><td>auto</td></tr></table>

**File source:** <a href="/src/unhide-visually.scss">src/unhide-visually.scss</a>

<br>




#### unstyled-list <a id="mixin-unstyled-list">&nbsp;</a>
Remove list styles

```scss
@include unstyled-list
```
**Type:** mixin

**File source:** <a href="/src/unstyled-list.scss">src/unstyled-list.scss</a>

<br>

### Functions


#### asset <a id="function-asset">&nbsp;</a>
Get an asset url prepended by a default base path

```scss
asset($file)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>file</td><td>The file url relative to the base</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/asset.scss">asset-path</a>

**File source:** <a href="/src/asset.scss">src/asset.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function asset($file) {
    @return url($asset-path + $file);
}
```

</details>

<br>




#### best-contrast <a id="function-best-contrast">&nbsp;</a>
Get the best contrasting color from a list of colors compared to a base

```scss
best-contrast($base, $colors, $tolerance)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>base</td><td>Base color</td><td><code>Color</code></td><td>-</td></tr><tr><td>colors</td><td>Contrasting candidates (default: #fff #000)</td><td><code>Color</code> <code>List</code></td><td>#fff, #000</td></tr><tr><td>tolerance</td><td>Tolerance of checks</td><td><code>Number</code></td><td>0</td></tr></table>

**Requires:** <a href="/src/contrast-between.scss">contrast-between</a>

**File source:** <a href="/src/best-contrast.scss">src/best-contrast.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function best-contrast($base, $colors, $tolerance) {
    $best: list.nth($colors, 1);
    $contrast: contrast-between($base, $best);
    @for $i from 2 through list.length($colors) {
        $current: list.nth($colors, $i);
        $current-contrast: contrast-between($base, $current);
        @if $current-contrast - $contrast > $tolerance {
            $best: $current;
            $contrast: $current-contrast;
        }
    }
    @return $best;
}
```

</details>

<br>




#### blacken <a id="function-blacken">&nbsp;</a>
Mix a color with black

```scss
blacken($color, $ratio)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr><tr><td>ratio</td><td>Ratio</td><td><code>Number</code></td><td>50%</td></tr></table>

**File source:** <a href="/src/blacken.scss">src/blacken.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function blacken($color, $ratio) {
    @return color.mix(#000, $color, $ratio);
}
```

</details>

<br>




#### calc-add <a id="function-calc-add">&nbsp;</a>
Add 2 numbers or return calc if they are incompatible

```scss
calc-add($left, $right, $ensure-unit)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>left</td><td>Number on the left of the operation</td><td><code>Number</code></td><td>-</td></tr><tr><td>right</td><td>Number on the right of the operation</td><td><code>Number</code></td><td>-</td></tr><tr><td>ensure-unit</td><td>Try to convert numbers so that they are compatible</td><td><code>Number</code></td><td>false</td></tr></table>

**Requires:** <a href="/src/ensure-unit.scss">ensure-unit</a>

**File source:** <a href="/src/calc-add.scss">src/calc-add.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function calc-add($left, $right, $ensure-unit) {
    @if math.is-unitless($left) and math.is-unitless($right) == false {
        $left: ensure-unit($left, math.unit($right));
    }
    @if math.is-unitless($right) and math.is-unitless($left) == false {
        $right: ensure-unit($right, math.unit($left));
    }
    @if math.compatible($left, $right) {
        @return if(
            $ensure-unit,
            ensure-unit($left, $ensure-unit) + ensure-unit($right, $ensure-unit),
            $left + $right
        );
    }
    @if $ensure-unit and
        list.index(px em rem, math.unit($left)) and
        list.index(px em rem, math.unit($right))
    {
        $left: ensure-unit($left, $ensure-unit);
        $right: ensure-unit($right, $ensure-unit);
        @return $left + $right;
    }
    @return calc(#{$left} + #{$right});
}
```

</details>

<br>




#### calc-substract <a id="function-calc-substract">&nbsp;</a>
Substract 2 numbers or return calc if they are incompatible

```scss
calc-substract($left, $right, $ensure-unit)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>left</td><td>Number on the left of the operation</td><td><code>Number</code></td><td>-</td></tr><tr><td>right</td><td>Number on the right of the operation</td><td><code>Number</code></td><td>-</td></tr><tr><td>ensure-unit</td><td>Try to convert numbers so that they are compatible</td><td><code>Number</code></td><td>false</td></tr></table>

**Requires:** <a href="/src/ensure-unit.scss">ensure-unit</a>

**File source:** <a href="/src/calc-substract.scss">src/calc-substract.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function calc-substract($left, $right, $ensure-unit) {
    @if math.is-unitless($left) and math.is-unitless($right) == false {
        $left: ensure-unit($left, math.unit($right));
    }
    @if math.is-unitless($right) and math.is-unitless($left) == false {
        $right: ensure-unit($right, math.unit($left));
    }
    @if math.compatible($left, $right) {
        @return if(
            $ensure-unit,
            ensure-unit($left, $ensure-unit) - ensure-unit($right, $ensure-unit),
            $left - $right
        );
    }
    @if $ensure-unit and
        list.index(px em rem, math.unit($left)) and
        list.index(px em rem, math.unit($right))
    {
        $left: ensure-unit($left, $ensure-unit);
        $right: ensure-unit($right, $ensure-unit);
        @return $left - $right;
    }
    @return calc(#{$left} - #{$right});
}
```

</details>

<br>




#### cmyk <a id="function-cmyk">&nbsp;</a>
Get CMYK values from a color

```scss
cmyk($color)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>base color</td><td><code>Color</code></td><td>-</td></tr></table>

**File source:** <a href="/src/cmyk.scss">src/cmyk.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function cmyk($color) {
    $black: 1 - math.div(math.max(color.red($color), color.green($color), color.blue($color)), 255);
    $cyan: if($black < 1, 1 - math.div(math.div(color.red($color), 255), (1 - $black)), 0);
    $magenta: if($black < 1, 1 - math.div(math.div(color.green($color), 255), (1 - $black)), 0);
    $yellow: if($black < 1, 1 - math.div(math.div(color.blue($color), 255), (1 - $black)), 0);

    @return (
        c: $cyan,
        cyan: $cyan,
        m: $magenta,
        magenta: $magenta,
        y: $yellow,
        yellow: $yellow,
        k: $black,
        black: $black
    );
}
```

</details>

<br>




#### color-from <a id="function-color-from">&nbsp;</a>
Get the color value from a list like border or background

```scss
color-from($value)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Color</code> <code>List</code></td><td>-</td></tr></table>

**File source:** <a href="/src/color-from.scss">src/color-from.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function color-from($value) {
    @if meta.type-of($value) == color {
        @return $value;
    }
    @each $v in $value {
        @if meta.type-of($v) == color {
            @return $v;
        }
    }
    @return null;
}
```

</details>

<br>




#### color <a id="function-color">&nbsp;</a>
Return and manipulate color from a palette

```scss
color($args)
```
**Example:**
```scss
$color: color(red);                          /* #dc2626 */
$color: color(red 500);                      /* #ef4444 */
$color: color(red contrast);                 /* white - best contrasting with #dc2626 out of black or white */
$primary: ( default: red, 800: darkred );
$color: color($primary);                     /* red */
$color: color($primary 800);                 /* darkred */
```

**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>args</td><td>Color or palette key, and optionally Shade level, and optionally "contrast" "triad" "triad-2" "tetrad" "tetrad-2" or "tetrad-3" for manipulation</td><td><code>List</code> <code>Color</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/triad.scss">triad</a>, <a href="/src/tetrad.scss">tetrad</a>, <a href="/src/best-contrast.scss">best-contrast</a>, <a href="/src/color.scss">c</a>, <a href="/src/color.scss">color-palette</a>

**File source:** <a href="/src/color.scss">src/color.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function color($args) {
    $color: null;
    $color-map: null;
    $level: null;
    $contrast: null;
    $triad: null;
    $tetrad: null;
    $raw: false;
    $black-and-white: null;
    @if meta.type-of($options) != list {
        $options: ($options,);
    }
    @each $option in $options {
        @if meta.type-of($option) == color {
            $color: $option;
        }
        @if map.has-key($color-palette, $option) {
            $color-map: map.get($color-palette, $option);
            @if meta.type-of($color-map) == color {
                $color: $color-map;
                $color-map: null;
            }
        }
        @if meta.type-of($option) == number {
            $level: $option;
        }
        @if meta.type-of($option) == map {
            $color-map: $option;
        }
        @if $option == contrast {
            $contrast: true;
        }
        @if $option == triad {
            $triad: 1;
        }
        @if $option == triad-2 {
            $triad: 2;
        }
        @if $option == tetrad {
            $tetrad: 1;
        }
        @if $option == tetrad-2 {
            $tetrad: 2;
        }
        @if $option == tetrad-3 {
            $tetrad: 3;
        }
        @if $option == raw {
            $raw: true;
        }
        @if meta.type-of($option) == list and list.length($option) == 2 {
            $black-and-white: $option;
        }
    }
    @if $color-map and $raw {
        @return $color-map;
    }
    @if $color-map and $level and map.has-key($color-map, $level) {
        $color: map.get($color-map, $level);
        $color-map: null;
        $level: null;
    }
    @if $color-map and map.has-key($color-map, default) {
        $color: map.get($color-map, default);
        $color-map: null;
    }
    @if $color-map {
        $key: if(map.has-key($color-map, 500), 500, list.nth(map.keys($color-map), 1));
        $color: map.get($color-map, $key);
        $color-map: null;
    }
    @if meta.type-of($color) != color {
        @return $color;
    }
    @if $level {
        $level: if($level > 1, math.div($level, 1000), $level);
        $color: color.change($color, $lightness: (1% - $level) * 100);
    }
    @if $triad {
        $color: triad($color, $triad);
    }
    @if $tetrad {
        $color: tetrad($color, $tetrad);
    }
    @if $contrast {
        $color: best-contrast($color, if($black-and-white, $black-and-white, c(black) c(white)));
    }
    @return $color;
}
```

</details>

<br>




#### c <a id="function-c">&nbsp;</a>
Return and manipulate color from a palette


```scss
c($args)
```
**Type:** function

**Alias of:** color

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>args</td><td>Color or palette key, and optionally Shade level, and optionally "contrast" "triad" "triad 2" "tetrad" "tetrad 2" or "tetrad 3" for manipulation</td><td><code>List</code> <code>Color</code> <code>String</code> <code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/color.scss">color</a>

**File source:** <a href="/src/color.scss">src/color.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function c($args) {
    @return color($options);
}
```

</details>

<br>




#### contrast-balance <a id="function-contrast-balance">&nbsp;</a>
Change 2 colors contrast ratio by weighted balance(0-100)
0 means only second color is changed, while 100 means only the first one

```scss
contrast-balance($color1, $color2, $ratio, $balance)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color1</td><td>Color 1</td><td><code>Color</code></td><td>-</td></tr><tr><td>color2</td><td>Color 2</td><td><code>Color</code></td><td>-</td></tr><tr><td>ratio</td><td>Name or value of contrast ratio</td><td><code>Number</code> <code>String</code></td><td>"AA"</td></tr><tr><td>balance</td><td>Balance</td><td><code>Number</code></td><td>50%</td></tr></table>

**Requires:** <a href="/src/contrast-with.scss">contrast-with</a>, <a href="/src/is-contrasting.scss">is-contrasting</a>, <a href="/src/is-between.scss">is-between</a>, <a href="/src/luminance.scss">luminance</a>

**File source:** <a href="/src/contrast-balance.scss">src/contrast-balance.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function contrast-balance($color1, $color2, $ratio, $balance) {
    $fixed1: contrast-with($color1, $color2, $ratio);
    $fixed2: contrast-with($color2, $color1, $ratio);
    $color1: color.mix($fixed1, $color1, $balance);
    $color2: color.mix($fixed2, $color2, $balance);
    @if not is-contrasting($color1, $color2, $ratio) {
        @if not is-between(luminance($fixed2), 0.00002, 0.99936) {
            $color1: contrast-with($color1, $color2, $ratio);
        }
        @if not is-between(luminance($fixed1), 0.00002, 0.99936) {
            $color2: contrast-with($color2, $color1, $ratio);
        }
    }
    @return $color1, $color2;
}
```

</details>

<br>




#### contrast-between <a id="function-contrast-between">&nbsp;</a>
Get the contrast between 2 colors

```scss
contrast-between($color1, $color2)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color1</td><td>Color 1</td><td><code>Color</code></td><td>-</td></tr><tr><td>color2</td><td>Color 2</td><td><code>Color</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/luminance.scss">luminance</a>

**File source:** <a href="/src/contrast-between.scss">src/contrast-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function contrast-between($color1, $color2) {
    $lum1: luminance($color1);
    $lum2: luminance($color2);
    @return math.div((math.max($lum1, $lum2) + 0.05), (math.min($lum1, $lum2)) + 0.05);
}
```

</details>

<br>




#### contrast-ratio-by-name <a id="function-contrast-ratio-by-name">&nbsp;</a>
Get a contrast ratio by its official codename

```scss
contrast-ratio-by-name($ratio)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>ratio</td><td>Ratio</td><td><code>String</code></td><td>-</td></tr></table>

**File source:** <a href="/src/contrast-ratio-by-name.scss">src/contrast-ratio-by-name.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function contrast-ratio-by-name($ratio) {
    @if $ratio == "AA" or $ratio == "AAALG" {
        @return 4.5;
    } @else if $ratio == "AALG" {
        @return 3;
    } @else if $ratio == "AAA" {
        @return 7;
    }
    @return $ratio;
}
```

</details>

<br>




#### contrast-with <a id="function-contrast-with">&nbsp;</a>
Adjust color towards a target color until it reaches a contrast ratio

```scss
contrast-with($color, $target, $ratio, $iterations)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr><tr><td>target</td><td>Target color</td><td><code>Color</code></td><td>#fff</td></tr><tr><td>ratio</td><td>Contrast ratio</td><td><code>String</code> <code>Number</code></td><td>"AA"</td></tr><tr><td>iterations</td><td>Iteration count for checking</td><td><code>Number</code></td><td>5</td></tr></table>

**Requires:** <a href="/src/contrast-ratio-by-name.scss">contrast-ratio-by-name</a>, <a href="/src/is-contrasting.scss">is-contrasting</a>, <a href="/src/luminance.scss">luminance</a>, <a href="/src/scale-luminance.scss">scale-luminance</a>, <a href="/src/scale-light.scss">scale-light</a>

**File source:** <a href="/src/contrast-with.scss">src/contrast-with.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function contrast-with($color, $target, $ratio, $iterations) {
    $ratio: contrast-ratio-by-name($ratio);
    @if is-contrasting($color, $target, $ratio) == false {
        $luminance: math.clamp(luminance($color), 0, 1);
        $target-luminance: math.clamp(luminance($target), 0, 1);
        $operation: "";
        @if $luminance == $target-luminance {
            @if $luminance > 0.5 {
                $color: color.darken($color, 1%);
                $luminance: luminance($color);
            } @else {
                $color: color.adjust($color, $lightness: 1%);
                $luminance: luminance($color);
            }
        }
        @if math.max($luminance, $target-luminance) == $luminance {
            $target-luminance: (($target-luminance + 0.05) * $ratio - 0.05);
            $operation: lighten;
        } @else {
            $target-luminance: math.div(($target-luminance + 0.05), $ratio) - 0.05;
            $operation: darken;
        }
        @if $target-luminance >= 1 {
            @return #fff;
        } @else if $target-luminance <= 0 {
            @return #000;
        } @else {
            $color: scale-luminance($color, $target-luminance);
            $color: scale-light(
                $color,
                $target,
                $ratio,
                $operation,
                $iterations
            );
        }
    }
    @return $color;
}
```

</details>

<br>




#### decimal-round <a id="function-decimal-round">&nbsp;</a>
Round a number to specified digits

```scss
decimal-round($number, $digits, $mode)
```
**Example:**
```scss
$result: decimal-round(0.333);    /* 0 */
$result: decimal-round(0.333, 1); /* 0.3 */
$result: decimal-round(0.333, 2); /* 0.33 */
$result: decimal-round(0.666);    /* 1 */
$result: decimal-round(0.666, 1); /* 0.7 */
$result: decimal-round(0.666, 2); /* 0.67 */
```

**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>number</td><td>The base number</td><td><code>Number</code></td><td>-</td></tr><tr><td>digits</td><td>Digits to output</td><td><code>Number</code></td><td>0</td></tr><tr><td>mode</td><td>How to round the number</td><td><code>String</code></td><td>round</td></tr></table>

**File source:** <a href="/src/decimal-round.scss">src/decimal-round.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function decimal-round($number, $digits, $mode) {
    $n: 1;
    @if meta.type-of($number) != number {
        @return $number;
    }
    @if $digits > 0 {
        @for $i from 1 through $digits {
            $n: $n * 10;
        }
    }
    @if $mode == round {
        @return math.div(math.round($number * $n), $n);
    } @else if $mode == ceil {
        @return math.div(math.ceil($number * $n), $n);
    } @else if $mode == floor {
        @return math.div(math.floor($number * $n), $n);
    }
    @return $number;
}
```

</details>

<br>




#### elevation <a id="function-elevation">&nbsp;</a>
Return box shadow based on elevation settings

```scss
elevation($level, $color)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>level</td><td>Level of elevation</td><td><code>Number</code></td><td>1</td></tr><tr><td>color</td><td>Shadow color</td><td><code>Color</code></td><td>rgba(0, 0, 0, 0.1)</td></tr></table>

**File source:** <a href="/src/elevation.scss">src/elevation.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function elevation($level, $color) {
	@return 0 #{$level}px #{2 * $level + 1}px #{if($level > 1, #{$level - 1}px, null)} #{$color};
}
```

</details>

<br>




#### em2px <a id="function-em2px">&nbsp;</a>
Em to Px conversion

```scss
em2px($em, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>em</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/strip-unit.scss">strip-unit</a>, <a href="/src/str-to-num.scss">str-to-num</a>

**File source:** <a href="/src/em2px.scss">src/em2px.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function em2px($em, $default) {
    $default: if(
        $default,
        $default,
        if(meta.global-variable-exists("font-size"), $font-size, 16px)
    );
    @if $default and math.unit($default) == px {
        @return strip-unit($em) * $default;
    }
    @return str-to-num($em);
}
```

</details>

<br>




#### em2rem <a id="function-em2rem">&nbsp;</a>
Change em to rem (units only, no calculations)

```scss
em2rem($em)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>em</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-to-num.scss">str-to-num</a>, <a href="/src/strip-unit.scss">strip-unit</a>

**File source:** <a href="/src/em2rem.scss">src/em2rem.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function em2rem($em) {
    @return str-to-num(string.unquote(strip-unit($em) + "rem"));
}
```

</details>

<br>




#### emval <a id="function-emval">&nbsp;</a>
Get value of a number in ems

```scss
emval($value, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>Size value in px, em or rem</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/rem2em.scss">rem2em</a>, <a href="/src/px2em.scss">px2em</a>

**File source:** <a href="/src/emval.scss">src/emval.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function emval($value, $default) {
    @if math.unit($value) == "em" {
        @return $value;
    }
    @if math.unit($value) == "rem" {
        @return rem2em($value);
    }
    @if math.unit($value) == "px" {
        @return px2em($value, $default);
    }
    @return 0;
}
```

</details>

<br>




#### ensure-unit <a id="function-ensure-unit">&nbsp;</a>
Convert a number to another unit

```scss
ensure-unit($num, $unit, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>num</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr><tr><td>unit</td><td>The required unit</td><td><code>String</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/rem2px.scss">rem2px</a>, <a href="/src/em2rem.scss">em2rem</a>, <a href="/src/rem2em.scss">rem2em</a>, <a href="/src/px2em.scss">px2em</a>, <a href="/src/px2rem.scss">px2rem</a>, <a href="/src/num-to-length.scss">num-to-length</a>, <a href="/src/strip-unit.scss">strip-unit</a>

**File source:** <a href="/src/ensure-unit.scss">src/ensure-unit.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function ensure-unit($num, $unit, $default) {
    $num-unit: math.unit($num);
    @if $num-unit == $unit {
        @return $num;
    }
    $default: if(
        $default,
        $default,
        if(meta.global-variable-exists("font-size"), $font-size, 16px)
    );
    @if $num-unit == em and $unit == px {
        @return rem2px($num, $default);
    }
    @if $num-unit == em and $unit == rem {
        @return em2rem($num);
    }
    @if $num-unit == rem and $unit == em {
        @return rem2em($num);
    }
    @if $num-unit == rem and $unit == px {
        @return rem2px($num, $default);
    }
    @if $num-unit == px and $unit == em {
        @return px2em($num, $default);
    }
    @if $num-unit == px and $unit == rem {
        @return px2rem($num, $default);
    }
    @return num-to-length(strip-unit($num), $unit);
}
```

</details>

<br>




#### escape-classname <a id="function-escape-classname">&nbsp;</a>
Escape string to work as a classname

```scss
escape-classname($classname)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>classname</td><td>The classname to escape</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-replace.scss">str-replace</a>

**File source:** <a href="/src/escape-classname.scss">src/escape-classname.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function escape-classname($classname) {
    $starts-with-dot: false;
    @if string.index($classname, ".") == 1 {
        $starts-with-dot: true;
        $classname: string.slice($classname, 2);
    }
    $classname: str-replace($classname, ".", "\\.");
    $classname: str-replace($classname, ":", "\\:");
    $classname: str-replace($classname, "/", "\\/");
    $classname: str-replace($classname, " ", "-");
    @if $starts-with-dot {
        $classname: "." + $classname;
    }
    @return $classname;
}
```

</details>

<br>




#### fallback <a id="function-fallback">&nbsp;</a>
Fallback for possibly null values

```scss
fallback($values...)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>values...</td><td>Values</td><td><code>List</code></td><td>-</td></tr></table>

**File source:** <a href="/src/fallback.scss">src/fallback.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function fallback($values...) {
    $value: null;
    @each $v in $values {
        @if $v {
            @return $v;
        }
    }
    @return $value;
}
```

</details>

<br>




#### fluid-size <a id="function-fluid-size">&nbsp;</a>
Fluid size depending on viewport with minimum and maximum values

```scss
fluid-size($min-size, $min-viewport, $max-size, $max-viewport, $clamp, $multiplier, $default-font-size, $viewport-unit)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>min-size</td><td>Minimum size</td><td><code>Number</code></td><td>-</td></tr><tr><td>min-viewport</td><td>Minimum viewport size</td><td><code>Number</code></td><td>-</td></tr><tr><td>max-size</td><td>Maximum size</td><td><code>Number</code></td><td>-</td></tr><tr><td>max-viewport</td><td>Maximum viewport size</td><td><code>Number</code></td><td>-</td></tr><tr><td>clamp</td><td>Whether to use clamping or just return the fluid calculation</td><td><code>Boolean</code></td><td>true</td></tr><tr><td>multiplier</td><td>An optional multiplier to apply to the fluid calculation, can be a unitless number or a css variable</td><td><code>Boolean</code></td><td>null</td></tr><tr><td>default-font-size</td><td>The default root font-size</td><td><code>Number</code></td><td>null</td></tr><tr><td>viewport-unit</td><td>The viewport width or height unit to base the calculation on</td><td><code>Number</code></td><td>100vw</td></tr></table>

**Requires:** <a href="/src/strip-unit.scss">strip-unit</a>

**File source:** <a href="/src/fluid-size.scss">src/fluid-size.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function fluid-size($min-size, $min-viewport, $max-size, $max-viewport, $clamp, $multiplier, $default-font-size, $viewport-unit) {
    $multiplier-mode: if($multiplier, if(meta.type-of($multiplier) == number and math.is-unitless($multiplier), 'number', 'var'), false);
    $units: if($units == px, pxval, if($units == em, emval, if($units == rem, remval, null)));
    $size-fn: meta.get-function(if($units, $units, if(math.unit($max-size) == px, pxval, if(math.unit($max-size) == em and $multiplier-mode != 'var', emval, remval))));
    $viewport-fn: meta.get-function(if($units, $units, if(math.unit($max-viewport) == px, pxval, remval)));
    $min-size: meta.call($size-fn, $min-size, $default-font-size);
    $max-size: meta.call($size-fn, $max-size, $default-font-size);
    $min-viewport: meta.call($viewport-fn, $min-viewport, $default-font-size);
    $max-viewport: meta.call($viewport-fn, $max-viewport, $default-font-size);
    $min-size-viewport: meta.call($viewport-fn, $min-size, $default-font-size);
    $max-size-viewport: meta.call($viewport-fn, $max-size, $default-font-size);
    $calc: "#{$min-size} + #{strip-unit($max-size-viewport - $min-size-viewport)} * (#{$viewport-unit} - #{$min-viewport}) / #{strip-unit($max-viewport - $min-viewport)}";
    @if $multiplier {
        $min-size: if($multiplier-mode == 'number', $multiplier * $min-size, "calc(#{$multiplier} * #{$min-size})");
        $max-size: if($multiplier-mode == 'number', $multiplier * $max-size, "calc(#{$multiplier} * #{$max-size})");
        $calc: "#{$multiplier} * (#{$calc})";
    }
    @return string.unquote(if($clamp, "clamp(#{$min-size}, calc(#{$calc}), #{$max-size})", "calc(#{$calc})"));
}
```

</details>

<br>




#### get <a id="function-get">&nbsp;</a>
Deeply get a value from a map

```scss
get($map, $keys, $fallback)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>map</td><td>The map</td><td><code>Map</code></td><td>-</td></tr><tr><td>keys</td><td>The key or list of keys (if lookup is supposed to go deeper)</td><td><code>List</code> <code>String</code></td><td>-</td></tr><tr><td>fallback</td><td>A fallback value if the key is not found</td><td><code>*</code></td><td>null</td></tr></table>

**File source:** <a href="/src/get.scss">src/get.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function get($map, $keys, $fallback) {
    @each $key in $keys {
        @if meta.type-of($map) != map or ( not map.has-key($map, $key) and not map.has-key($map, "#{$key}") ) {
            @return $fallback;
        } @else {
            $map: if(map.get($map, $key), map.get($map, $key), map.get($map, "#{$key}"));
        }
    }
    @return $map;
}
```

</details>

<br>




#### grid-column-width <a id="function-grid-column-width">&nbsp;</a>
Calculate the coluns width from a columns ratio and a gap value

```scss
grid-column-width($columns, $gap)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>columns</td><td>The columns ratio (x of y)</td><td><code>List</code> <code>String</code></td><td>1 of 2</td></tr><tr><td>gap</td><td>The gap value</td><td><code>Number</code></td><td>0</td></tr></table>

**File source:** <a href="/src/grid-column-width.scss">src/grid-column-width.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function grid-column-width($columns, $gap) {
    $col: list.nth($columns, 1);
    $of: list.nth($columns, 3);
    $width: auto;
    @if $col == $of {
        @return 100%;
    }
    $colof: math.div(math.round(math.div($col, $of) * 10000), 10000);
    @if math.unit($gap) == "%" or math.unit($gap) == "" {
        $width: 99.99% * $colof - ($gap - $gap * math.div($col, $of));
    } @else {
        $width: calc(#{99.99% * $colof} - #{$gap - $gap * $colof});
    }
    @return $width;
}
```

</details>

<br>




#### is-between <a id="function-is-between">&nbsp;</a>
Check if a number is between a min and max value

```scss
is-between($value, $min, $max)
```
**Example:**
```scss
$result: is-between(1);         /* false */
$result: is-between(-1);        /* false */
$result: is-between(7, 3, 5);   /* false */
$result: is-between(15, 0, 10); /* false */
$result: is-between(6, 0, 10);  /* true */
```

**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The value to constrain</td><td><code>Number</code></td><td>-</td></tr><tr><td>min</td><td>The minimum value</td><td><code>Number</code></td><td>0.0001</td></tr><tr><td>max</td><td>The maximum value</td><td><code>Number</code></td><td>0.9999</td></tr></table>

**File source:** <a href="/src/is-between.scss">src/is-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function is-between($value, $min, $max) {
    @return if($value >= $min and $value <= $max, true, false);
}
```

</details>

<br>




#### is-contrasting <a id="function-is-contrasting">&nbsp;</a>
Check if 2 colors contrast enough

```scss
is-contrasting($color1, $color2, $ratio)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color1</td><td>Color 1</td><td><code>Color</code></td><td>-</td></tr><tr><td>color2</td><td>Color 2</td><td><code>Color</code></td><td>-</td></tr><tr><td>ratio</td><td>Ratio codename</td><td><code>String</code></td><td>"AA"</td></tr></table>

**Requires:** <a href="/src/contrast-ratio-by-name.scss">contrast-ratio-by-name</a>, <a href="/src/contrast-between.scss">contrast-between</a>

**File source:** <a href="/src/is-contrasting.scss">src/is-contrasting.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function is-contrasting($color1, $color2, $ratio) {
    $ratio: contrast-ratio-by-name($ratio);
    @return if(contrast-between($color1, $color2) >= $ratio, true, false);
}
```

</details>

<br>




#### is-property <a id="function-is-property">&nbsp;</a>
Check whether a property is valid in CSS3

```scss
is-property($property)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>property</td><td>The property</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/is-property.scss">_properties</a>

**File source:** <a href="/src/is-property.scss">src/is-property.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function is-property($property) {
    @if meta.type-of($property) != string {
        @return false;
    }
    @if list.index($_properties, $property) {
        @return true;
    }
    @if string.index($property, "--") == 1 or string.index($property, "-webkit-") == 1 or string.index($property, "-moz-") == 1 or string.index($property, "-ms-") == 1 or string.index($property, "-o-") == 1 {
        @return true;
    }
    @return false;
}
```

</details>

<br>




#### is-pseudo <a id="function-is-pseudo">&nbsp;</a>
Check whether a pseudo class is valid in CSS3

```scss
is-pseudo($pseudo, $string)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>pseudo</td><td>The state</td><td><code>String</code></td><td>-</td></tr><tr><td>string</td><td>Whether to check it strictly</td><td><code>Boolean</code></td><td>false</td></tr></table>

**Requires:** <a href="/src/is-pseudo.scss">_pseudo</a>, <a href="/src/is-pseudo.scss">_pseudo-parameters</a>

**File source:** <a href="/src/is-pseudo.scss">src/is-pseudo.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function is-pseudo($pseudo, $string) {
    @if $strict and string.index($pseudo, ":") != 1 {
        @return false;
    }
    $pseudo: if(string.index($pseudo, ":") == 1, string.slice($pseudo, 2), $pseudo);
    $pseudo: if(string.index($pseudo, ":") == 1, string.slice($pseudo, 2), $pseudo);
    @if list.index($_pseudo, $pseudo) {
        @return true;
    }
    @each $p in $_pseudo-parameters {
        @if string.index($pseudo, $p) == 1 {
            @return true;
        }
    }
    @return false;
}
```

</details>

<br>




#### keyframes-name <a id="function-keyframes-name">&nbsp;</a>
Get a unique name for a keyframe animation with optional config

```scss
keyframes-name($name, $config)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>name</td><td>The animation name</td><td><code>String</code></td><td>-</td></tr><tr><td>config</td><td>Configuration</td><td><code>Mixed</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/unique-id-by-value.scss">unique-id-by-value</a>

**File source:** <a href="/src/keyframes-name.scss">src/keyframes-name.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function keyframes-name($name, $config) {
    @if not $config {
        @return $name;
    }
    @return "#{$name}-#{unique-id-by-value($name, $config)}";
}
```

</details>

<br>




#### long-shadow <a id="function-long-shadow">&nbsp;</a>
Return Long shadow

```scss
long-shadow($color, $length)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>The color of the shadow</td><td><code>Color</code></td><td>-</td></tr><tr><td>length</td><td>The color of the shadow</td><td><code>Color</code></td><td>200</td></tr></table>

**File source:** <a href="/src/long-shadow.scss">src/long-shadow.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function long-shadow($color, $length) {
    $val: 0 0 $color;

    @for $i from 1 through $length {
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}
```

</details>

<br>




#### luminance <a id="function-luminance">&nbsp;</a>
Returns XYZ value to RGB channel

```scss
luminance($color)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/xyz.scss">xyz</a>

**File source:** <a href="/src/luminance.scss">src/luminance.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function luminance($color) {
    $red: xyz(color.red($color));
    $green: xyz(color.green($color));
    $blue: xyz(color.blue($color));
    @return $red * 0.2126 + $green * 0.7152 + $blue * 0.0722;
}
```

</details>

<br>




#### media <a id="function-media">&nbsp;</a>
Get generated media query string via saved keywords or simplified syntax

```scss
media($query...)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>query...</td><td>Number value for min width, or number value preceeded by "max" for max width, or 2 number values for min and max width (alternatively keyword from $media-queries instead of any number value)</td><td><code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/media.scss">_media-parse-phrases</a>, <a href="/src/media.scss">_media-parse-phrase</a>

**File source:** <a href="/src/media.scss">src/media.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function media($query...) {
    $is-list: if(list.length($query) > 1, true, false);
    $query: if($is-list, _media-parse-phrases($query), _media-parse-phrase(list.nth($query, 1)));
    @return "#{$query}";
}
```

</details>

<br>




#### merge <a id="function-merge">&nbsp;</a>
Merge maps recursively

```scss
merge($map1, $map2)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>map1</td><td>Map 1</td><td><code>Map</code></td><td>-</td></tr><tr><td>map2</td><td>Map 2</td><td><code>Map</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>

**File source:** <a href="/src/merge.scss">src/merge.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function merge($map1, $map2) {
    @if meta.type-of($map2) != map {
        @return $map1;
    }
    @if meta.type-of($map1) != map and meta.type-of($map2) == map {
        @return $map2;
    }
    @if meta.type-of($map1) != map {
        @return $map1;
    }
    $map: $map1;
    @each $key, $value in $map2 {
        @if meta.type-of($value) == map and map.has-key($map1, $key) and meta.type-of(map.get($map1, $key)) == map {
            $map: map.merge($map, ($key: merge(map.get($map1, $key), $value)));
        } @else {
            $map: map.merge($map, ( $key: $value ));
        }
    }
    @return $map;
}
```

</details>

<br>




#### num-to-length <a id="function-num-to-length">&nbsp;</a>
Add `$unit` to `$value`

```scss
num-to-length($value, $unit)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The number value</td><td><code>Number</code></td><td>-</td></tr><tr><td>unit</td><td>The unit (eg. px)</td><td><code>String</code></td><td>px</td></tr></table>

**Requires:** <a href="/src/str-to-num.scss">str-to-num</a>, <a href="/src/get.scss">get</a>, <a href="/src/num-to-length.scss">_units</a>

**File source:** <a href="/src/num-to-length.scss">src/num-to-length.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function num-to-length($value, $unit) {
    @if meta.type-of($value) != number {
        @return str-to-num($value + $unit);
    }
    @return $value * map.get($_units, $unit);
}
```

</details>

<br>




#### px2em <a id="function-px2em">&nbsp;</a>
Px to Em calculation

```scss
px2em($px, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>px</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/strip-unit.scss">strip-unit</a>, <a href="/src/str-to-num.scss">str-to-num</a>

**File source:** <a href="/src/px2em.scss">src/px2em.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function px2em($px, $default) {
    $default: if(
        $default,
        $default,
        if(meta.global-variable-exists("font-size"), $font-size, 16px)
    );
    @if $default and math.unit($default) == px {
        @return math.div(1em * strip-unit($px), strip-unit($default));
    }
    @return str-to-num($px);
}
```

</details>

<br>




#### px2rem <a id="function-px2rem">&nbsp;</a>
Px to Rem calculation

```scss
px2rem($px, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>px</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/strip-unit.scss">strip-unit</a>, <a href="/src/str-to-num.scss">str-to-num</a>

**File source:** <a href="/src/px2rem.scss">src/px2rem.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function px2rem($px, $default) {
    $default: if(
        $default,
        $default,
        if(meta.global-variable-exists("font-size"), $font-size, 16px)
    );
    @if $default and math.unit($default) == px {
        @return math.div(1rem * strip-unit($px), strip-unit($default));
    }
    @return str-to-num($px);
}
```

</details>

<br>




#### pxval <a id="function-pxval">&nbsp;</a>
Get value of a number in pixels

```scss
pxval($value, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>Size value in px, em or rem</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/em2px.scss">em2px</a>, <a href="/src/rem2px.scss">rem2px</a>

**File source:** <a href="/src/pxval.scss">src/pxval.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function pxval($value, $default) {
    @if math.unit($value) == "px" {
        @return $value;
    }
    @if math.unit($value) == "em" {
        @return em2px($value, $default);
    }
    @if math.unit($value) == "rem" {
        @return rem2px($value, $default);
    }
    @return 0;
}
```

</details>

<br>




#### rem2em <a id="function-rem2em">&nbsp;</a>
Change rem to em (units only, no calculations)

```scss
rem2em($rem)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>rem</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-to-num.scss">str-to-num</a>, <a href="/src/strip-unit.scss">strip-unit</a>

**File source:** <a href="/src/rem2em.scss">src/rem2em.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function rem2em($rem) {
    @return str-to-num(string.unquote(strip-unit($rem) + "em"));
}
```

</details>

<br>




#### rem2px <a id="function-rem2px">&nbsp;</a>
Rem to Px calculation

```scss
rem2px($rem, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>rem</td><td>Size value</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/strip-unit.scss">strip-unit</a>, <a href="/src/str-to-num.scss">str-to-num</a>

**File source:** <a href="/src/rem2px.scss">src/rem2px.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function rem2px($rem, $default) {
    $default: if(
        $default,
        $default,
        if(meta.global-variable-exists("font-size"), $font-size, 16px)
    );
    @if $default and math.unit($default) == px {
        @return strip-unit($rem) * $default;
    }
    @return str-to-num($rem);
}
```

</details>

<br>




#### remove-nth <a id="function-remove-nth">&nbsp;</a>
Remove the $nth value of a $list

```scss
remove-nth($list, $nth)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>list</td><td>The list</td><td><code>List</code></td><td>-</td></tr><tr><td>nth</td><td>Index of the value to be removed from list</td><td><code>Number</code></td><td>-</td></tr></table>

**File source:** <a href="/src/remove-nth.scss">src/remove-nth.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function remove-nth($list, $nth) {
    @if meta.type-of($list) != list or meta.type-of($nth) != number or math.abs($nth) >= list.length($list) {
        @return $list;
    }
    $result: ();
    $nth: if($nth < 0, list.length($list) + $nth + 1, $nth);
    @for $i from 1 through list.length($list) {
        @if $i != $nth {
            $result: list.append($result, list.nth($list, $i));
        }
    }
    @return if(
        list.length($result) == 1,
        list.nth($result, 1),
        list.join((), $result, $separator: list.separator($list))
    );
}
```

</details>

<br>




#### remove <a id="function-remove">&nbsp;</a>
Remove $keys (deeply) from $map

```scss
remove($map, $keys...)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>map</td><td>The map to remove keys from</td><td><code>Map</code></td><td>-</td></tr><tr><td>keys...</td><td>Keys to be removed</td><td><code>String</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/remove-nth.scss">remove-nth</a>, <a href="/src/set.scss">set</a>

**File source:** <a href="/src/remove.scss">src/remove.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function remove($map, $keys...) {
    @if meta.type-of($map) != map {
        @return $map;
    }
    @each $set in $keys {
        @if meta.type-of($set) == list {
            @if get($map, $set) {
                $key: remove-nth($set, -1);
                $overwrite: remove(
                    get($map, $key),
                    list.nth($set, list.length($set))
                );
                $map: set($map, $key, $overwrite, false);
            }
        } @else {
            @if map.has-key($map, $set) {
                $map: map.remove($map, $set);
            }
        }
    }
    @return $map;
}
```

</details>

<br>




#### remval <a id="function-remval">&nbsp;</a>
Get value of a number in rems

```scss
remval($value, $default)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>Size value in px, em or rem</td><td><code>Number</code></td><td>-</td></tr><tr><td>default</td><td>Set a default font size (fallback to global variable $font-size)</td><td><code>Number</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/em2rem.scss">em2rem</a>, <a href="/src/px2rem.scss">px2rem</a>

**File source:** <a href="/src/remval.scss">src/remval.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function remval($value, $default) {
    @if math.unit($value) == "rem" {
        @return $value;
    }
    @if math.unit($value) == "em" {
        @return em2rem($value);
    }
    @if math.unit($value) == "px" {
        @return px2rem($value, $default);
    }
    @return 0;
}
```

</details>

<br>




#### same-units <a id="function-same-units">&nbsp;</a>
Check whether 2 numbers have the same units

```scss
same-units($number, $number2)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>number</td><td>Number 1</td><td><code>Number</code></td><td>-</td></tr><tr><td>number2</td><td>Number 2</td><td><code>Number</code></td><td>-</td></tr></table>

**File source:** <a href="/src/same-units.scss">src/same-units.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function same-units($number, $number2) {
    @return math.unit($number) == math.unit($number2);
}
```

</details>

<br>




#### scale-light <a id="function-scale-light">&nbsp;</a>
Scale lightness by iterations to fix rounding issues

```scss
scale-light($color1, $color2, $ratio, $operation, $iterations)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color1</td><td>Color 1</td><td><code>Color</code></td><td>-</td></tr><tr><td>color2</td><td>Color 2</td><td><code>Color</code></td><td>-</td></tr><tr><td>ratio</td><td>Ratio</td><td><code>String</code></td><td>"AA"</td></tr><tr><td>operation</td><td>Operation</td><td><code>String</code></td><td>darken</td></tr><tr><td>iterations</td><td>Iterations</td><td><code>Number</code></td><td>5</td></tr></table>

**Requires:** <a href="/src/is-contrasting.scss">is-contrasting</a>

**File source:** <a href="/src/scale-light.scss">src/scale-light.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function scale-light($color1, $color2, $ratio, $operation, $iterations) {
    @for $i from 1 through $iterations {
        @if is-contrasting($color1, $color2, $ratio) {
            @return $color1;
        } @else {
            $color1: color.adjust(
                $color1,
                $lightness: if($operation == lighten, 0.1%, -0.1%)
            );
        }
    }
    @return $color1;
}
```

</details>

<br>




#### scale-luminance <a id="function-scale-luminance">&nbsp;</a>
Scale a luminance of a color by a set value

```scss
scale-luminance($color, $luminance)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr><tr><td>luminance</td><td>Luminance</td><td><code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/luminance.scss">luminance</a>, <a href="/src/xyz.scss">xyz</a>, <a href="/src/is-between.scss">is-between</a>, <a href="/src/srgb.scss">srgb</a>

**File source:** <a href="/src/scale-luminance.scss">src/scale-luminance.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function scale-luminance($color, $luminance) {
    $scale: math.div($luminance, luminance($color));
    $red: math.clamp(xyz(color.red($color)), 0, 1) * $scale;
    $green: math.clamp(xyz(color.green($color)), 0, 1) * $scale;
    $blue: math.clamp(xyz(color.blue($color)), 0, 1) * $scale;
    $red-passes: is-between($red);
    $green-passes: is-between($green);
    $blue-passes: is-between($blue);
    @if not $red-passes or not $green-passes or not $blue-passes {
        $baseline: math.min($red, $green, $blue);
        $r: math.div($red, $baseline);
        $g: math.div($green, $baseline);
        $b: math.div($blue, $baseline);
        @if not $red-passes {
            $luminance: $luminance - 0.2126;
            $r: 0;
        }
        @if not $green-passes {
            $luminance: $luminance - 0.7152;
            $g: 0;
        }
        @if not $blue-passes {
            $luminance: $luminance - 0.0722;
            $b: 0;
        }
        $x: math.div($luminance, ($r * 0.2126 + $g * 0.7152 + $b * 0.0722));
        @if $red-passes {
            $red: $r * $x;
        }
        @if $green-passes {
            $green: $g * $x;
        }
        @if $blue-passes {
            $blue: $b * $x;
        }
    }
    @return rgb(srgb($red), srgb($green), srgb($blue));
}
```

</details>

<br>




#### select-after <a id="function-select-after">&nbsp;</a>
Select all elements after a specific nth value

```scss
select-after($nth, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-after.scss">src/select-after.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-after($nth, $selector) {
    @return selector-combine($selector, "&:nth-child(n + #{$nth + 1})");
}
```

</details>

<br>




#### select-all-out-of-at-least <a id="function-select-all-out-of-at-least">&nbsp;</a>
Select all elements if the number of elements in the container is at least a number

```scss
select-all-out-of-at-least($num, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>num</td><td>The number of elements</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-all-out-of-at-least.scss">src/select-all-out-of-at-least.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-all-out-of-at-least($num, $selector) {
	$child: list.nth(list.nth($selector, -1), -1);
    @return selector-combine($selector, "&:nth-last-child(n + #{$num}), &:nth-last-child(n + #{$num}) ~ #{$child}");
}
```

</details>

<br>




#### select-all-out-of-at-most <a id="function-select-all-out-of-at-most">&nbsp;</a>
Select all elements if the number of elements in the container is at most a number

```scss
select-all-out-of-at-most($num, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>num</td><td>The number of elements</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-all-out-of-at-most.scss">src/select-all-out-of-at-most.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-all-out-of-at-most($num, $selector) {
	$child: list.nth(list.nth($selector, -1), -1);
    @return selector-combine($selector, "&:nth-last-child(-n + #{$num}):first-child, &:nth-last-child(-n + #{$num}):first-child ~ #{$child}");
}
```

</details>

<br>




#### select-all-out-of-between <a id="function-select-all-out-of-between">&nbsp;</a>
Select all elements if the number of elements in the container is between a min and max number

```scss
select-all-out-of-between($min, $max, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>min</td><td>The minimum number of elements</td><td><code>Number</code></td><td>-</td></tr><tr><td>max</td><td>The maximum number of elements</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-all-out-of-between.scss">src/select-all-out-of-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-all-out-of-between($min, $max, $selector) {
	$child: list.nth(list.nth($selector, -1), -1);
    @return selector-combine(
        $selector,
        "&:nth-last-child(n + #{$min}):nth-last-child(-n + #{$max}):first-child, &:nth-last-child(n + #{$min}):nth-last-child(-n + #{$max}):first-child ~ #{$child}"
    );
}
```

</details>

<br>




#### select-before <a id="function-select-before">&nbsp;</a>
Select all elements before a specific nth value

```scss
select-before($nth, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-before.scss">src/select-before.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-before($nth, $selector) {
    @return selector-combine($selector, "&:nth-last-child(#{$nth})");
}
```

</details>

<br>




#### select-between <a id="function-select-between">&nbsp;</a>
Select all elements between a specific first and last nth value

```scss
select-between($first, $last, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>first</td><td>The first nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>last</td><td>The last nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-between.scss">src/select-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-between($first, $last, $selector) {
    @return selector-combine($selector, "&:nth-child(n + #{$first}):nth-child(-n + #{$last})");
}
```

</details>

<br>




#### select-even-between <a id="function-select-even-between">&nbsp;</a>
Select all even nth elements between a specific first and last nth value

```scss
select-even-between($first, $last, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>first</td><td>The first nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>last</td><td>The last nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-even-between.scss">src/select-even-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-even-between($first, $last, $selector) {
    @return selector-combine($selector, "&:nth-child(even):nth-child(n + #{$first}):nth-child(-n + #{$last})");
}
```

</details>

<br>




#### select-even <a id="function-select-even">&nbsp;</a>
Select all even nth elements

```scss
select-even($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-even.scss">src/select-even.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-even($selector) {
    @return selector-combine($selector, "&:nth-child(even)");
}
```

</details>

<br>




#### select-except-first-last <a id="function-select-except-first-last">&nbsp;</a>
Select all elements except the first and last

```scss
select-except-first-last($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-except-first-last.scss">src/select-except-first-last.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-except-first-last($selector) {
    @return selector-combine($selector, "&:not(:first-child):not(:last-child)");
}
```

</details>

<br>




#### select-except-only-child <a id="function-select-except-only-child">&nbsp;</a>
Select all elements except the only child

```scss
select-except-only-child($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-except-only-child.scss">src/select-except-only-child.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-except-only-child($selector) {
    @return selector-combine($selector, "&:not(:only-child)");
}
```

</details>

<br>




#### select-except <a id="function-select-except">&nbsp;</a>
Select all elements except a specific nth

```scss
select-except($nth, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-except.scss">src/select-except.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-except($nth, $selector) {
    @return selector-combine($selector, "&:not(:nth-child(#{$nth}))");
}
```

</details>

<br>




#### select-first-last <a id="function-select-first-last">&nbsp;</a>
Select the first and last elements

```scss
select-first-last($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-first-last.scss">src/select-first-last.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-first-last($selector) {
    @return selector-combine($selector, "&:first-child, &:last-child");
}
```

</details>

<br>




#### select-first-of-type <a id="function-select-first-of-type">&nbsp;</a>
Select the first of the type element

```scss
select-first-of-type($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-first-of-type.scss">src/select-first-of-type.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-first-of-type($selector) {
    @return selector-combine($selector, "&:first-of-type");
}
```

</details>

<br>




#### select-first-out-of <a id="function-select-first-out-of">&nbsp;</a>
Select first element if the number of elements in the container equals to a number

```scss
select-first-out-of($num, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>num</td><td>The number of elements</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-first-out-of.scss">src/select-first-out-of.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-first-out-of($num, $selector) {
	@return selector-combine($selector, "&:nth-last-child(#{$num}):first-child");
}
```

</details>

<br>




#### select-first <a id="function-select-first">&nbsp;</a>
Select the first element

```scss
select-first($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-first.scss">src/select-first.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-first($selector) {
    @return selector-combine($selector, if($nth == 1, "&:first-child", "&:nth-first-child(-n + #{$nth})"));
}
```

</details>

<br>




#### select-last-of-type <a id="function-select-last-of-type">&nbsp;</a>
Select the last of the type element

```scss
select-last-of-type($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-last-of-type.scss">src/select-last-of-type.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-last-of-type($selector) {
    @return selector-combine($selector, "&:last-of-type");
}
```

</details>

<br>




#### select-last-out-of <a id="function-select-last-out-of">&nbsp;</a>
Select last element if the number of elements in the container equals to a number

```scss
select-last-out-of($num, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>num</td><td>The number of elements</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-last-out-of.scss">src/select-last-out-of.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-last-out-of($num, $selector) {
    @return selector-combine($selector, "&:nth-of-type(#{$num}):nth-last-of-type(1)");
}
```

</details>

<br>




#### select-last <a id="function-select-last">&nbsp;</a>
Select the last element

```scss
select-last($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-last.scss">src/select-last.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-last($selector) {
    @return selector-combine($selector, if($nth == 1, "&:last-child", "&:nth-last-child(-n + #{$nth})"));
}
```

</details>

<br>




#### select-middle <a id="function-select-middle">&nbsp;</a>
Select the middle element

```scss
select-middle($num, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>num</td><td>Number of elements in the container</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-middle.scss">src/select-middle.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-middle($num, $selector) {
    @return selector-combine($selector, "&:nth-child(#{math.round(math.div($num, 2))})");
}
```

</details>

<br>




#### select-nth-between <a id="function-select-nth-between">&nbsp;</a>
Select all nth elements between a first and a last value

```scss
select-nth-between($nth, $first, $last, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The segment number</td><td><code>Number</code></td><td>-</td></tr><tr><td>first</td><td>The first nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>last</td><td>The last nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-nth-between.scss">src/select-nth-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-nth-between($nth, $first, $last, $selector) {
    @return selector-combine($selector, "&:nth-child(#{$nth}n):nth-child(n + #{$first}):nth-child(-n + #{$last})");
}
```

</details>

<br>




#### select-nth-both-sides <a id="function-select-nth-both-sides">&nbsp;</a>
Select nth elements from both sides of the container

```scss
select-nth-both-sides($nth, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The segment number</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-nth-both-sides.scss">src/select-nth-both-sides.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-nth-both-sides($nth, $selector) {
    @return selector-combine($selector, "&:nth-child(#{$nth}), &:nth-last-child(#{$nth})");
}
```

</details>

<br>




#### select-nth-from <a id="function-select-nth-from">&nbsp;</a>
Select nth elements from after a value

```scss
select-nth-from($nth, $from, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The segment number</td><td><code>Number</code></td><td>-</td></tr><tr><td>from</td><td>The starting element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-nth-from.scss">src/select-nth-from.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-nth-from($nth, $from, $selector) {
    @return selector-combine($selector, "&:nth-child(#{$nth}n + #{$from})");
}
```

</details>

<br>




#### select-nth <a id="function-select-nth">&nbsp;</a>
Select every nth element

```scss
select-nth($nth, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>nth</td><td>The nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-nth.scss">src/select-nth.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-nth($nth, $selector) {
    @return selector-combine($selector, "&:nth-child(#{$nth}n)");
}
```

</details>

<br>




#### select-odd-between <a id="function-select-odd-between">&nbsp;</a>
Select all odd nth elements between a specific first and last nth value

```scss
select-odd-between($first, $last, $selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>first</td><td>The first nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>last</td><td>The last nth element</td><td><code>Number</code></td><td>-</td></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-odd-between.scss">src/select-odd-between.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-odd-between($first, $last, $selector) {
    @return selector-combine($selector, "&:nth-child(odd):nth-child(n + #{$first}):nth-child(-n + #{$last})");
}
```

</details>

<br>




#### select-odd <a id="function-select-odd">&nbsp;</a>
Select all odd nth elements

```scss
select-odd($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-odd.scss">src/select-odd.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-odd($selector) {
    @return selector-combine($selector, "&:nth-child(odd)");
}
```

</details>

<br>




#### select-only-child <a id="function-select-only-child">&nbsp;</a>
Select element only if it is an only child of its container

```scss
select-only-child($selector)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector</td><td>The base selector</td><td><code>String</code> <code>List</code></td><td>"&"</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-only-child.scss">src/select-only-child.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-only-child($selector) {
    @return selector-combine($selector, "&::only-child");
}
```

</details>

<br>




#### select-owl <a id="function-select-owl">&nbsp;</a>
Mingle a list of selectors to go before and after the other adjacently

```scss
select-owl($selectors)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selectors</td><td>The base selectors</td><td><code>List</code> <code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/selector-combine.scss">selector-combine</a>

**File source:** <a href="/src/select-owl.scss">src/select-owl.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select-owl($selectors) {
    @return selector.replace(
        selector-combine($selector, "& + #___select-owl"),
        "#___select-owl",
        $selector
    );
}
```

</details>

<br>




#### select <a id="function-select">&nbsp;</a>
Return selectors for common element groups via shorthands

```scss
select($key)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>key</td><td>Selector group key</td><td><code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/select.scss">selectors</a>

**File source:** <a href="/src/select.scss">src/select.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function select($key) {
    @return if(map.has-key($selectors, $key), map.get($selectors, $key), $key);
}
```

</details>

<br>




#### selector-combine <a id="function-selector-combine">&nbsp;</a>
Combine 2 CSS selectors

```scss
selector-combine($selector1, $selector2)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>selector1</td><td>Left selector</td><td><code>String</code> <code>List</code></td><td>-</td></tr><tr><td>selector2</td><td>Right selector</td><td><code>String</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-split.scss">str-split</a>, <a href="/src/str-trim.scss">str-trim</a>, <a href="/src/str-ends-with.scss">str-ends-with</a>, <a href="/src/str-replace.scss">str-replace</a>, <a href="/src/str-starts-with.scss">str-starts-with</a>

**File source:** <a href="/src/selector-combine.scss">src/selector-combine.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function selector-combine($selector1, $selector2) {
    $selector-list: ();
    $selector1-list: str-split("#{$selector1}", ",");
    $selector2-list: str-split("#{$selector2}", ",");
    @each $s1 in $selector1-list {
        @each $s2 in $selector2-list {
            $s1: str-trim($s1);
            $s2: str-trim($s2);
            @if string.index($s1, "&") and str-ends-with($s1, "&") and string.index($s2, "&") {
                $selector-list: list.append(
                    $selector-list,
                    str-replace($s1, "&", $s2),
                    comma
                );
            } @else if string.index($s2, "&") and str-starts-with($s2, "&") and (not string.index($s1, "&") or str-ends-with($s1, "&") == false) {
                $s2: string.slice($s2, 2);
                $selector-list: list.append(
                    $selector-list,
                    "#{$s1}#{$s2}",
                    comma
                );
            } @else if string.index($s1, "&") and str-ends-with($s1, "&") and (string.index($s2, "&") == false or str-starts-with($s2, "&") == false) {
                $selector-list: list.append(
                    $selector-list,
                    "#{$s1} #{$s2}",
                    comma
                );
            } @else if string.index($s2, "&") {
                $selector-list: list.append(
                    $selector-list,
                    str-replace($s2, "&", $s1),
                    comma
                );
            } @else {
                $selector-list: list.append($selector-list, $s1, comma);
                $selector-list: list.append($selector-list, $s2, comma);
            }
        }
    }
    @return str-replace("#{$selector-list}", "  ", " ");
}
```

</details>

<br>




#### set <a id="function-set">&nbsp;</a>
Recusrively set map values based on keys

```scss
set($map, $keys, $value, $recursive)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>map</td><td>The base map</td><td><code>Map</code></td><td>-</td></tr><tr><td>keys</td><td>The key or list of keys (if lookup is supposed to go deeper)</td><td><code>List</code> <code>String</code></td><td>-</td></tr><tr><td>value</td><td>The value to be set</td><td><code>Mixed</code></td><td>-</td></tr><tr><td>recursive</td><td>Whether the system should set recursively</td><td><code>Boolean</code></td><td>true</td></tr></table>

**Requires:** <a href="/src/merge.scss">merge</a>, <a href="/src/get.scss">get</a>

**File source:** <a href="/src/set.scss">src/set.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function set($map, $keys, $value, $recursive) {
    @if meta.type-of($map) != map {
        @return $map;
    }
    $maps: list.append((), $map);
    $result: null;
    @if list.length($keys) == 1 {
        @return if(
            $recursive,
            merge(
                $map,
                (
                    $keys: $value,
                )
            ),
            map.merge(
                $map,
                (
                    $keys: $value,
                )
            )
        );
    }
    @for $i from 1 through list.length($keys) - 1 {
        $current-key: list.nth($keys, $i);
        $current-map: list.nth($maps, -1);
        $current-get: map.get($current-map, $current-key);
        @if not $current-get {
            @return $map;
        }
        $maps: list.append($maps, $current-get);
    }
    @for $i from list.length($maps) through 1 {
        $current-map: list.nth($maps, $i);
        $current-key: list.nth($keys, $i);
        $current-val: if($i == list.length($maps), $value, $result);
        $result: if(
            $recursive,
            merge(
                $current-map,
                (
                    $current-key: $current-val,
                )
            ),
            map.merge(
                $current-map,
                (
                    $current-key: $current-val,
                )
            )
        );
    }
    @return $result;
}
```

</details>

<br>




#### sides-bottom <a id="function-sides-bottom">&nbsp;</a>
Get the bottom value from a list like margin or padding

```scss
sides-bottom($value)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Number</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/sides.scss">sides</a>

**File source:** <a href="/src/sides-bottom.scss">src/sides-bottom.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides-bottom($value) {
    @return map.get(sides($value), bottom);
}
```

</details>

<br>




#### sides-left <a id="function-sides-left">&nbsp;</a>
Get the left value from a list like margin or padding

```scss
sides-left($value)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Number</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/sides.scss">sides</a>

**File source:** <a href="/src/sides-left.scss">src/sides-left.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides-left($value) {
    @return map.get(sides($value), left);
}
```

</details>

<br>




#### sides-right <a id="function-sides-right">&nbsp;</a>
Get the right value from a list like margin or padding

```scss
sides-right($value)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Number</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/sides.scss">sides</a>

**File source:** <a href="/src/sides-right.scss">src/sides-right.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides-right($value) {
    @return map.get(sides($value), right);
}
```

</details>

<br>




#### sides-top <a id="function-sides-top">&nbsp;</a>
Get the top value from a list like margin or padding

```scss
sides-top($value)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Number</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/sides.scss">sides</a>

**File source:** <a href="/src/sides-top.scss">src/sides-top.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides-top($value) {
    @return map.get(sides($value), top);
}
```

</details>

<br>




#### sides-x <a id="function-sides-x">&nbsp;</a>
Get the right-left value from a list like margin or padding

```scss
sides-x($value, $mode)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Number</code> <code>List</code></td><td>-</td></tr><tr><td>mode</td><td>Whether to return the average or summary of the values</td><td><code>String</code></td><td>average</td></tr></table>

**Requires:** <a href="/src/sides.scss">sides</a>, <a href="/src/get.scss">get</a>

**File source:** <a href="/src/sides-x.scss">src/sides-x.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides-x($value, $mode) {
    $sides: sides($value);
    @if not map.get($sides, right) or not map.get($sides, left) {
        @return null;
    }
    @if $mode == average {
        @return math.div((map.get($sides, right) + map.get($sides, left)), 2);
    } @else {
        @return map.get($sides, right) + map.get($sides, left);
    }
}
```

</details>

<br>




#### sides-y <a id="function-sides-y">&nbsp;</a>
Get the top-bottom value from a list like margin or padding

```scss
sides-y($value, $mode)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The list value</td><td><code>Number</code> <code>List</code></td><td>-</td></tr><tr><td>mode</td><td>Whether to return the average or summary of the values</td><td><code>String</code></td><td>average</td></tr></table>

**Requires:** <a href="/src/sides.scss">sides</a>, <a href="/src/get.scss">get</a>

**File source:** <a href="/src/sides-y.scss">src/sides-y.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides-y($value, $mode) {
    $sides: sides($value);
    @if not map.get($sides, top) or not map.get($sides, bottom) {
        @return null;
    }
    @if $mode == average {
        @return math.div((map.get($sides, top) + map.get($sides, bottom)), 2);
    } @else {
        @return map.get($sides, top) + map.get($sides, bottom);
    }
}
```

</details>

<br>




#### sides <a id="function-sides">&nbsp;</a>
Get a map of sides from a value or list (like margin, padding)

```scss
sides($value)
```
**Example:**
```scss
sides(1px)             /* (top: 1px, right: 1px, bottom: 1px, left: 1px) */
sides(1px 2px)         /* (top: 1px, right: 2px, bottom: 1px, left: 2px) */
sides(1px 2px 3px)     /* (top: 1px, right: 2px, bottom: 3px, left: 2px) */
sides(1px 2px 3px 4px) /* (top: 1px, right: 2px, bottom: 3px, left: 4px) */
```

**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>Multi-size value (like margin, padding)</td><td><code>Number</code> <code>List</code></td><td>-</td></tr></table>

**File source:** <a href="/src/sides.scss">src/sides.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function sides($value) {
    $top: null;
    $right: null;
    $bottom: null;
    $left: null;
    @if meta.type-of($value) != list and meta.type-of($value) != number {
        @return (top: null, right: null, left: null, bottom: null);
    }
    @if list.length($value) == 1 {
        $top: $value;
        $right: $value;
        $bottom: $value;
        $left: $value;
    } @else if list.length($value) == 2 {
        $top: list.nth($value, 1);
        $right: list.nth($value, 2);
        $bottom: $top;
        $left: $right;
    } @else if list.length($value) == 3 {
        $top: list.nth($value, 1);
        $right: list.nth($value, 2);
        $bottom: list.nth($value, 3);
        $left: $right;
    } @else {
        $top: list.nth($value, 1);
        $right: list.nth($value, 2);
        $bottom: list.nth($value, 3);
        $left: list.nth($value, 4);
    }
    @return (top: $top, right: $right, bottom: $bottom, left: $left);
}
```

</details>

<br>




#### size <a id="function-size">&nbsp;</a>
Return a named size

```scss
size($size, $value)
```
**Example:**
```scss
padding: s(m);                 /* #dc2626 */
margin: s(m, 3);               /* #ef4444 */
font-size: s(m, 2);            /* white - best contrasting with #dc2626 out of black or white */
```

**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>size</td><td>The named size</td><td><code>List</code> <code>Color</code></td><td>-</td></tr><tr><td>value</td><td>Null for returning the size as a css var (default), or a number to return the multiplier of the size or the nth number from the list of the named size</td><td><code>Null</code> <code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/size.scss">sizes</a>

**File source:** <a href="/src/size.scss">src/size.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function size($size, $value) {
    @if not $value {
        @return var(--#{$size});
    }
    @if map.has-key($sizes, $size) and meta.type-of($value) == number {
        $size: map.get($sizes, $size);
        @if meta.type-of($size) == number {
            $size: $size * $value;
        }
        @if meta.type-of($size) == list {
            $size: nth($size, $value);
        }
    }
    @return $size;
}
```

</details>

<br>




#### s <a id="function-s">&nbsp;</a>
Return a named size

```scss
s($size, $value)
```
**Type:** function

**Alias of:** size

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>size</td><td>The named size</td><td><code>List</code> <code>Color</code></td><td>-</td></tr><tr><td>value</td><td>Null for returning the size as a css var (default), or a number to return the multiplier of the size or the nth number from the list of the named size</td><td><code>Null</code> <code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/size.scss">size</a>

**File source:** <a href="/src/size.scss">src/size.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function s($size, $value) {
    @return size($size, $value);
}
```

</details>

<br>




#### srgb <a id="function-srgb">&nbsp;</a>
Returns XYZ value to RGB channel

```scss
srgb($channel)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>channel</td><td>Channel value</td><td><code>Number</code></td><td>-</td></tr></table>

**File source:** <a href="/src/srgb.scss">src/srgb.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function srgb($channel) {
    @return 255 * if($value <= 0.0031308, $value * 12.92, 1.055 * math.pow($value, math.div(1, 2.4)) - 0.055);
}
```

</details>

<br>




#### str-ends-with <a id="function-str-ends-with">&nbsp;</a>
Check if string ends with a substring

```scss
str-ends-with($haystack, $needle)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>haystack</td><td>String to search in</td><td><code>String</code></td><td>-</td></tr><tr><td>needle</td><td>String to search for</td><td><code>String</code></td><td>-</td></tr></table>

**File source:** <a href="/src/str-ends-with.scss">src/str-ends-with.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-ends-with($haystack, $needle) {
    $haystack-length: string.length($haystack);
    $needle-length: string.length($needle);
    @if $haystack-length < $needle-length {
        @return false;
    }
    @if $haystack-length == $needle-length and $haystack == $needle {
        @return true;
    }
    @return if($needle == string.slice($haystack, $haystack-length - $needle-length + 1), true, false);
}
```

</details>

<br>




#### str-replace <a id="function-str-replace">&nbsp;</a>
Replace `$search` with `$replace` in `$string`

```scss
str-replace($string, $search, $replace)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>string</td><td>Initial string</td><td><code>String</code></td><td>-</td></tr><tr><td>search</td><td>Substring to replace</td><td><code>String</code></td><td>-</td></tr><tr><td>replace</td><td>New value</td><td><code>String</code></td><td>""</td></tr></table>

**File source:** <a href="/src/str-replace.scss">src/str-replace.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-replace($string, $search, $replace) {
    $index: string.index($string, $search);
    @if $index {
        @return string.slice($string, 1, $index - 1) + $replace + str-replace(string.slice($string, $index + string.length($search)), $search, $replace);
    }
    @return $string;
}
```

</details>

<br>




#### str-split <a id="function-str-split">&nbsp;</a>
Split a string into a list of strings along a delimiter

```scss
str-split($string, $delimiter, $clean)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>string</td><td>The string to split</td><td><code>String</code></td><td>-</td></tr><tr><td>delimiter</td><td>The delimiter to split along</td><td><code>String</code></td><td>"-"</td></tr><tr><td>clean</td><td>Whether to remove empty strings from the array</td><td><code>Boolean</code></td><td>true</td></tr></table>

**File source:** <a href="/src/str-split.scss">src/str-split.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-split($string, $delimiter, $clean) {
    $result: ();
    $length: string.length($string);
    @if string.length($delimiter) == 0 {
        @for $i from 1 through $length {
            $slice: string.slice($string, $i, $i);
            $result: if(not $clean or string.length($slice) > 0, list.append($result, $slice), $result);
        }
        @return $result;
    }
    $splitting: true;
    $remaining: $string;
    @while $splitting {
        $index: string.index($remaining, $delimiter);
        @if $index {
            $slice: string.slice($remaining, 1, ($index - 1));
            $result: if(not $clean or string.length($slice) > 0, list.append($result, $slice), $result);
            $remaining: string.slice(
                $remaining,
                $index + string.length($delimiter)
            );
        } @else {
            $splitting: false;
        }
    }
    @return if(not $clean or string.length($remaining) > 0, list.append($result, $remaining), $result);
}
```

</details>

<br>




#### str-starts-with <a id="function-str-starts-with">&nbsp;</a>
Check if string starts with a substring

```scss
str-starts-with($haystack, $needle)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>haystack</td><td>String to search in</td><td><code>String</code></td><td>-</td></tr><tr><td>needle</td><td>String to search for</td><td><code>String</code></td><td>-</td></tr></table>

**File source:** <a href="/src/str-starts-with.scss">src/str-starts-with.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-starts-with($haystack, $needle) {
    $haystack-length: string.length($haystack);
    $needle-length: string.length($needle);
    @if $haystack-length < $needle-length {
        @return false;
    }
    @if $haystack-length == $needle-length and $haystack == $needle {
        @return true;
    }
    @return if($needle == string.slice($haystack, 1, $needle-length), true, false);
}
```

</details>

<br>




#### str-to-num <a id="function-str-to-num">&nbsp;</a>
Cast a string `$value` into a number

```scss
str-to-num($value)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>value</td><td>The value to be cast</td><td><code>Number</code> <code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/get.scss">get</a>, <a href="/src/str-to-num.scss">_numbers</a>, <a href="/src/num-to-length.scss">_units</a>

**File source:** <a href="/src/str-to-num.scss">src/str-to-num.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-to-num($value) {
    @if meta.type-of($value) == number {
        @return $value;
    }
    $result: 0;
    $digits: 0;
    $minus: string.slice($value, 1, 1) == "-";
    @for $i from if($minus, 2, 1) through string.length($value) {
        $character: string.slice($value, $i, $i);
        @if not(map.has-key($_numbers, $character) or $character == ".") {
            @return if($minus, -$result, $result) * map.get($_units, string.slice($value, $i));
        }
        @if $character == "." {
            $digits: 1;
        } @else if $digits == 0 {
            $result: $result * 10 + map.get($_numbers, $character);
        } @else {
            $digits: $digits * 10;
            $result: $result + math.div(map.get($_numbers, $character), $digits);
        }
    }
    @return if($minus, -$result, $result);
}
```

</details>

<br>




#### str-trim-end <a id="function-str-trim-end">&nbsp;</a>
Trim whitespace from the end of a string

```scss
str-trim-end($string)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>string</td><td>String to trim</td><td><code>String</code></td><td>-</td></tr></table>

**File source:** <a href="/src/str-trim-end.scss">src/str-trim-end.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-trim-end($string) {
    @if string.slice($string, string.length($string), -1) == " " {
        @return str-trim-end(string.slice($string, 1, -2));
    }
    @return $string;
}
```

</details>

<br>




#### str-trim-start <a id="function-str-trim-start">&nbsp;</a>
Trim whitespace from the beginning of a string

```scss
str-trim-start($string)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>string</td><td>String to trim</td><td><code>String</code></td><td>-</td></tr></table>

**File source:** <a href="/src/str-trim-start.scss">src/str-trim-start.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-trim-start($string) {
    @if string.slice($string, 1, 1) == " " {
        @return str-trim-start(string.slice($string, 2));
    }
    @return $string;
}
```

</details>

<br>




#### str-trim <a id="function-str-trim">&nbsp;</a>
Trim whitespace off a string

```scss
str-trim($string)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>string</td><td>String to trim</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-trim-start.scss">str-trim-start</a>, <a href="/src/str-trim-end.scss">str-trim-end</a>

**File source:** <a href="/src/str-trim.scss">src/str-trim.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function str-trim($string) {
    @return str-trim-start(str-trim-end($string));
}
```

</details>

<br>




#### strip-unit <a id="function-strip-unit">&nbsp;</a>
Remove units from a number

```scss
strip-unit($number)
```
**Example:**
```scss
$result: strip-unit(12px);    /* 12 */
$result: strip-unit(-12em);   /* -12 */
$result: strip-unit(12rem);   /* 12 */
$result: strip-unit(2.2deg);  /* 2.2 */
```

**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>number</td><td>Number with a unit</td><td><code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/str-to-num.scss">str-to-num</a>

**File source:** <a href="/src/strip-unit.scss">src/strip-unit.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function strip-unit($number) {
    @if meta.type-of($number) == string and meta.type-of(str-to-num($number)) == number {
        $number: str-to-num($number);
    }
    @if meta.type-of($number) == number and not math.is-unitless($number) {
        @return math.div($number, ($number * 0 + 1));
    }
    @return $number;
}
```

</details>

<br>




#### svg-base64 <a id="function-svg-base64">&nbsp;</a>
Base64 encode svg code

```scss
svg-base64($svg, $fill)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>svg</td><td>The svg code</td><td><code>String</code></td><td>-</td></tr><tr><td>fill</td><td>A fill color to be added to svg</td><td><code>Color</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/str-replace.scss">str-replace</a>

**File source:** <a href="/src/svg-base64.scss">src/svg-base64.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function svg-base64($svg, $fill) {
    $svg: str-replace(
        $svg,
        "<svg ",
        if($fill, '<svg fill="#{$fill}" ', "<svg ")
    );
    $svg: str-replace($svg, "<", "%3C");
    $svg: str-replace($svg, ">", "%3E");
    $svg: str-replace($svg, "#", "%23");
    $svg: str-replace($svg, '"', "'");
    $svg: str-replace($svg, "`", "'");
    @return "data:image/svg+xml,#{$svg}";
}
```

</details>

<br>




#### svg-url <a id="function-svg-url">&nbsp;</a>
SVG base64 background url based on $svg with optional $fill color

```scss
svg-url($svg, $fill)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>svg</td><td>The SVG code</td><td><code>String</code></td><td>-</td></tr><tr><td>fill</td><td>Fill color for the icon</td><td><code>Color</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/svg-base64.scss">svg-base64</a>

**File source:** <a href="/src/svg-url.scss">src/svg-url.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function svg-url($svg, $fill) {
    @return url(svg-base64($svg, $fill));
}
```

</details>

<br>




#### tetrad <a id="function-tetrad">&nbsp;</a>
Get the tetrad pairs of a color

```scss
tetrad($color, $step)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr><tr><td>step</td><td>Which tetrad to get</td><td><code>Number</code></td><td>1</td></tr></table>

**File source:** <a href="/src/tetrad.scss">src/tetrad.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function tetrad($color, $step) {
    @return color.adjust($color, $hue: $step * 90);
}
```

</details>

<br>




#### triad <a id="function-triad">&nbsp;</a>
Get the triad pairs of a color

```scss
triad($color, $step)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr><tr><td>step</td><td>Which triad to get</td><td><code>Number</code></td><td>1</td></tr></table>

**File source:** <a href="/src/triad.scss">src/triad.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function triad($color, $step) {
    @return color.adjust($color, $hue: $step * 120);
}
```

</details>

<br>




#### unique-id-by-value <a id="function-unique-id-by-value">&nbsp;</a>
Generate a unique ID based on passed-in attributes

```scss
unique-id-by-value($values...)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>values...</td><td>Attributes</td><td><code>Mixed</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/merge.scss">merge</a>, <a href="/src/unique-id-by-value.scss">_unique-ids</a>

**File source:** <a href="/src/unique-id-by-value.scss">src/unique-id-by-value.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function unique-id-by-value($values...) {
    $found: list.index(map.values($_unique-ids), $values);
    @if $found {
        @return list.nth(list.nth($_unique-ids, $found), 1);
    } @else {
        $id: string.unique-id();
        $_unique-ids: map.merge(
            $_unique-ids,
            (
                $id: $values,
            )
        ) !global;

        @return $id;
    }
}
```

</details>

<br>




#### whiten <a id="function-whiten">&nbsp;</a>
Mix a color with white

```scss
whiten($color, $ratio)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>color</td><td>Color</td><td><code>Color</code></td><td>-</td></tr><tr><td>ratio</td><td>Ratio</td><td><code>Number</code></td><td>50</td></tr></table>

**File source:** <a href="/src/whiten.scss">src/whiten.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function whiten($color, $ratio) {
    @return color.mix(#fff, $color, $ratio);
}
```

</details>

<br>




#### xyz <a id="function-xyz">&nbsp;</a>
Return an RGB channel processed as XYZ

```scss
xyz($channel)
```
**Type:** function

**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>channel</td><td>Channel value</td><td><code>Number</code></td><td>-</td></tr></table>

**File source:** <a href="/src/xyz.scss">src/xyz.scss</a>
<details><summary><strong>Source</strong></summary>

```scss

@function xyz($channel) {
    $channel: math.div($channel, 255);
    @return if(
        $channel <= 0.03928,
        math.div($channel, 12.92),
        math.pow(math.div(($channel + 0.055), 1.055), 2.4)
    );
}
```

</details>

<br>

### Variables


#### asset-path <a id="variable-asset-path">&nbsp;</a>
The default asset path to prepend

```scss
$asset-path
```
**Type:** variable

**File source:** <a href="/src/asset.scss">src/asset.scss</a>

<br>




#### color-palette <a id="variable-color-palette">&nbsp;</a>
Named colors palette

```scss
$color-palette
```
**Type:** variable

**File source:** <a href="/src/color.scss">src/color.scss</a>

<br>




#### media-queries <a id="variable-media-queries">&nbsp;</a>
Named shorthands for media queries
(values should be full media query strings or a number value)
(if a number value, the value will be used as min-width or a calculated value when used as max-width - see examples)

```scss
$media-queries
```
**Type:** variable

**File source:** <a href="/src/media.scss">src/media.scss</a>

<br>




#### selectors <a id="variable-selectors">&nbsp;</a>
List of selector shorthands

```scss
$selectors
```
**Type:** variable

**File source:** <a href="/src/select.scss">src/select.scss</a>

<br>




#### sizes <a id="variable-sizes">&nbsp;</a>
A map of named sizes (each may have one value or a list of values)

```scss
$sizes
```
**Type:** variable

**File source:** <a href="/src/size.scss">src/size.scss</a>

<br>


<!-- end automated part -->

<br>

## Usage example

You can `@use` each component on its own without loading the entire library

```scss
@use "sass-styler/flex-grid" as *;

div.columns {
    @include flex-grid(1 of 3, 20px);
}
```

Or you `@use` load a whole module to use all of its components

```scss
@use "sass-styler" as *;

@include normalize();

.card {
    @include elevation(3);
}

```
