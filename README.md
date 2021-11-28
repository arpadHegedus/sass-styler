# SASS STYLER
Modular scss utility library to build better styles faster

## INSTALL

```bash
npm i sass-styler
```

## MODULES

Styler is made up of 3 main modules

<!-- start automated part -->

<details>
  <summary>
    <h3 style="display:inline">Theme</h3> - helpers to create your own design system - <a href="doc/THEME.md">read docs</a>
  </summary>

#### Mixins

```scss
/* Define CSS variables via a Sass map */
@include define-vars($vars-map)
```
```scss
/* Define CSS variable */
@include define-var($name, $value)
```
```scss
/* Add box shadow based on elevation settings */
@include elevation($level)
```
```scss
/* Add named font-family */
@include font-family($id)
```
```scss
/* Generate media queries via saved keywords or simplified syntax */
@include media($query...)
```
```scss
/* Modern Normalize */
@include normalize
```
```scss
/* Reset styles */
@include reset
```
```scss
/* Get selectors from a named selector group */
@include select($ids)
```
```scss
/* Add transition to elements with fallback to default settings */
@include transition($property, $duration, $timing-function, $delay)
```
#### Functions

```scss
/* Get an asset url prepended by a default base path */
asset($file)
```
```scss
/* Return and manipulate color */
color($args)
```
```scss
/* Return and manipulate color */
/* alias of color */
c($args)
```
```scss
/* Get a CSS variable defined via Sass */
get-var($name, $fallback)
```
```scss
/* Get a CSS variable defined via Sass */
/* alias of get-var */
v($name, $fallback)
```
```scss
/* Return box shadow based on elevation settings */
elevation($level)
```
```scss
/* Return named font-family */
font-family($id)
```
```scss
/* Get selectors from a named selector group */
select($ids)
```
```scss
/* Return named size */
size($id)
```
```scss
/* Return named size */
/* alias of size */
s($id)
```
#### Variables

```scss
/* The default asset path to prepend */
$asset-path
```
```scss
/* Named colors palette */
$color-palette
```
```scss
/* Manage CSS variables via Sass variables */
$var-prepend
```
```scss
/* Elevation level box-shadow settings */
$elevations
```
```scss
/* Named font families */
$font-families
```
```scss
/* Named shorthands for media queries */
$media-queries
```
```scss
/* Predefined selectors */
$selectors
```
```scss
/* Named size values */
$sizes
```
```scss
/* Default transition settings */
$transition-settings
```
</details>
<details>
  <summary>
    <h3 style="display:inline">Utilities</h3> - a huge array of mixins and functions - <a href="doc/UTILITY.md">read docs</a>
  </summary>

#### Mixins

```scss
/* Add an angled edge to a container using a generated SVG */
@include angled-edge($fill, $height, $location, $hypotenuse, $width, $selector)
```
```scss
/* A tritone angled CSS background */
@include angled-tritone-background($base, $color1, $color2, $angle1, $angle2, $position1, $position2)
```
```scss
/* Add multiple extends */
@include apply($keywords)
```
```scss
/* Background gradient stripes from a list of colors */
@include background-stripes($direction, $colors)
```
```scss
/* Prevent elements flowing around floating elements */
@include clearfix($selector)
```
```scss
/* Create a width-limited container with side-margin on smaller screens */
@include container($width, $margin)
```
```scss
/* Cover a container with a link */
@include cover-link($selector, $position, $z-index)
```
```scss
/* Declare properties via sass maps */
@include declare-map($map)
```
```scss
/* Extend the background sideways of a container */
@include extend-background($background, $position, $z-index)
```
```scss
/* Create a flexbox grid from the wrapper and direct children elements */
@include flex-grid($columns, $gap, $gap, $justify-content, $align-items, $selector)
```
```scss
/* Turn on the hardware acceleration of the browser for element */
@include hardware-accelerate($perspective, $hide-backface)
```
```scss
/* Hide text within a container but keep pesudo elements visible */
@include hide-text-except-pseudo($font-size, $color, $line-height, $font-family, $text-align)
```
```scss
/* Visually hide an element */
@include hide-visually($position, $overflow, $visibility, $opacity, $left)
```
```scss
/* Make a list horizontal */
@include horizontal-list($gap, $justify-content, $align-items, $flex-wrap, $side)
```
```scss
/* Align an icon and text next to one another */
@include icon-item($icon-size, $gap, $side, $justify-content, $align-items, $align-icon, $media)
```
```scss
/* Increment z-index value for each element in a container */
@include increment-z-index($from, $to, $index, $selector)
```
```scss
/* Set styles for containers without media queries where you use a main and a wrapper element */
@include inner-container($width, $padding, $inner-selector)
```
```scss
/* Add CSS animation only once */
@include keyframes($name)
```
```scss
/* Create a dynamic, animated CSS circle loader spinner */
@include loader($color, $bg, $size, $width, $animation-speed, $inner-opacity, $inner-color)
```
```scss
/* Generate a menu icon from a single element */
@include menu-icon($width, $height, $gutter, $color, $border-radius, $transition-duration)
```
```scss
/* Morph menu icon to a close (x) icon */
@include menu-icon-close($color)
```
```scss
/* Create object fitted elements */
@include object-fit($object-fit, $object-position, $position, $width, $height)
```
```scss
/* Mixin to place items on a circle */
@include on-circle($item-count, $circle-size, $item-size)
```
```scss
/* Make a list horizontal and add a pipe separator (border) between the items */
@include pipe-list($gap, $border, $justify-content, $align-items, $flex-wrap, $side)
```
```scss
/* Set position top, right, bottom, left, position, width, height and z-index values */
@include position($top, $right, $bottom, $left, $position, $width, $height, $z-index)
```
```scss
/* Add a pseduo element with position */
@include pseudo-with-position($top, $right, $bottom, $left, $position, $width, $height, $z-index, $content, $display, $selector)
```
```scss
/* Add a pseduo element */
@include pseudo($content, $display, $selector)
```
```scss
/* Replace part of the current selector */
@include replace-context($from, $to, $select-after)
```
```scss
/* The padding trick to keep a container the same ratio in different screen sizes */
@include responsive-ratio($x, $y, $position)
```
```scss
/* CSS-only triangle */
@include triangle($direction, $color, $size, $selector)
```
```scss
/* Truncate text in a container */
@include truncate($width)
```
```scss
/* Unhide a previously visually hidden element */
@include unhide-visually($position, $overflow, $visibility, $opacity, $left)
```
```scss
/* Remove list styles */
@include unstyled-list($side)
```
#### Functions

```scss
/* Get the best contrasting color from a list of colors compared to a base */
best-contrast($base, $colors, $tolerance)
```
```scss
/* Add 2 numbers or return calc if they are incompatible */
calc-add($left, $right, $ensure-unit)
```
```scss
/* Substract 2 numbers or return calc if they are incompatible */
calc-substract($left, $right, $ensure-unit)
```
```scss
/* Get CMYK values from a color */
cmyk($color)
```
```scss
/* Get the color value from a list like border or background */
color-from($value)
```
```scss
/* Change 2 colors contrast ratio by weighted balance(0-100)
0 means only second color is changed, while 100 means only the first one */
contrast-balance($color1, $color2, $ratio, $balance)
```
```scss
/* Get the contrast between 2 colors */
contrast-between($color1, $color2)
```
```scss
/* Get a contrast ratio by its official codename */
contrast-ratio-by-name($ratio)
```
```scss
/* Adjust color towards a target color until it reaches a contrast ratio */
contrast-with($color, $target, $ratio, $iterations)
```
```scss
/* Round a number to specified digits */
decimal-round($number, $digits, $mode)
```
```scss
/* Em to Px conversion */
em-to-px($em, $default)
```
```scss
/* Change em to rem (units only, no calculations) */
em-to-rem($em)
```
```scss
/* Convert a number to another unit */
ensure-unit($num, $unit, $default)
```
```scss
/* Escape string to work as a classname */
escape-classname($classname)
```
```scss
/* Fallback for possibly null values */
fallback($values...)
```
```scss
/* Deeply get a value from a map */
get($map, $keys, $fallback)
```
```scss
/* Calculate the coluns width from a columns ratio and a gap value */
grid-column-width($columns, $gap)
```
```scss
/* Check if a number is between a min and max value */
is-between($value, $min, $max)
```
```scss
/* Check if 2 colors contrast enough */
is-contrasting($color1, $color2, $ratio)
```
```scss
/* Check whether a property is valid in CSS3 */
is-property($property)
```
```scss
/* Check whether a pseudo class is valid in CSS3 */
is-pseudo($pseudo, $string)
```
```scss
/* Return Long shadow */
long-shadow($color, $length)
```
```scss
/* Returns XYZ value to RGB channel */
luminance($color)
```
```scss
/* Merge maps recursively */
merge($map1, $map2)
```
```scss
/* Add `$unit` to `$value` */
num-to-length($value, $unit)
```
```scss
/* Px to Em calculation */
px-to-em($px, $default)
```
```scss
/* Px to Rem calculation */
px-to-rem($px, $default)
```
```scss
/* Change rem to em (units only, no calculations) */
rem-to-em($rem)
```
```scss
/* Rem to Px calculation */
rem-to-px($rem, $default)
```
```scss
/* Remove the $nth value of a $list */
remove-nth($list, $nth)
```
```scss
/* Remove $keys (deeply) from $map */
remove($map, $keys...)
```
```scss
/* Viewport sized typography with minimum and maximum values */
responsive-font-size($min-font-size, $min-viewport-width, $max-font-size, $max-viewport-width, $default-font-size)
```
```scss
/* Check whether 2 numbers have the same units */
same-units($number, $number2)
```
```scss
/* Scale lightness by iterations to fix rounding issues */
scale-light($color1, $color2, $ratio, $operation, $iterations)
```
```scss
/* Scale a luminance of a color by a set value */
scale-luminance($color, $luminance)
```
```scss
/* Select all elements after a specific nth value */
select-after($nth, $selector)
```
```scss
/* Select all elements if the number of elements in the container is at least a number */
select-all-out-of-at-least($num, $selector)
```
```scss
/* Select all elements if the number of elements in the container is at most a number */
select-all-out-of-at-most($num, $selector)
```
```scss
/* Select all elements if the number of elements in the container is between a min and max number */
select-all-out-of-between($min, $max, $selector)
```
```scss
/* Select all elements before a specific nth value */
select-before($nth, $selector)
```
```scss
/* Select all elements between a specific first and last nth value */
select-between($first, $last, $selector)
```
```scss
/* Select all even nth elements between a specific first and last nth value */
select-even-between($first, $last, $selector)
```
```scss
/* Select all even nth elements */
select-even($selector)
```
```scss
/* Select all elements except the first and last */
select-except-first-last($selector)
```
```scss
/* Select all elements except the only child */
select-except-only-child($selector)
```
```scss
/* Select all elements except a specific nth */
select-except($nth, $selector)
```
```scss
/* Select the first and last elements */
select-first-last($selector)
```
```scss
/* Select the first of the type element */
select-first-of-type($selector)
```
```scss
/* Select first element if the number of elements in the container equals to a number */
select-first-out-of($num, $selector)
```
```scss
/* Select the first element */
select-first($selector)
```
```scss
/* Select the last of the type element */
select-last-of-type($selector)
```
```scss
/* Select last element if the number of elements in the container equals to a number */
select-last-out-of($num, $selector)
```
```scss
/* Select the last element */
select-last($selector)
```
```scss
/* Select the middle element */
select-middle($num, $selector)
```
```scss
/* Select all nth elements between a first and a last value */
select-nth-between($nth, $first, $last, $selector)
```
```scss
/* Select nth elements from both sides of the container */
select-nth-both-sides($nth, $selector)
```
```scss
/* Select nth elements from after a value */
select-nth-from($nth, $from, $selector)
```
```scss
/* Select every nth element */
select-nth($nth, $selector)
```
```scss
/* Select all odd nth elements between a specific first and last nth value */
select-odd-between($first, $last, $selector)
```
```scss
/* Select all odd nth elements */
select-odd($selector)
```
```scss
/* Select element only if it is an only child of its container */
select-only-child($selector)
```
```scss
/* Mingle a list of selectors to go before and after the other adjacently */
select-owl($selectors)
```
```scss
/* Combine 2 CSS selectors */
selector-combine($selector1, $selector2)
```
```scss
/* Recusrively set map values based on keys */
set($map, $keys, $value, $recursive)
```
```scss
/* Mix a color with black */
shade($color, $ratio)
```
```scss
/* Get the bottom value from a list like margin or padding */
sides-bottom($value)
```
```scss
/* Get the left value from a list like margin or padding */
sides-left($value)
```
```scss
/* Get the right value from a list like margin or padding */
sides-right($value)
```
```scss
/* Get the top value from a list like margin or padding */
sides-top($value)
```
```scss
/* Get the right-left value from a list like margin or padding */
sides-x($value, $mode)
```
```scss
/* Get the top-bottom value from a list like margin or padding */
sides-y($value, $mode)
```
```scss
/* Get a map of sides from a value or list (like margin, padding) */
sides($value)
```
```scss
/* Returns XYZ value to RGB channel */
srgb($channel)
```
```scss
/* Check if string ends with a substring */
str-ends-with($haystack, $needle)
```
```scss
/* Replace `$search` with `$replace` in `$string` */
str-replace($string, $search, $replace)
```
```scss
/* Split a string into a list of strings along a delimiter */
str-split($string, $delimiter, $clean)
```
```scss
/* Check if string starts with a substring */
str-starts-with($haystack, $needle)
```
```scss
/* Cast a string `$value` into a number */
str-to-num($value)
```
```scss
/* Trim whitespace from the end of a string */
str-trim-end($string)
```
```scss
/* Trim whitespace from the beginning of a string */
str-trim-start($string)
```
```scss
/* Trim whitespace off a string */
str-trim($string)
```
```scss
/* Remove units from a number */
strip-unit($number)
```
```scss
/* Base64 encode svg code */
svg-base64($svg, $fill)
```
```scss
/* SVG base64 background url based on $svg with optional $fill color */
svg-url($svg, $fill)
```
```scss
/* Get the tetrad pairs of a color */
tetrad($color, $step)
```
```scss
/* Mix a color with white */
tint($color, $ratio)
```
```scss
/* Get the triad pairs of a color */
triad($color, $step)
```
```scss
/* Generate a unique ID based on passed-in attributes */
unique-id-by-value($values...)
```
```scss
/* Return an RGB channel processed as XYZ */
xyz($channel)
```
</details>
<details>
  <summary>
    <h3 style="display:inline">Animation</h3> - sass versions of animista - <a href="doc/ANIMATION.md">read docs</a>
  </summary>

#### Mixins

```scss
/* Animate bg pan bottom left */
@include animate-bg-pan-bottom-left($animation-settings)
```
```scss
/* Animate bg pan bottom right */
@include animate-bg-pan-bottom-right($animation-settings)
```
```scss
/* Animate bg pan bottom */
@include animate-bg-pan-bottom($animation-settings)
```
```scss
/* Animate bg pan left */
@include animate-bg-pan-left($animation-settings)
```
```scss
/* Animate bg pan right */
@include animate-bg-pan-right($animation-settings)
```
```scss
/* Animate bg pan top left */
@include animate-bg-pan-top-left($animation-settings)
```
```scss
/* Animate bg pan top right */
@include animate-bg-pan-top-right($animation-settings)
```
```scss
/* Animate bg pan top */
@include animate-bg-pan-top($animation-settings)
```
```scss
/* Animate blink alternative */
@include animate-blink-alternative($animation-settings)
```
```scss
/* Animate blink */
@include animate-blink($animation-settings)
```
```scss
/* Animate blur out contract backward */
@include animate-blur-out-contract-backward($animation-settings)
```
```scss
/* Animate blur out contract */
@include animate-blur-out-contract($animation-settings)
```
```scss
/* Animate blur out expand forward */
@include animate-blur-out-expand-forward($animation-settings)
```
```scss
/* Animate blur out expand */
@include animate-blur-out-expand($animation-settings)
```
```scss
/* Animate bounce bottom */
@include animate-bounce-bottom($animation-settings)
```
```scss
/* Animate bounce in backward */
@include animate-bounce-in-backward($animation-settings)
```
```scss
/* Animate bounce in bottom */
@include animate-bounce-in-bottom($animation-settings)
```
```scss
/* Animate bounce in forward */
@include animate-bounce-in-forward($animation-settings)
```
```scss
/* Animate bounce in left */
@include animate-bounce-in-left($animation-settings)
```
```scss
/* Animate bounce in right */
@include animate-bounce-in-right($animation-settings)
```
```scss
/* Animate bounce in top */
@include animate-bounce-in-top($animation-settings)
```
```scss
/* Animate bounce left */
@include animate-bounce-left($animation-settings)
```
```scss
/* Animate bounce out backward */
@include animate-bounce-out-backward($animation-settings)
```
```scss
/* Animate bounce out bottom */
@include animate-bounce-out-bottom($animation-settings)
```
```scss
/* Animate bounce out forward */
@include animate-bounce-out-forward($animation-settings)
```
```scss
/* Animate bounce out left */
@include animate-bounce-out-left($animation-settings)
```
```scss
/* Animate bounce out right */
@include animate-bounce-out-right($animation-settings)
```
```scss
/* Animate bounce out top */
@include animate-bounce-out-top($animation-settings)
```
```scss
/* Animate bounce right */
@include animate-bounce-right($animation-settings)
```
```scss
/* Animate bounce top */
@include animate-bounce-top($animation-settings)
```
```scss
/* Animate bounce */
@include animate-bounce($animation-settings)
```
```scss
/* Animate color change 2x */
@include animate-color-change-2x($animation-settings)
```
```scss
/* Animate color change 3x */
@include animate-color-change-3x($animation-settings)
```
```scss
/* Animate color change 4x */
@include animate-color-change-4x($animation-settings)
```
```scss
/* Animate color change 5x */
@include animate-color-change-5x($animation-settings)
```
```scss
/* Animate fade in backward */
@include animate-fade-in-backward($animation-settings)
```
```scss
/* Animate fade in bottom left */
@include animate-fade-in-bottom-left($animation-settings)
```
```scss
/* Animate fade in bottom right */
@include animate-fade-in-bottom-right($animation-settings)
```
```scss
/* Animate fade in bottom */
@include animate-fade-in-bottom($animation-settings)
```
```scss
/* Animate fade in forward */
@include animate-fade-in-forward($animation-settings)
```
```scss
/* Animate fade in left */
@include animate-fade-in-left($animation-settings)
```
```scss
/* Animate fade in right */
@include animate-fade-in-right($animation-settings)
```
```scss
/* Animate fade in top left */
@include animate-fade-in-top-left($animation-settings)
```
```scss
/* Animate fade in top right */
@include animate-fade-in-top-right($animation-settings)
```
```scss
/* Animate fade in top */
@include animate-fade-in-top($animation-settings)
```
```scss
/* Animate fade in */
@include animate-fade-in($animation-settings)
```
```scss
/* Animate fade out backward */
@include animate-fade-out-backward($animation-settings)
```
```scss
/* Animate fade out bottom left */
@include animate-fade-out-bottom-left($animation-settings)
```
```scss
/* Animate fade out bottom right */
@include animate-fade-out-bottom-right($animation-settings)
```
```scss
/* Animate fade out bottom */
@include animate-fade-out-bottom($animation-settings)
```
```scss
/* Animate fade out forward */
@include animate-fade-out-forward($animation-settings)
```
```scss
/* Animate fade out left */
@include animate-fade-out-left($animation-settings)
```
```scss
/* Animate fade out right */
@include animate-fade-out-right($animation-settings)
```
```scss
/* Animate fade out top left */
@include animate-fade-out-top-left($animation-settings)
```
```scss
/* Animate fade out top right */
@include animate-fade-out-top-right($animation-settings)
```
```scss
/* Animate fade out top */
@include animate-fade-out-top($animation-settings)
```
```scss
/* Animate fade out */
@include animate-fade-out($animation-settings)
```
```scss
/* Animate flicker 1 */
@include animate-flicker-1($animation-settings)
```
```scss
/* Animate flicker 2 */
@include animate-flicker-2($animation-settings)
```
```scss
/* Animate flicker 3 */
@include animate-flicker-3($animation-settings)
```
```scss
/* Animate flicker 4 */
@include animate-flicker-4($animation-settings)
```
```scss
/* Animate flicker 5 */
@include animate-flicker-5($animation-settings)
```
```scss
/* Animate flicker in 1 */
@include animate-flicker-in-1($animation-settings)
```
```scss
/* Animate flicker in 2 */
@include animate-flicker-in-2($animation-settings)
```
```scss
/* Animate flicker out 1 */
@include animate-flicker-out-1($animation-settings)
```
```scss
/* Animate flicker out 2 */
@include animate-flicker-out-2($animation-settings)
```
```scss
/* Animate flip 2 horizontal bottom 1 */
@include animate-flip-2-horizontal-bottom-1($animation-settings)
```
```scss
/* Animate flip 2 horizontal bottom 2 */
@include animate-flip-2-horizontal-bottom-2($animation-settings)
```
```scss
/* Animate flip 2 horizontal bottom backward */
@include animate-flip-2-horizontal-bottom-backward($animation-settings)
```
```scss
/* Animate flip 2 horizontal bottom forward */
@include animate-flip-2-horizontal-bottom-forward($animation-settings)
```
```scss
/* Animate flip 2 horizontal top 1 */
@include animate-flip-2-horizontal-top-1($animation-settings)
```
```scss
/* Animate flip 2 horizontal top 2 */
@include animate-flip-2-horizontal-top-2($animation-settings)
```
```scss
/* Animate flip 2 horizontal top backward */
@include animate-flip-2-horizontal-top-backward($animation-settings)
```
```scss
/* Animate flip 2 horizontal top forward */
@include animate-flip-2-horizontal-top-forward($animation-settings)
```
```scss
/* Animate flip 2 vertical left 1 */
@include animate-flip-2-vertical-left-1($animation-settings)
```
```scss
/* Animate flip 2 vertical left 2 */
@include animate-flip-2-vertical-left-2($animation-settings)
```
```scss
/* Animate flip 2 vertical left backward */
@include animate-flip-2-vertical-left-backward($animation-settings)
```
```scss
/* Animate flip 2 vertical left forward */
@include animate-flip-2-vertical-left-forward($animation-settings)
```
```scss
/* Animate flip 2 vertical right 1 */
@include animate-flip-2-vertical-right-1($animation-settings)
```
```scss
/* Animate flip 2 vertical right 2 */
@include animate-flip-2-vertical-right-2($animation-settings)
```
```scss
/* Animate flip 2 vertical right backward */
@include animate-flip-2-vertical-right-backward($animation-settings)
```
```scss
/* Animate flip 2 vertical right forward */
@include animate-flip-2-vertical-right-forward($animation-settings)
```
```scss
/* Animate flip diagonal 1 backward */
@include animate-flip-diagonal-1-backward($animation-settings)
```
```scss
/* Animate flip diagonal 1 bottom left */
@include animate-flip-diagonal-1-bottom-left($animation-settings)
```
```scss
/* Animate flip diagonal 1 forward */
@include animate-flip-diagonal-1-forward($animation-settings)
```
```scss
/* Animate flip diagonal 1 top right */
@include animate-flip-diagonal-1-top-right($animation-settings)
```
```scss
/* Animate flip diagonal 2 backward */
@include animate-flip-diagonal-2-backward($animation-settings)
```
```scss
/* Animate flip diagonal 2 bottom right */
@include animate-flip-diagonal-2-bottom-right($animation-settings)
```
```scss
/* Animate flip diagonal 2 forward */
@include animate-flip-diagonal-2-forward($animation-settings)
```
```scss
/* Animate flip diagonal 2 top left */
@include animate-flip-diagonal-2-top-left($animation-settings)
```
```scss
/* Animate flip horizontal backward */
@include animate-flip-horizontal-backward($animation-settings)
```
```scss
/* Animate flip horizontal bottom */
@include animate-flip-horizontal-bottom($animation-settings)
```
```scss
/* Animate flip horizontal forward */
@include animate-flip-horizontal-forward($animation-settings)
```
```scss
/* Animate flip horizontal top */
@include animate-flip-horizontal-top($animation-settings)
```
```scss
/* Animate flip in diagonal 1 bottom left */
@include animate-flip-in-diagonal-1-bottom-left($animation-settings)
```
```scss
/* Animate flip in diagonal 1 top right */
@include animate-flip-in-diagonal-1-top-right($animation-settings)
```
```scss
/* Animate flip in diagonal 2 bottom right */
@include animate-flip-in-diagonal-2-bottom-right($animation-settings)
```
```scss
/* Animate flip in diagonal 2 top left */
@include animate-flip-in-diagonal-2-top-left($animation-settings)
```
```scss
/* Animate flip in horizontal bottom */
@include animate-flip-in-horizontal-bottom($animation-settings)
```
```scss
/* Animate flip in horizontal top */
@include animate-flip-in-horizontal-top($animation-settings)
```
```scss
/* Animate flip in vertical left */
@include animate-flip-in-vertical-left($animation-settings)
```
```scss
/* Animate flip in vertical right */
@include animate-flip-in-vertical-right($animation-settings)
```
```scss
/* Animate flip out diagonal 1 bottom left */
@include animate-flip-out-diagonal-1-bottom-left($animation-settings)
```
```scss
/* Animate flip out diagonal 1 top right */
@include animate-flip-out-diagonal-1-top-right($animation-settings)
```
```scss
/* Animate flip out diagonal 2 bottom right */
@include animate-flip-out-diagonal-2-bottom-right($animation-settings)
```
```scss
/* Animate flip out diagonal 2 top left */
@include animate-flip-out-diagonal-2-top-left($animation-settings)
```
```scss
/* Animate flip out horizontal bottom */
@include animate-flip-out-horizontal-bottom($animation-settings)
```
```scss
/* Animate flip out horizontal top */
@include animate-flip-out-horizontal-top($animation-settings)
```
```scss
/* Animate flip out vertical left */
@include animate-flip-out-vertical-left($animation-settings)
```
```scss
/* Animate flip out vertical right */
@include animate-flip-out-vertical-right($animation-settings)
```
```scss
/* Animate flip scale 2 horizontal bottom */
@include animate-flip-scale-2-horizontal-bottom($animation-settings)
```
```scss
/* Animate flip scale 2 horizontal top */
@include animate-flip-scale-2-horizontal-top($animation-settings)
```
```scss
/* Animate flip scale 2 vertical left */
@include animate-flip-scale-2-vertical-left($animation-settings)
```
```scss
/* Animate flip scale 2 vertical right */
@include animate-flip-scale-2-vertical-right($animation-settings)
```
```scss
/* Animate flip scale down diagonal 1 */
@include animate-flip-scale-down-diagonal-1($animation-settings)
```
```scss
/* Animate flip scale down diagonal 2 */
@include animate-flip-scale-down-diagonal-2($animation-settings)
```
```scss
/* Animate flip scale down horizontal */
@include animate-flip-scale-down-horizontal($animation-settings)
```
```scss
/* Animate flip scale down vertical */
@include animate-flip-scale-down-vertical($animation-settings)
```
```scss
/* Animate flip scale up diagonal 1 */
@include animate-flip-scale-up-diagonal-1($animation-settings)
```
```scss
/* Animate flip scale up diagonal 2 */
@include animate-flip-scale-up-diagonal-2($animation-settings)
```
```scss
/* Animate flip scale up horizontal */
@include animate-flip-scale-up-horizontal($animation-settings)
```
```scss
/* Animate flip scale up vertical */
@include animate-flip-scale-up-vertical($animation-settings)
```
```scss
/* Animate flip vertical backward */
@include animate-flip-vertical-backward($animation-settings)
```
```scss
/* Animate flip vertical forward */
@include animate-flip-vertical-forward($animation-settings)
```
```scss
/* Animate flip vertical left */
@include animate-flip-vertical-left($animation-settings)
```
```scss
/* Animate flip vertical right */
@include animate-flip-vertical-right($animation-settings)
```
```scss
/* Animate focus in contract backward */
@include animate-focus-in-contract-backward($animation-settings)
```
```scss
/* Animate focus in contract */
@include animate-focus-in-contract($animation-settings)
```
```scss
/* Animate focus in expand forward */
@include animate-focus-in-expand-forward($animation-settings)
```
```scss
/* Animate focus in expand */
@include animate-focus-in-expand($animation-settings)
```
```scss
/* Animate jello diagonal 1 */
@include animate-jello-diagonal-1($animation-settings)
```
```scss
/* Animate jello diagonal 2 */
@include animate-jello-diagonal-2($animation-settings)
```
```scss
/* Animate jello horizontal */
@include animate-jello-horizontal($animation-settings)
```
```scss
/* Animate jello vertical */
@include animate-jello-vertical($animation-settings)
```
```scss
/* Animate jello */
@include animate-jello($animation-settings)
```
```scss
/* Animate kenburns bottom left */
@include animate-kenburns-bottom-left($animation-settings)
```
```scss
/* Animate kenburns bottom right */
@include animate-kenburns-bottom-right($animation-settings)
```
```scss
/* Animate kenburns bottom */
@include animate-kenburns-bottom($animation-settings)
```
```scss
/* Animate kenburns left */
@include animate-kenburns-left($animation-settings)
```
```scss
/* Animate kenburns right */
@include animate-kenburns-right($animation-settings)
```
```scss
/* Animate kenburns top left */
@include animate-kenburns-top-left($animation-settings)
```
```scss
/* Animate kenburns top right */
@include animate-kenburns-top-right($animation-settings)
```
```scss
/* Animate kenburns top */
@include animate-kenburns-top($animation-settings)
```
```scss
/* Animate ping */
@include animate-ping($animation-settings)
```
```scss
/* Animate puff in bottom left */
@include animate-puff-in-bottom-left($animation-settings)
```
```scss
/* Animate puff in bottom right */
@include animate-puff-in-bottom-right($animation-settings)
```
```scss
/* Animate puff in bottom */
@include animate-puff-in-bottom($animation-settings)
```
```scss
/* Animate puff in center */
@include animate-puff-in-center($animation-settings)
```
```scss
/* Animate puff in horizontal */
@include animate-puff-in-horizontal($animation-settings)
```
```scss
/* Animate puff in left */
@include animate-puff-in-left($animation-settings)
```
```scss
/* Animate puff in right */
@include animate-puff-in-right($animation-settings)
```
```scss
/* Animate puff in top left */
@include animate-puff-in-top-left($animation-settings)
```
```scss
/* Animate puff in top right */
@include animate-puff-in-top-right($animation-settings)
```
```scss
/* Animate puff in top */
@include animate-puff-in-top($animation-settings)
```
```scss
/* Animate puff in vertical */
@include animate-puff-in-vertical($animation-settings)
```
```scss
/* Animate puff out bottom left */
@include animate-puff-out-bottom-left($animation-settings)
```
```scss
/* Animate puff out bottom right */
@include animate-puff-out-bottom-right($animation-settings)
```
```scss
/* Animate puff out bottom */
@include animate-puff-out-bottom($animation-settings)
```
```scss
/* Animate puff out center */
@include animate-puff-out-center($animation-settings)
```
```scss
/* Animate puff out horizontal */
@include animate-puff-out-horizontal($animation-settings)
```
```scss
/* Animate puff out left */
@include animate-puff-out-left($animation-settings)
```
```scss
/* Animate puff out right */
@include animate-puff-out-right($animation-settings)
```
```scss
/* Animate puff out top left */
@include animate-puff-out-top-left($animation-settings)
```
```scss
/* Animate puff out top right */
@include animate-puff-out-top-right($animation-settings)
```
```scss
/* Animate puff out top */
@include animate-puff-out-top($animation-settings)
```
```scss
/* Animate puff out vertical */
@include animate-puff-out-vertical($animation-settings)
```
```scss
/* Animate pulsate backward */
@include animate-pulsate-backward($animation-settings)
```
```scss
/* Animate pulsate forward */
@include animate-pulsate-forward($animation-settings)
```
```scss
/* Animate pulsate */
@include animate-pulsate($animation-settings)
```
```scss
/* Animate roll in blurred bottom */
@include animate-roll-in-blurred-bottom($animation-settings)
```
```scss
/* Animate roll in blurred left */
@include animate-roll-in-blurred-left($animation-settings)
```
```scss
/* Animate roll in blurred right */
@include animate-roll-in-blurred-right($animation-settings)
```
```scss
/* Animate roll in blurred top */
@include animate-roll-in-blurred-top($animation-settings)
```
```scss
/* Animate roll in bottom */
@include animate-roll-in-bottom($animation-settings)
```
```scss
/* Animate roll in left */
@include animate-roll-in-left($animation-settings)
```
```scss
/* Animate roll in right */
@include animate-roll-in-right($animation-settings)
```
```scss
/* Animate roll in top */
@include animate-roll-in-top($animation-settings)
```
```scss
/* Animate roll in */
@include animate-roll-in($animation-settings)
```
```scss
/* Animate roll out blurred bottom */
@include animate-roll-out-blurred-bottom($animation-settings)
```
```scss
/* Animate roll out blurred left */
@include animate-roll-out-blurred-left($animation-settings)
```
```scss
/* Animate roll out blurred right */
@include animate-roll-out-blurred-right($animation-settings)
```
```scss
/* Animate roll out blurred top */
@include animate-roll-out-blurred-top($animation-settings)
```
```scss
/* Animate roll out bottom */
@include animate-roll-out-bottom($animation-settings)
```
```scss
/* Animate roll out left */
@include animate-roll-out-left($animation-settings)
```
```scss
/* Animate roll out right */
@include animate-roll-out-right($animation-settings)
```
```scss
/* Animate roll out top */
@include animate-roll-out-top($animation-settings)
```
```scss
/* Animate roll out */
@include animate-roll-out($animation-settings)
```
```scss
/* Animate rotate 90 bottom clock wise */
@include animate-rotate-90-bottom-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 bottom counter clock wise */
@include animate-rotate-90-bottom-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 bottom left clock wise */
@include animate-rotate-90-bottom-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 bottom left counter clock wise */
@include animate-rotate-90-bottom-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 bottom right clock wise */
@include animate-rotate-90-bottom-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 bottom right counter clock wise */
@include animate-rotate-90-bottom-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 clock wise */
@include animate-rotate-90-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 counter clock wise */
@include animate-rotate-90-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 horizontal backward */
@include animate-rotate-90-horizontal-backward($animation-settings)
```
```scss
/* Animate rotate 90 horizontal forward */
@include animate-rotate-90-horizontal-forward($animation-settings)
```
```scss
/* Animate rotate 90 left clock wise */
@include animate-rotate-90-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 left counter clock wise */
@include animate-rotate-90-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 right clock wise */
@include animate-rotate-90-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 right counter clock wise */
@include animate-rotate-90-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 top clock wise */
@include animate-rotate-90-top-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 top counter clock wise */
@include animate-rotate-90-top-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 top left clock wise */
@include animate-rotate-90-top-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 top left counter clock wise */
@include animate-rotate-90-top-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 top right clock wise */
@include animate-rotate-90-top-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 top right counter clock wise */
@include animate-rotate-90-top-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate 90 vertical backward */
@include animate-rotate-90-vertical-backward($animation-settings)
```
```scss
/* Animate rotate 90 vertical forward */
@include animate-rotate-90-vertical-forward($animation-settings)
```
```scss
/* Animate rotate bottom left */
@include animate-rotate-bottom-left($animation-settings)
```
```scss
/* Animate rotate bottom right */
@include animate-rotate-bottom-right($animation-settings)
```
```scss
/* Animate rotate bottom */
@include animate-rotate-bottom($animation-settings)
```
```scss
/* Animate rotate center */
@include animate-rotate-center($animation-settings)
```
```scss
/* Animate rotate diagonal 1 */
@include animate-rotate-diagonal-1($animation-settings)
```
```scss
/* Animate rotate diagonal 2 */
@include animate-rotate-diagonal-2($animation-settings)
```
```scss
/* Animate rotate diagonal bottom left */
@include animate-rotate-diagonal-bottom-left($animation-settings)
```
```scss
/* Animate rotate diagonal bottom right */
@include animate-rotate-diagonal-bottom-right($animation-settings)
```
```scss
/* Animate rotate diagonal top left */
@include animate-rotate-diagonal-top-left($animation-settings)
```
```scss
/* Animate rotate diagonal top right */
@include animate-rotate-diagonal-top-right($animation-settings)
```
```scss
/* Animate rotate horizontal bottom */
@include animate-rotate-horizontal-bottom($animation-settings)
```
```scss
/* Animate rotate horizontal center */
@include animate-rotate-horizontal-center($animation-settings)
```
```scss
/* Animate rotate horizontal top */
@include animate-rotate-horizontal-top($animation-settings)
```
```scss
/* Animate rotate in 2 backward */
@include animate-rotate-in-2-backward($animation-settings)
```
```scss
/* Animate rotate in 2 bottom left clock wise */
@include animate-rotate-in-2-bottom-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 bottom left counter clock wise */
@include animate-rotate-in-2-bottom-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 bottom right clock wise */
@include animate-rotate-in-2-bottom-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 bottom right counter clock wise */
@include animate-rotate-in-2-bottom-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 clock wise */
@include animate-rotate-in-2-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 counter clock wise */
@include animate-rotate-in-2-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 forward */
@include animate-rotate-in-2-forward($animation-settings)
```
```scss
/* Animate rotate in 2 top left clock wise */
@include animate-rotate-in-2-top-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 top left counter clock wise */
@include animate-rotate-in-2-top-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 top right clock wise */
@include animate-rotate-in-2-top-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate in 2 top right counter clock wise */
@include animate-rotate-in-2-top-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate in bottom left */
@include animate-rotate-in-bottom-left($animation-settings)
```
```scss
/* Animate rotate in bottom right */
@include animate-rotate-in-bottom-right($animation-settings)
```
```scss
/* Animate rotate in bottom */
@include animate-rotate-in-bottom($animation-settings)
```
```scss
/* Animate rotate in center */
@include animate-rotate-in-center($animation-settings)
```
```scss
/* Animate rotate in diagonal 1 */
@include animate-rotate-in-diagonal-1($animation-settings)
```
```scss
/* Animate rotate in diagonal 2 */
@include animate-rotate-in-diagonal-2($animation-settings)
```
```scss
/* Animate rotate in horizontal */
@include animate-rotate-in-horizontal($animation-settings)
```
```scss
/* Animate rotate in left */
@include animate-rotate-in-left($animation-settings)
```
```scss
/* Animate rotate in right */
@include animate-rotate-in-right($animation-settings)
```
```scss
/* Animate rotate in top left */
@include animate-rotate-in-top-left($animation-settings)
```
```scss
/* Animate rotate in top right */
@include animate-rotate-in-top-right($animation-settings)
```
```scss
/* Animate rotate in top */
@include animate-rotate-in-top($animation-settings)
```
```scss
/* Animate rotate in vertical */
@include animate-rotate-in-vertical($animation-settings)
```
```scss
/* Animate rotate left */
@include animate-rotate-left($animation-settings)
```
```scss
/* Animate rotate out 2 backward */
@include animate-rotate-out-2-backward($animation-settings)
```
```scss
/* Animate rotate out 2 bottom left clock wise */
@include animate-rotate-out-2-bottom-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 bottom left counter clock wise */
@include animate-rotate-out-2-bottom-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 bottom right clock wise */
@include animate-rotate-out-2-bottom-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 bottom right counter clock wise */
@include animate-rotate-out-2-bottom-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 clock wise */
@include animate-rotate-out-2-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 counter clock wise */
@include animate-rotate-out-2-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 forward */
@include animate-rotate-out-2-forward($animation-settings)
```
```scss
/* Animate rotate out 2 top left clock wise */
@include animate-rotate-out-2-top-left-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 top left counter clock wise */
@include animate-rotate-out-2-top-left-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 top right clock wise */
@include animate-rotate-out-2-top-right-clock-wise($animation-settings)
```
```scss
/* Animate rotate out 2 top right counter clock wise */
@include animate-rotate-out-2-top-right-counter-clock-wise($animation-settings)
```
```scss
/* Animate rotate out bottom left */
@include animate-rotate-out-bottom-left($animation-settings)
```
```scss
/* Animate rotate out bottom right */
@include animate-rotate-out-bottom-right($animation-settings)
```
```scss
/* Animate rotate out bottom */
@include animate-rotate-out-bottom($animation-settings)
```
```scss
/* Animate rotate out center */
@include animate-rotate-out-center($animation-settings)
```
```scss
/* Animate rotate out diagonal 1 */
@include animate-rotate-out-diagonal-1($animation-settings)
```
```scss
/* Animate rotate out diagonal 2 */
@include animate-rotate-out-diagonal-2($animation-settings)
```
```scss
/* Animate rotate out horizontal */
@include animate-rotate-out-horizontal($animation-settings)
```
```scss
/* Animate rotate out left */
@include animate-rotate-out-left($animation-settings)
```
```scss
/* Animate rotate out right */
@include animate-rotate-out-right($animation-settings)
```
```scss
/* Animate rotate out top left */
@include animate-rotate-out-top-left($animation-settings)
```
```scss
/* Animate rotate out top right */
@include animate-rotate-out-top-right($animation-settings)
```
```scss
/* Animate rotate out top */
@include animate-rotate-out-top($animation-settings)
```
```scss
/* Animate rotate out vertical */
@include animate-rotate-out-vertical($animation-settings)
```
```scss
/* Animate rotate right */
@include animate-rotate-right($animation-settings)
```
```scss
/* Animate rotate scale down diagonal 1 */
@include animate-rotate-scale-down-diagonal-1($animation-settings)
```
```scss
/* Animate rotate scale down diagonal 2 */
@include animate-rotate-scale-down-diagonal-2($animation-settings)
```
```scss
/* Animate rotate scale down horizontal */
@include animate-rotate-scale-down-horizontal($animation-settings)
```
```scss
/* Animate rotate scale down vertical */
@include animate-rotate-scale-down-vertical($animation-settings)
```
```scss
/* Animate rotate scale down */
@include animate-rotate-scale-down($animation-settings)
```
```scss
/* Animate rotate scale up diagonal 1 */
@include animate-rotate-scale-up-diagonal-1($animation-settings)
```
```scss
/* Animate rotate scale up diagonal 2 */
@include animate-rotate-scale-up-diagonal-2($animation-settings)
```
```scss
/* Animate rotate scale up horizontal */
@include animate-rotate-scale-up-horizontal($animation-settings)
```
```scss
/* Animate rotate scale up vertical */
@include animate-rotate-scale-up-vertical($animation-settings)
```
```scss
/* Animate rotate scale up */
@include animate-rotate-scale-up($animation-settings)
```
```scss
/* Animate rotate top left */
@include animate-rotate-top-left($animation-settings)
```
```scss
/* Animate rotate top right */
@include animate-rotate-top-right($animation-settings)
```
```scss
/* Animate rotate top */
@include animate-rotate-top($animation-settings)
```
```scss
/* Animate rotate vert center */
@include animate-rotate-vert-center($animation-settings)
```
```scss
/* Animate rotate vert left */
@include animate-rotate-vert-left($animation-settings)
```
```scss
/* Animate rotate vert right */
@include animate-rotate-vert-right($animation-settings)
```
```scss
/* Animate scale down bottom left */
@include animate-scale-down-bottom-left($animation-settings)
```
```scss
/* Animate scale down bottom right */
@include animate-scale-down-bottom-right($animation-settings)
```
```scss
/* Animate scale down bottom */
@include animate-scale-down-bottom($animation-settings)
```
```scss
/* Animate scale down center */
@include animate-scale-down-center($animation-settings)
```
```scss
/* Animate scale down horizontal center */
@include animate-scale-down-horizontal-center($animation-settings)
```
```scss
/* Animate scale down horizontal left */
@include animate-scale-down-horizontal-left($animation-settings)
```
```scss
/* Animate scale down horizontal right */
@include animate-scale-down-horizontal-right($animation-settings)
```
```scss
/* Animate scale down left */
@include animate-scale-down-left($animation-settings)
```
```scss
/* Animate scale down right */
@include animate-scale-down-right($animation-settings)
```
```scss
/* Animate scale down top left */
@include animate-scale-down-top-left($animation-settings)
```
```scss
/* Animate scale down top right */
@include animate-scale-down-top-right($animation-settings)
```
```scss
/* Animate scale down top */
@include animate-scale-down-top($animation-settings)
```
```scss
/* Animate scale down vertical bottom */
@include animate-scale-down-vertical-bottom($animation-settings)
```
```scss
/* Animate scale down vertical center */
@include animate-scale-down-vertical-center($animation-settings)
```
```scss
/* Animate scale down vertical top */
@include animate-scale-down-vertical-top($animation-settings)
```
```scss
/* Animate scale in bottom left */
@include animate-scale-in-bottom-left($animation-settings)
```
```scss
/* Animate scale in bottom right */
@include animate-scale-in-bottom-right($animation-settings)
```
```scss
/* Animate scale in bottom */
@include animate-scale-in-bottom($animation-settings)
```
```scss
/* Animate scale in center */
@include animate-scale-in-center($animation-settings)
```
```scss
/* Animate scale in horizontal center */
@include animate-scale-in-horizontal-center($animation-settings)
```
```scss
/* Animate scale in horizontal left */
@include animate-scale-in-horizontal-left($animation-settings)
```
```scss
/* Animate scale in horizontal right */
@include animate-scale-in-horizontal-right($animation-settings)
```
```scss
/* Animate scale in left */
@include animate-scale-in-left($animation-settings)
```
```scss
/* Animate scale in right */
@include animate-scale-in-right($animation-settings)
```
```scss
/* Animate scale in top left */
@include animate-scale-in-top-left($animation-settings)
```
```scss
/* Animate scale in top right */
@include animate-scale-in-top-right($animation-settings)
```
```scss
/* Animate scale in top */
@include animate-scale-in-top($animation-settings)
```
```scss
/* Animate scale in vertical bottom */
@include animate-scale-in-vertical-bottom($animation-settings)
```
```scss
/* Animate scale in vertical center */
@include animate-scale-in-vertical-center($animation-settings)
```
```scss
/* Animate scale in vertical top */
@include animate-scale-in-vertical-top($animation-settings)
```
```scss
/* Animate scale out bottom left */
@include animate-scale-out-bottom-left($animation-settings)
```
```scss
/* Animate scale out bottom right */
@include animate-scale-out-bottom-right($animation-settings)
```
```scss
/* Animate scale out bottom */
@include animate-scale-out-bottom($animation-settings)
```
```scss
/* Animate scale out center */
@include animate-scale-out-center($animation-settings)
```
```scss
/* Animate scale out horizontal left */
@include animate-scale-out-horizontal-left($animation-settings)
```
```scss
/* Animate scale out horizontal right */
@include animate-scale-out-horizontal-right($animation-settings)
```
```scss
/* Animate scale out horizontal */
@include animate-scale-out-horizontal($animation-settings)
```
```scss
/* Animate scale out left */
@include animate-scale-out-left($animation-settings)
```
```scss
/* Animate scale out right */
@include animate-scale-out-right($animation-settings)
```
```scss
/* Animate scale out top left */
@include animate-scale-out-top-left($animation-settings)
```
```scss
/* Animate scale out top right */
@include animate-scale-out-top-right($animation-settings)
```
```scss
/* Animate scale out top */
@include animate-scale-out-top($animation-settings)
```
```scss
/* Animate scale out vertical bottom */
@include animate-scale-out-vertical-bottom($animation-settings)
```
```scss
/* Animate scale out vertical top */
@include animate-scale-out-vertical-top($animation-settings)
```
```scss
/* Animate scale out vertical */
@include animate-scale-out-vertical($animation-settings)
```
```scss
/* Animate scale up bottom left */
@include animate-scale-up-bottom-left($animation-settings)
```
```scss
/* Animate scale up bottom right */
@include animate-scale-up-bottom-right($animation-settings)
```
```scss
/* Animate scale up bottom */
@include animate-scale-up-bottom($animation-settings)
```
```scss
/* Animate scale up center */
@include animate-scale-up-center($animation-settings)
```
```scss
/* Animate scale up horizontal center */
@include animate-scale-up-horizontal-center($animation-settings)
```
```scss
/* Animate scale up horizontal left */
@include animate-scale-up-horizontal-left($animation-settings)
```
```scss
/* Animate scale up horizontal right */
@include animate-scale-up-horizontal-right($animation-settings)
```
```scss
/* Animate scale up left */
@include animate-scale-up-left($animation-settings)
```
```scss
/* Animate scale up right */
@include animate-scale-up-right($animation-settings)
```
```scss
/* Animate scale up top left */
@include animate-scale-up-top-left($animation-settings)
```
```scss
/* Animate scale up top right */
@include animate-scale-up-top-right($animation-settings)
```
```scss
/* Animate scale up top */
@include animate-scale-up-top($animation-settings)
```
```scss
/* Animate scale up vertical bottom */
@include animate-scale-up-vertical-bottom($animation-settings)
```
```scss
/* Animate scale up vertical center */
@include animate-scale-up-vertical-center($animation-settings)
```
```scss
/* Animate scale up vertical top */
@include animate-scale-up-vertical-top($animation-settings)
```
```scss
/* Animate shadow drop 2 bottom left */
@include animate-shadow-drop-2-bottom-left($animation-settings)
```
```scss
/* Animate shadow drop 2 bottom right */
@include animate-shadow-drop-2-bottom-right($animation-settings)
```
```scss
/* Animate shadow drop 2 bottom */
@include animate-shadow-drop-2-bottom($animation-settings)
```
```scss
/* Animate shadow drop 2 center */
@include animate-shadow-drop-2-center($animation-settings)
```
```scss
/* Animate shadow drop 2 left right */
@include animate-shadow-drop-2-left-right($animation-settings)
```
```scss
/* Animate shadow drop 2 left */
@include animate-shadow-drop-2-left($animation-settings)
```
```scss
/* Animate shadow drop 2 right */
@include animate-shadow-drop-2-right($animation-settings)
```
```scss
/* Animate shadow drop 2 top bottom */
@include animate-shadow-drop-2-top-bottom($animation-settings)
```
```scss
/* Animate shadow drop 2 top left */
@include animate-shadow-drop-2-top-left($animation-settings)
```
```scss
/* Animate shadow drop 2 top right */
@include animate-shadow-drop-2-top-right($animation-settings)
```
```scss
/* Animate shadow drop 2 top */
@include animate-shadow-drop-2-top($animation-settings)
```
```scss
/* Animate shadow drop bottom left */
@include animate-shadow-drop-bottom-left($animation-settings)
```
```scss
/* Animate shadow drop bottom right */
@include animate-shadow-drop-bottom-right($animation-settings)
```
```scss
/* Animate shadow drop bottom */
@include animate-shadow-drop-bottom($animation-settings)
```
```scss
/* Animate shadow drop center */
@include animate-shadow-drop-center($animation-settings)
```
```scss
/* Animate shadow drop left right */
@include animate-shadow-drop-left-right($animation-settings)
```
```scss
/* Animate shadow drop left */
@include animate-shadow-drop-left($animation-settings)
```
```scss
/* Animate shadow drop right */
@include animate-shadow-drop-right($animation-settings)
```
```scss
/* Animate shadow drop top bottom */
@include animate-shadow-drop-top-bottom($animation-settings)
```
```scss
/* Animate shadow drop top left */
@include animate-shadow-drop-top-left($animation-settings)
```
```scss
/* Animate shadow drop top right */
@include animate-shadow-drop-top-right($animation-settings)
```
```scss
/* Animate shadow drop top */
@include animate-shadow-drop-top($animation-settings)
```
```scss
/* Animate shadow inset bottom left */
@include animate-shadow-inset-bottom-left($animation-settings)
```
```scss
/* Animate shadow inset bottom right */
@include animate-shadow-inset-bottom-right($animation-settings)
```
```scss
/* Animate shadow inset bottom */
@include animate-shadow-inset-bottom($animation-settings)
```
```scss
/* Animate shadow inset center */
@include animate-shadow-inset-center($animation-settings)
```
```scss
/* Animate shadow inset left right */
@include animate-shadow-inset-left-right($animation-settings)
```
```scss
/* Animate shadow inset left */
@include animate-shadow-inset-left($animation-settings)
```
```scss
/* Animate shadow inset right */
@include animate-shadow-inset-right($animation-settings)
```
```scss
/* Animate shadow inset top bottom */
@include animate-shadow-inset-top-bottom($animation-settings)
```
```scss
/* Animate shadow inset top left */
@include animate-shadow-inset-top-left($animation-settings)
```
```scss
/* Animate shadow inset top right */
@include animate-shadow-inset-top-right($animation-settings)
```
```scss
/* Animate shadow inset top */
@include animate-shadow-inset-top($animation-settings)
```
```scss
/* Animate shadow pop bottom left */
@include animate-shadow-pop-bottom-left($animation-settings)
```
```scss
/* Animate shadow pop bottom right */
@include animate-shadow-pop-bottom-right($animation-settings)
```
```scss
/* Animate shadow pop top left */
@include animate-shadow-pop-top-left($animation-settings)
```
```scss
/* Animate shadow pop top right */
@include animate-shadow-pop-top-right($animation-settings)
```
```scss
/* Animate shake bottom left */
@include animate-shake-bottom-left($animation-settings)
```
```scss
/* Animate shake bottom right */
@include animate-shake-bottom-right($animation-settings)
```
```scss
/* Animate shake bottom */
@include animate-shake-bottom($animation-settings)
```
```scss
/* Animate shake horizontal */
@include animate-shake-horizontal($animation-settings)
```
```scss
/* Animate shake left right */
@include animate-shake-left-right($animation-settings)
```
```scss
/* Animate shake left */
@include animate-shake-left($animation-settings)
```
```scss
/* Animate shake right */
@include animate-shake-right($animation-settings)
```
```scss
/* Animate shake top left */
@include animate-shake-top-left($animation-settings)
```
```scss
/* Animate shake top right */
@include animate-shake-top-right($animation-settings)
```
```scss
/* Animate shake top */
@include animate-shake-top($animation-settings)
```
```scss
/* Animate shake vertical */
@include animate-shake-vertical($animation-settings)
```
```scss
/* Animate shake */
@include animate-shake($animation-settings)
```
```scss
/* Animate slide backward bottom left */
@include animate-slide-backward-bottom-left($animation-settings)
```
```scss
/* Animate slide backward bottom right */
@include animate-slide-backward-bottom-right($animation-settings)
```
```scss
/* Animate slide backward bottom */
@include animate-slide-backward-bottom($animation-settings)
```
```scss
/* Animate slide backward center */
@include animate-slide-backward-center($animation-settings)
```
```scss
/* Animate slide backward left */
@include animate-slide-backward-left($animation-settings)
```
```scss
/* Animate slide backward right */
@include animate-slide-backward-right($animation-settings)
```
```scss
/* Animate slide backward top left */
@include animate-slide-backward-top-left($animation-settings)
```
```scss
/* Animate slide backward top right */
@include animate-slide-backward-top-right($animation-settings)
```
```scss
/* Animate slide backward top */
@include animate-slide-backward-top($animation-settings)
```
```scss
/* Animate slide bottom left */
@include animate-slide-bottom-left($animation-settings)
```
```scss
/* Animate slide bottom right */
@include animate-slide-bottom-right($animation-settings)
```
```scss
/* Animate slide bottom */
@include animate-slide-bottom($animation-settings)
```
```scss
/* Animate slide forward bottom left */
@include animate-slide-forward-bottom-left($animation-settings)
```
```scss
/* Animate slide forward bottom right */
@include animate-slide-forward-bottom-right($animation-settings)
```
```scss
/* Animate slide forward bottom */
@include animate-slide-forward-bottom($animation-settings)
```
```scss
/* Animate slide forward center */
@include animate-slide-forward-center($animation-settings)
```
```scss
/* Animate slide forward left */
@include animate-slide-forward-left($animation-settings)
```
```scss
/* Animate slide forward right */
@include animate-slide-forward-right($animation-settings)
```
```scss
/* Animate slide forward top left */
@include animate-slide-forward-top-left($animation-settings)
```
```scss
/* Animate slide forward top right */
@include animate-slide-forward-top-right($animation-settings)
```
```scss
/* Animate slide forward top */
@include animate-slide-forward-top($animation-settings)
```
```scss
/* Animate slide in backward bottom left */
@include animate-slide-in-backward-bottom-left($animation-settings)
```
```scss
/* Animate slide in backward bottom right */
@include animate-slide-in-backward-bottom-right($animation-settings)
```
```scss
/* Animate slide in backward bottom */
@include animate-slide-in-backward-bottom($animation-settings)
```
```scss
/* Animate slide in backward center */
@include animate-slide-in-backward-center($animation-settings)
```
```scss
/* Animate slide in backward left */
@include animate-slide-in-backward-left($animation-settings)
```
```scss
/* Animate slide in backward right */
@include animate-slide-in-backward-right($animation-settings)
```
```scss
/* Animate slide in backward top left */
@include animate-slide-in-backward-top-left($animation-settings)
```
```scss
/* Animate slide in backward top right */
@include animate-slide-in-backward-top-right($animation-settings)
```
```scss
/* Animate slide in backward top */
@include animate-slide-in-backward-top($animation-settings)
```
```scss
/* Animate slide in blurred bottom left */
@include animate-slide-in-blurred-bottom-left($animation-settings)
```
```scss
/* Animate slide in blurred bottom right */
@include animate-slide-in-blurred-bottom-right($animation-settings)
```
```scss
/* Animate slide in blurred bottom */
@include animate-slide-in-blurred-bottom($animation-settings)
```
```scss
/* Animate slide in blurred left */
@include animate-slide-in-blurred-left($animation-settings)
```
```scss
/* Animate slide in blurred right */
@include animate-slide-in-blurred-right($animation-settings)
```
```scss
/* Animate slide in blurred top left */
@include animate-slide-in-blurred-top-left($animation-settings)
```
```scss
/* Animate slide in blurred top right */
@include animate-slide-in-blurred-top-right($animation-settings)
```
```scss
/* Animate slide in blurred top */
@include animate-slide-in-blurred-top($animation-settings)
```
```scss
/* Animate slide in bottom left */
@include animate-slide-in-bottom-left($animation-settings)
```
```scss
/* Animate slide in bottom right */
@include animate-slide-in-bottom-right($animation-settings)
```
```scss
/* Animate slide in bottom */
@include animate-slide-in-bottom($animation-settings)
```
```scss
/* Animate slide in elliptic bottom backward */
@include animate-slide-in-elliptic-bottom-backward($animation-settings)
```
```scss
/* Animate slide in elliptic bottom forward */
@include animate-slide-in-elliptic-bottom-forward($animation-settings)
```
```scss
/* Animate slide in elliptic left backward */
@include animate-slide-in-elliptic-left-backward($animation-settings)
```
```scss
/* Animate slide in elliptic left forward */
@include animate-slide-in-elliptic-left-forward($animation-settings)
```
```scss
/* Animate slide in elliptic right backward */
@include animate-slide-in-elliptic-right-backward($animation-settings)
```
```scss
/* Animate slide in elliptic right forward */
@include animate-slide-in-elliptic-right-forward($animation-settings)
```
```scss
/* Animate slide in elliptic top backward */
@include animate-slide-in-elliptic-top-backward($animation-settings)
```
```scss
/* Animate slide in elliptic top forward */
@include animate-slide-in-elliptic-top-forward($animation-settings)
```
```scss
/* Animate slide in forward bottom left */
@include animate-slide-in-forward-bottom-left($animation-settings)
```
```scss
/* Animate slide in forward bottom right */
@include animate-slide-in-forward-bottom-right($animation-settings)
```
```scss
/* Animate slide in forward bottom */
@include animate-slide-in-forward-bottom($animation-settings)
```
```scss
/* Animate slide in forward center */
@include animate-slide-in-forward-center($animation-settings)
```
```scss
/* Animate slide in forward left */
@include animate-slide-in-forward-left($animation-settings)
```
```scss
/* Animate slide in forward right */
@include animate-slide-in-forward-right($animation-settings)
```
```scss
/* Animate slide in forward top left */
@include animate-slide-in-forward-top-left($animation-settings)
```
```scss
/* Animate slide in forward top right */
@include animate-slide-in-forward-top-right($animation-settings)
```
```scss
/* Animate slide in forward top */
@include animate-slide-in-forward-top($animation-settings)
```
```scss
/* Animate slide in left */
@include animate-slide-in-left($animation-settings)
```
```scss
/* Animate slide in right */
@include animate-slide-in-right($animation-settings)
```
```scss
/* Animate slide in top left */
@include animate-slide-in-top-left($animation-settings)
```
```scss
/* Animate slide in top right */
@include animate-slide-in-top-right($animation-settings)
```
```scss
/* Animate slide in top */
@include animate-slide-in-top($animation-settings)
```
```scss
/* Animate slide left */
@include animate-slide-left($animation-settings)
```
```scss
/* Animate slide out backward bottom left */
@include animate-slide-out-backward-bottom-left($animation-settings)
```
```scss
/* Animate slide out backward bottom right */
@include animate-slide-out-backward-bottom-right($animation-settings)
```
```scss
/* Animate slide out backward bottom */
@include animate-slide-out-backward-bottom($animation-settings)
```
```scss
/* Animate slide out backward center */
@include animate-slide-out-backward-center($animation-settings)
```
```scss
/* Animate slide out backward left */
@include animate-slide-out-backward-left($animation-settings)
```
```scss
/* Animate slide out backward right */
@include animate-slide-out-backward-right($animation-settings)
```
```scss
/* Animate slide out backward top left */
@include animate-slide-out-backward-top-left($animation-settings)
```
```scss
/* Animate slide out backward top right */
@include animate-slide-out-backward-top-right($animation-settings)
```
```scss
/* Animate slide out backward top */
@include animate-slide-out-backward-top($animation-settings)
```
```scss
/* Animate slide out blurred bottom left */
@include animate-slide-out-blurred-bottom-left($animation-settings)
```
```scss
/* Animate slide out blurred bottom right */
@include animate-slide-out-blurred-bottom-right($animation-settings)
```
```scss
/* Animate slide out blurred bottom */
@include animate-slide-out-blurred-bottom($animation-settings)
```
```scss
/* Animate slide out blurred left */
@include animate-slide-out-blurred-left($animation-settings)
```
```scss
/* Animate slide out blurred right */
@include animate-slide-out-blurred-right($animation-settings)
```
```scss
/* Animate slide out blurred top left */
@include animate-slide-out-blurred-top-left($animation-settings)
```
```scss
/* Animate slide out blurred top right */
@include animate-slide-out-blurred-top-right($animation-settings)
```
```scss
/* Animate slide out blurred top */
@include animate-slide-out-blurred-top($animation-settings)
```
```scss
/* Animate slide out bottom left */
@include animate-slide-out-bottom-left($animation-settings)
```
```scss
/* Animate slide out bottom right */
@include animate-slide-out-bottom-right($animation-settings)
```
```scss
/* Animate slide out bottom */
@include animate-slide-out-bottom($animation-settings)
```
```scss
/* Animate slide out elliptic bottom backward */
@include animate-slide-out-elliptic-bottom-backward($animation-settings)
```
```scss
/* Animate slide out elliptic bottom forward */
@include animate-slide-out-elliptic-bottom-forward($animation-settings)
```
```scss
/* Animate slide out elliptic left backward */
@include animate-slide-out-elliptic-left-backward($animation-settings)
```
```scss
/* Animate slide out elliptic left forward */
@include animate-slide-out-elliptic-left-forward($animation-settings)
```
```scss
/* Animate slide out elliptic right backward */
@include animate-slide-out-elliptic-right-backward($animation-settings)
```
```scss
/* Animate slide out elliptic right forward */
@include animate-slide-out-elliptic-right-forward($animation-settings)
```
```scss
/* Animate slide out elliptic top backward */
@include animate-slide-out-elliptic-top-backward($animation-settings)
```
```scss
/* Animate slide out elliptic top forward */
@include animate-slide-out-elliptic-top-forward($animation-settings)
```
```scss
/* Animate slide out forward bottom left */
@include animate-slide-out-forward-bottom-left($animation-settings)
```
```scss
/* Animate slide out forward bottom right */
@include animate-slide-out-forward-bottom-right($animation-settings)
```
```scss
/* Animate slide out forward bottom */
@include animate-slide-out-forward-bottom($animation-settings)
```
```scss
/* Animate slide out forward center */
@include animate-slide-out-forward-center($animation-settings)
```
```scss
/* Animate slide out forward left */
@include animate-slide-out-forward-left($animation-settings)
```
```scss
/* Animate slide out forward right */
@include animate-slide-out-forward-right($animation-settings)
```
```scss
/* Animate slide out forward top left */
@include animate-slide-out-forward-top-left($animation-settings)
```
```scss
/* Animate slide out forward top right */
@include animate-slide-out-forward-top-right($animation-settings)
```
```scss
/* Animate slide out forward top */
@include animate-slide-out-forward-top($animation-settings)
```
```scss
/* Animate slide out left */
@include animate-slide-out-left($animation-settings)
```
```scss
/* Animate slide out right */
@include animate-slide-out-right($animation-settings)
```
```scss
/* Animate slide out top left */
@include animate-slide-out-top-left($animation-settings)
```
```scss
/* Animate slide out top right */
@include animate-slide-out-top-right($animation-settings)
```
```scss
/* Animate slide out top */
@include animate-slide-out-top($animation-settings)
```
```scss
/* Animate slide right */
@include animate-slide-right($animation-settings)
```
```scss
/* Animate slide rotate horizontal b backward */
@include animate-slide-rotate-horizontal-b-backward($animation-settings)
```
```scss
/* Animate slide rotate horizontal b forward */
@include animate-slide-rotate-horizontal-b-forward($animation-settings)
```
```scss
/* Animate slide rotate horizontal bottom */
@include animate-slide-rotate-horizontal-bottom($animation-settings)
```
```scss
/* Animate slide rotate horizontal t backward */
@include animate-slide-rotate-horizontal-t-backward($animation-settings)
```
```scss
/* Animate slide rotate horizontal t forward */
@include animate-slide-rotate-horizontal-t-forward($animation-settings)
```
```scss
/* Animate slide rotate horizontal top */
@include animate-slide-rotate-horizontal-top($animation-settings)
```
```scss
/* Animate slide rotate vertical l backward */
@include animate-slide-rotate-vertical-l-backward($animation-settings)
```
```scss
/* Animate slide rotate vertical l forward */
@include animate-slide-rotate-vertical-l-forward($animation-settings)
```
```scss
/* Animate slide rotate vertical left */
@include animate-slide-rotate-vertical-left($animation-settings)
```
```scss
/* Animate slide rotate vertical r backward */
@include animate-slide-rotate-vertical-r-backward($animation-settings)
```
```scss
/* Animate slide rotate vertical r forward */
@include animate-slide-rotate-vertical-r-forward($animation-settings)
```
```scss
/* Animate slide rotate vertical right */
@include animate-slide-rotate-vertical-right($animation-settings)
```
```scss
/* Animate slide top left */
@include animate-slide-top-left($animation-settings)
```
```scss
/* Animate slide top right */
@include animate-slide-top-right($animation-settings)
```
```scss
/* Animate slide top */
@include animate-slide-top($animation-settings)
```
```scss
/* Animate slit in diagonal 1 */
@include animate-slit-in-diagonal-1($animation-settings)
```
```scss
/* Animate slit in diagonal 2 */
@include animate-slit-in-diagonal-2($animation-settings)
```
```scss
/* Animate slit in horizontal */
@include animate-slit-in-horizontal($animation-settings)
```
```scss
/* Animate slit in vertical */
@include animate-slit-in-vertical($animation-settings)
```
```scss
/* Animate slit out diagonal 1 */
@include animate-slit-out-diagonal-1($animation-settings)
```
```scss
/* Animate slit out diagonal 2 */
@include animate-slit-out-diagonal-2($animation-settings)
```
```scss
/* Animate slit out horizontal */
@include animate-slit-out-horizontal($animation-settings)
```
```scss
/* Animate slit out vertical */
@include animate-slit-out-vertical($animation-settings)
```
```scss
/* Animate flash */
@include animate-flash($animation-settings)
```
```scss
/* Animate head shake */
@include animate-head-shake($animation-settings)
```
```scss
/* Animate heartbeat */
@include animate-heartbeat($animation-settings)
```
```scss
/* Animate hinge */
@include animate-hinge($animation-settings)
```
```scss
/* Animate jack in the box */
@include animate-jack-in-the-box($animation-settings)
```
```scss
/* Animate rubber band */
@include animate-rubber-band($animation-settings)
```
```scss
/* Animate tada */
@include animate-tada($animation-settings)
```
```scss
/* Animate swing bottom backward */
@include animate-swing-bottom-backward($animation-settings)
```
```scss
/* Animate swing bottom forward */
@include animate-swing-bottom-forward($animation-settings)
```
```scss
/* Animate swing bottom left backward */
@include animate-swing-bottom-left-backward($animation-settings)
```
```scss
/* Animate swing bottom left forward */
@include animate-swing-bottom-left-forward($animation-settings)
```
```scss
/* Animate swing bottom right backward */
@include animate-swing-bottom-right-backward($animation-settings)
```
```scss
/* Animate swing bottom right forward */
@include animate-swing-bottom-right-forward($animation-settings)
```
```scss
/* Animate swing in bottom backward */
@include animate-swing-in-bottom-backward($animation-settings)
```
```scss
/* Animate swing in bottom forward */
@include animate-swing-in-bottom-forward($animation-settings)
```
```scss
/* Animate swing in left backward */
@include animate-swing-in-left-backward($animation-settings)
```
```scss
/* Animate swing in left forward */
@include animate-swing-in-left-forward($animation-settings)
```
```scss
/* Animate swing in right backward */
@include animate-swing-in-right-backward($animation-settings)
```
```scss
/* Animate swing in right forward */
@include animate-swing-in-right-forward($animation-settings)
```
```scss
/* Animate swing in top backward */
@include animate-swing-in-top-backward($animation-settings)
```
```scss
/* Animate swing in top forward */
@include animate-swing-in-top-forward($animation-settings)
```
```scss
/* Animate swing left backward */
@include animate-swing-left-backward($animation-settings)
```
```scss
/* Animate swing left forward */
@include animate-swing-left-forward($animation-settings)
```
```scss
/* Animate swing out bottom backward */
@include animate-swing-out-bottom-backward($animation-settings)
```
```scss
/* Animate swing out bottom forward */
@include animate-swing-out-bottom-forward($animation-settings)
```
```scss
/* Animate swing out left backward */
@include animate-swing-out-left-backward($animation-settings)
```
```scss
/* Animate swing out left forward */
@include animate-swing-out-left-forward($animation-settings)
```
```scss
/* Animate swing out right backward */
@include animate-swing-out-right-backward($animation-settings)
```
```scss
/* Animate swing out right forward */
@include animate-swing-out-right-forward($animation-settings)
```
```scss
/* Animate swing out top backward */
@include animate-swing-out-top-backward($animation-settings)
```
```scss
/* Animate swing out top forward */
@include animate-swing-out-top-forward($animation-settings)
```
```scss
/* Animate swing right backward */
@include animate-swing-right-backward($animation-settings)
```
```scss
/* Animate swing right forward */
@include animate-swing-right-forward($animation-settings)
```
```scss
/* Animate swing top backward */
@include animate-swing-top-backward($animation-settings)
```
```scss
/* Animate swing top forward */
@include animate-swing-top-forward($animation-settings)
```
```scss
/* Animate swing top left backward */
@include animate-swing-top-left-backward($animation-settings)
```
```scss
/* Animate swing top left forward */
@include animate-swing-top-left-forward($animation-settings)
```
```scss
/* Animate swing top right backward */
@include animate-swing-top-right-backward($animation-settings)
```
```scss
/* Animate swing top right forward */
@include animate-swing-top-right-forward($animation-settings)
```
```scss
/* Animate swing */
@include animate-swing($animation-settings)
```
```scss
/* Animate swirl in backward */
@include animate-swirl-in-backward($animation-settings)
```
```scss
/* Animate swirl in bottom backward */
@include animate-swirl-in-bottom-backward($animation-settings)
```
```scss
/* Animate swirl in bottom forward */
@include animate-swirl-in-bottom-forward($animation-settings)
```
```scss
/* Animate swirl in bottom left backward */
@include animate-swirl-in-bottom-left-backward($animation-settings)
```
```scss
/* Animate swirl in bottom left forward */
@include animate-swirl-in-bottom-left-forward($animation-settings)
```
```scss
/* Animate swirl in bottom right backward */
@include animate-swirl-in-bottom-right-backward($animation-settings)
```
```scss
/* Animate swirl in bottom right forward */
@include animate-swirl-in-bottom-right-forward($animation-settings)
```
```scss
/* Animate swirl in forward */
@include animate-swirl-in-forward($animation-settings)
```
```scss
/* Animate swirl in left backward */
@include animate-swirl-in-left-backward($animation-settings)
```
```scss
/* Animate swirl in left forward */
@include animate-swirl-in-left-forward($animation-settings)
```
```scss
/* Animate swirl in right backward */
@include animate-swirl-in-right-backward($animation-settings)
```
```scss
/* Animate swirl in right forward */
@include animate-swirl-in-right-forward($animation-settings)
```
```scss
/* Animate swirl in top backward */
@include animate-swirl-in-top-backward($animation-settings)
```
```scss
/* Animate swirl in top forward */
@include animate-swirl-in-top-forward($animation-settings)
```
```scss
/* Animate swirl in top left backward */
@include animate-swirl-in-top-left-backward($animation-settings)
```
```scss
/* Animate swirl in top left forward */
@include animate-swirl-in-top-left-forward($animation-settings)
```
```scss
/* Animate swirl in top right backward */
@include animate-swirl-in-top-right-backward($animation-settings)
```
```scss
/* Animate swirl in top right forward */
@include animate-swirl-in-top-right-forward($animation-settings)
```
```scss
/* Animate swirl out backward */
@include animate-swirl-out-backward($animation-settings)
```
```scss
/* Animate swirl out bottom backward */
@include animate-swirl-out-bottom-backward($animation-settings)
```
```scss
/* Animate swirl out bottom forward */
@include animate-swirl-out-bottom-forward($animation-settings)
```
```scss
/* Animate swirl out bottom left backward */
@include animate-swirl-out-bottom-left-backward($animation-settings)
```
```scss
/* Animate swirl out bottom left forward */
@include animate-swirl-out-bottom-left-forward($animation-settings)
```
```scss
/* Animate swirl out bottom right backward */
@include animate-swirl-out-bottom-right-backward($animation-settings)
```
```scss
/* Animate swirl out bottom right forward */
@include animate-swirl-out-bottom-right-forward($animation-settings)
```
```scss
/* Animate swirl out forward */
@include animate-swirl-out-forward($animation-settings)
```
```scss
/* Animate swirl out left backward */
@include animate-swirl-out-left-backward($animation-settings)
```
```scss
/* Animate swirl out left forward */
@include animate-swirl-out-left-forward($animation-settings)
```
```scss
/* Animate swirl out right backward */
@include animate-swirl-out-right-backward($animation-settings)
```
```scss
/* Animate swirl out right forward */
@include animate-swirl-out-right-forward($animation-settings)
```
```scss
/* Animate swirl out top backward */
@include animate-swirl-out-top-backward($animation-settings)
```
```scss
/* Animate swirl out top forward */
@include animate-swirl-out-top-forward($animation-settings)
```
```scss
/* Animate swirl out top left backward */
@include animate-swirl-out-top-left-backward($animation-settings)
```
```scss
/* Animate swirl out top left forward */
@include animate-swirl-out-top-left-forward($animation-settings)
```
```scss
/* Animate swirl out top right backward */
@include animate-swirl-out-top-right-backward($animation-settings)
```
```scss
/* Animate swirl out top right forward */
@include animate-swirl-out-top-right-forward($animation-settings)
```
```scss
/* Animate text blur out */
@include animate-text-blur-out($animation-settings)
```
```scss
/* Animate text flicker in glow */
@include animate-text-flicker-in-glow($animation-settings)
```
```scss
/* Animate text flicker out glow */
@include animate-text-flicker-out-glow($animation-settings)
```
```scss
/* Animate text focus in */
@include animate-text-focus-in($animation-settings)
```
```scss
/* Animate text pop up bottom left */
@include animate-text-pop-up-bottom-left($animation-settings)
```
```scss
/* Animate text pop up bottom right */
@include animate-text-pop-up-bottom-right($animation-settings)
```
```scss
/* Animate text pop up bottom */
@include animate-text-pop-up-bottom($animation-settings)
```
```scss
/* Animate text pop up left */
@include animate-text-pop-up-left($animation-settings)
```
```scss
/* Animate text pop up right */
@include animate-text-pop-up-right($animation-settings)
```
```scss
/* Animate text pop up top left */
@include animate-text-pop-up-top-left($animation-settings)
```
```scss
/* Animate text pop up top right */
@include animate-text-pop-up-top-right($animation-settings)
```
```scss
/* Animate text pop up top */
@include animate-text-pop-up-top($animation-settings)
```
```scss
/* Animate text shadow drop bottom left */
@include animate-text-shadow-drop-bottom-left($animation-settings)
```
```scss
/* Animate text shadow drop bottom right */
@include animate-text-shadow-drop-bottom-right($animation-settings)
```
```scss
/* Animate text shadow drop bottom */
@include animate-text-shadow-drop-bottom($animation-settings)
```
```scss
/* Animate text shadow drop center */
@include animate-text-shadow-drop-center($animation-settings)
```
```scss
/* Animate text shadow drop left */
@include animate-text-shadow-drop-left($animation-settings)
```
```scss
/* Animate text shadow drop right */
@include animate-text-shadow-drop-right($animation-settings)
```
```scss
/* Animate text shadow drop top left */
@include animate-text-shadow-drop-top-left($animation-settings)
```
```scss
/* Animate text shadow drop top right */
@include animate-text-shadow-drop-top-right($animation-settings)
```
```scss
/* Animate text shadow drop top */
@include animate-text-shadow-drop-top($animation-settings)
```
```scss
/* Animate text shadow pop bottom left */
@include animate-text-shadow-pop-bottom-left($animation-settings)
```
```scss
/* Animate text shadow pop bottom right */
@include animate-text-shadow-pop-bottom-right($animation-settings)
```
```scss
/* Animate text shadow pop bottom */
@include animate-text-shadow-pop-bottom($animation-settings)
```
```scss
/* Animate text shadow pop left */
@include animate-text-shadow-pop-left($animation-settings)
```
```scss
/* Animate text shadow pop right */
@include animate-text-shadow-pop-right($animation-settings)
```
```scss
/* Animate text shadow pop top left */
@include animate-text-shadow-pop-top-left($animation-settings)
```
```scss
/* Animate text shadow pop top right */
@include animate-text-shadow-pop-top-right($animation-settings)
```
```scss
/* Animate text shadow pop top */
@include animate-text-shadow-pop-top($animation-settings)
```
```scss
/* Animate tracking in contract backward bottom */
@include animate-tracking-in-contract-backward-bottom($animation-settings)
```
```scss
/* Animate tracking in contract backward top */
@include animate-tracking-in-contract-backward-top($animation-settings)
```
```scss
/* Animate tracking in contract backward */
@include animate-tracking-in-contract-backward($animation-settings)
```
```scss
/* Animate tracking in contract */
@include animate-tracking-in-contract($animation-settings)
```
```scss
/* Animate tracking in expand forward bottom */
@include animate-tracking-in-expand-forward-bottom($animation-settings)
```
```scss
/* Animate tracking in expand forward top */
@include animate-tracking-in-expand-forward-top($animation-settings)
```
```scss
/* Animate tracking in expand forward */
@include animate-tracking-in-expand-forward($animation-settings)
```
```scss
/* Animate tracking in expand */
@include animate-tracking-in-expand($animation-settings)
```
```scss
/* Animate tracking out contract backward bottom */
@include animate-tracking-out-contract-backward-bottom($animation-settings)
```
```scss
/* Animate tracking out contract backward top */
@include animate-tracking-out-contract-backward-top($animation-settings)
```
```scss
/* Animate tracking out contract backward */
@include animate-tracking-out-contract-backward($animation-settings)
```
```scss
/* Animate tracking out contract */
@include animate-tracking-out-contract($animation-settings)
```
```scss
/* Animate tracking out expand forward bottom */
@include animate-tracking-out-expand-forward-bottom($animation-settings)
```
```scss
/* Animate tracking out expand forward top */
@include animate-tracking-out-expand-forward-top($animation-settings)
```
```scss
/* Animate tracking out expand forward */
@include animate-tracking-out-expand-forward($animation-settings)
```
```scss
/* Animate tracking out expand */
@include animate-tracking-out-expand($animation-settings)
```
```scss
/* Animate vibrate 1 */
@include animate-vibrate-1($animation-settings)
```
```scss
/* Animate vibrate 2 */
@include animate-vibrate-2($animation-settings)
```
```scss
/* Animate vibrate 3 */
@include animate-vibrate-3($animation-settings)
```
```scss
/* Animate wobble horizontal bottom */
@include animate-wobble-horizontal-bottom($animation-settings)
```
```scss
/* Animate wobble horizontal top */
@include animate-wobble-horizontal-top($animation-settings)
```
```scss
/* Animate wobble vertical left */
@include animate-wobble-vertical-left($animation-settings)
```
```scss
/* Animate wobble vertical right */
@include animate-wobble-vertical-right($animation-settings)
```
```scss
/* Animate wobble */
@include animate-wobble($animation-settings)
```
</details>
<!-- end automated part -->

<br>

## USAGE EXAMPLE

You can `@use` each component on its own without loading the entire (heavy) library

```scss
@use "sass-styler/utility/flex-grid" as *;

div.columns {
    @include flex-grid(1 of 3, 20px);
}
```

Or you `@use` load a whole module to use all of its components

```scss
@use "sass-styler/theme" as *;

@include reset();
@include normalize();

.card {
    @include elevation(3);
}

```
**Note:** loading all modules or modules with a huge number of components (like the animation module) can cause slower processing times
