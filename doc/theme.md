# SASS STYLER

## THEME

Helpers to create your own design system

**Table of Content**

<table>
  <thead>
    <tr>
      <th>Mixin</th>
      <th>Function</th>
      <th>Variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="vertical-align:top">
        <a href="#mixin-define-color-palette-vars">define-color-palette-vars</a>
        <br>
        <a href="#mixin-define-vars">define-vars</a>
        <br>
        <a href="#mixin-vars">vars</a>
        <br>
        <a href="#mixin-define-var">define-var</a>
        <br>
        <a href="#mixin-v">v</a>
        <br>
        <a href="#mixin-elevation">elevation</a>
        <br>
        <a href="#mixin-font-family">font-family</a>
        <br>
        <a href="#mixin-define-font-family-vars">define-font-family-vars</a>
        <br>
        <a href="#mixin-media">media</a>
        <br>
        <a href="#mixin-normalize">normalize</a>
        <br>
        <a href="#mixin-reset">reset</a>
        <br>
        <a href="#mixin-select">select</a>
        <br>
        <a href="#mixin-define-size-vars">define-size-vars</a>
        <br>
        <a href="#mixin-transition">transition</a>
      </td>
      <td style="vertical-align:top">
        <a href="#function-asset">asset</a>
        <br>
        <a href="#function-color">color</a>
        <br>
        <a href="#function-c">c</a>
        <br>
        <a href="#function-get-var">get-var</a>
        <br>
        <a href="#function-v">v</a>
        <br>
        <a href="#function-elevation">elevation</a>
        <br>
        <a href="#function-font-family">font-family</a>
        <br>
        <a href="#function-select">select</a>
        <br>
        <a href="#function-size">size</a>
        <br>
        <a href="#function-s">s</a>
      </td>
      <td style="vertical-align:top">
        <a href="#variable-asset-path">asset-path</a>
        <br>
        <a href="#variable-color-palette">color-palette</a>
        <br>
        <a href="#variable-var-prepend">var-prepend</a>
        <br>
        <a href="#variable-elevations">elevations</a>
        <br>
        <a href="#variable-font-families">font-families</a>
        <br>
        <a href="#variable-media-queries">media-queries</a>
        <br>
        <a href="#variable-selectors">selectors</a>
        <br>
        <a href="#variable-sizes">sizes</a>
        <br>
        <a href="#variable-transition-settings">transition-settings</a>
      </td>
    </tr>
  </tbody>
</table>

### Mixins


#### define-color-palette-vars <a id="mixin-define-color-palette-vars">&nbsp;</a>
Define color CSS variables for the palette

```scss
/* Define color CSS variables for the palette */
@include define-color-palette-vars
```
**Type:** mixin

**Requires:** <a href="/src/theme/define-vars.scss">define-var</a>, <a href="/src/theme/color.scss">color-palette</a>

**File source:** <a href="/src/theme/color.scss">src/theme/color.scss</a>

<br>




#### define-vars <a id="mixin-define-vars">&nbsp;</a>
Define CSS variables via a Sass map

```scss
/* Define CSS variables via a Sass map */
@include define-vars($vars-map)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>vars-map</td><td>The sass map data</td><td><code>Map</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/define-vars.scss">var-prepend</a>

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>

<br>




#### vars <a id="mixin-vars">&nbsp;</a>
Define CSS variables via a Sass map

```scss
/* Define CSS variables via a Sass map */
/* alias of define-vars */
@include vars($vars-map)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>vars-map</td><td>The sass map data</td><td><code>Map</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/define-vars.scss">define-vars</a>

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>

<br>




#### define-var <a id="mixin-define-var">&nbsp;</a>
Define CSS variable

```scss
/* Define CSS variable */
@include define-var($name, $value)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>name</td><td>Variable name</td><td><code>String</code></td><td>-</td></tr><tr><td>value</td><td>Variable value</td><td><code>*</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/define-vars.scss">var-prepend</a>

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>

<br>




#### v <a id="mixin-v">&nbsp;</a>
Define CSS variable

```scss
/* Define CSS variable */
/* alias of define-var */
@include v($name, $value)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>name</td><td>Variable name</td><td><code>String</code></td><td>-</td></tr><tr><td>value</td><td>Variable value</td><td><code>*</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/define-vars.scss">var-prepend</a>

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>

<br>




#### elevation <a id="mixin-elevation">&nbsp;</a>
Add box shadow based on elevation settings

```scss
/* Add box shadow based on elevation settings */
@include elevation($level)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>level</td><td>Level of elevation</td><td><code>Number</code></td><td>1</td></tr></table>

**Requires:** <a href="/src/theme/elevation.scss">elevation</a>

**File source:** <a href="/src/theme/elevation.scss">src/theme/elevation.scss</a>

<br>




#### font-family <a id="mixin-font-family">&nbsp;</a>
Add named font-family

```scss
/* Add named font-family */
@include font-family($id)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>id</td><td>Font Family name ID</td><td><code>Null</code> <code>String</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/font-family.scss">font-family</a>

**File source:** <a href="/src/theme/font-family.scss">src/theme/font-family.scss</a>

<br>




#### define-font-family-vars <a id="mixin-define-font-family-vars">&nbsp;</a>
Define font family CSS variables

```scss
/* Define font family CSS variables */
@include define-font-family-vars
```
**Type:** mixin

**Requires:** <a href="/src/theme/define-vars.scss">define-var</a>, <a href="/src/theme/font-family.scss">font-families</a>

**File source:** <a href="/src/theme/font-family.scss">src/theme/font-family.scss</a>

<br>




#### media <a id="mixin-media">&nbsp;</a>
Generate media queries via saved keywords or simplified syntax

```scss
/* Generate media queries via saved keywords or simplified syntax */
@include media($query...)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>query...</td><td>Media query keywords or short syntax</td><td><code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/media.scss">_media-parse-lists</a>

**File source:** <a href="/src/theme/media.scss">src/theme/media.scss</a>

<br>




#### normalize <a id="mixin-normalize">&nbsp;</a>
Normalize with best practices combined from bootstrap, tailwind, etc

```scss
/* Normalize with best practices combined from bootstrap, tailwind, etc */
@include normalize
```
**Type:** mixin

**Requires:** <a href="/src/theme/define-vars.scss">v</a>

**File source:** <a href="/src/theme/normalize.scss">src/theme/normalize.scss</a>

<br>




#### reset <a id="mixin-reset">&nbsp;</a>
Reset styles

```scss
/* Reset styles */
@include reset
```
**Type:** mixin

**File source:** <a href="/src/theme/reset.scss">src/theme/reset.scss</a>

<br>




#### select <a id="mixin-select">&nbsp;</a>
Get selectors from a named selector group

```scss
/* Get selectors from a named selector group */
@include select($ids)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>ids</td><td>Selector group id(s)</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/select.scss">select</a>

**File source:** <a href="/src/theme/select.scss">src/theme/select.scss</a>

<br>




#### define-size-vars <a id="mixin-define-size-vars">&nbsp;</a>
Define size CSS variables

```scss
/* Define size CSS variables */
@include define-size-vars
```
**Type:** mixin

**Requires:** <a href="/src/theme/define-vars.scss">define-var</a>, <a href="/src/theme/size.scss">sizes</a>

**File source:** <a href="/src/theme/size.scss">src/theme/size.scss</a>

<br>




#### transition <a id="mixin-transition">&nbsp;</a>
Add transition to elements with fallback to default settings

```scss
/* Add transition to elements with fallback to default settings */
@include transition($property, $duration, $timing-function, $delay)
```
**Type:** mixin
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>property</td><td>Property or properties to transition</td><td><code>String</code> <code>Array</code></td><td>null</td></tr><tr><td>duration</td><td>Duration of transition in seconds</td><td><code>Time</code></td><td>null</td></tr><tr><td>timing-function</td><td>Easing of transition</td><td><code>String</code></td><td>null</td></tr><tr><td>delay</td><td>Delay of transition in seconds</td><td><code>Time</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/utility/get.scss">get</a>, <a href="/src/theme/transition.scss">transition-settings</a>

**File source:** <a href="/src/theme/transition.scss">src/theme/transition.scss</a>

<br>

### Functions


#### asset <a id="function-asset">&nbsp;</a>
Get an asset url prepended by a default base path

```scss
/* Get an asset url prepended by a default base path */
asset($file)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>file</td><td>The file url relative to the base</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/asset.scss">asset-path</a>

**File source:** <a href="/src/theme/asset.scss">src/theme/asset.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function asset($file) {
    @return url($asset-path + $file);
}
```

</details>

<br>




#### color <a id="function-color">&nbsp;</a>
Return and manipulate color

```scss
/* Return and manipulate color */
color($args)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>args</td><td>Color name, level and/or "contrast-of"</td><td><code>List</code> <code>Color</code> <code>String</code> <code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/utility/get.scss">get</a>, <a href="/src/utility/best-contrast.scss">best-contrast</a>, <a href="/src/theme/color.scss">color-palette</a>

**File source:** <a href="/src/theme/color.scss">src/theme/color.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function color($args) {
    $color: null;
    $color-map: null;
    $level: null;
    $contrast: null;
    @each $item in $args {
        @if meta.type-of($item) == color {
            $color: $item;
        }
        @if map.has-key($color-palette, $item) {
            $color-map: get($color-palette, $item, $item);
            @if meta.type-of($color-map) == color {
                $color: $color-map;
                $color-map: null;
            }
        }
        @if meta.type-of($item) == number {
            $level: $item;
        }
        @if $item == contrast-of or $item == contrast {
            $contrast: true;
        }
    }
    @if $color-map and $level and map.has-key($color-map, $level) {
        $color: get($color-map, $level);
        $color-map: null;
        $level: null;
    }
    @if $color-map {
        $color: get($color-map, default);
        $color-map: null;
    }
    @if meta.type-of($color) != color {
        @return $color;
    }
    @if $level {
        $level: if($level > 1, math.div($level, 1000), $level);
        $color: color.change($color, $lightness: (1% - $level) * 100);
    }
    @if $contrast {
        $color: best-contrast($color);
    }
    $alpha: if(string.index($color + "", "rgba"), color.alpha($color), var(--text-opacity, 1));
    $color: rgba(color.red($color), color.green($color), color.blue($color), $alpha);
    @return $color;
}
```

</details>

<br>




#### c <a id="function-c">&nbsp;</a>
Return and manipulate color

```scss
/* Return and manipulate color */
/* alias of color */
c($args)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>args</td><td>Color name, level and/or "contrast-of"</td><td><code>List</code> <code>Color</code> <code>String</code> <code>Number</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/color.scss">color</a>

**File source:** <a href="/src/theme/color.scss">src/theme/color.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function c($args) {
    @return color($args...);
}
```

</details>

<br>




#### get-var <a id="function-get-var">&nbsp;</a>
Get a CSS variable defined via Sass

```scss
/* Get a CSS variable defined via Sass */
get-var($name, $fallback)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>name</td><td>Variable name</td><td><code>String</code></td><td>-</td></tr><tr><td>fallback</td><td>Fallback value</td><td><code>*</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/theme/define-vars.scss">var-prepend</a>

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function get-var($name, $fallback) {
    @return if($fallback, var(--#{$var-prepend + $name}, $fallback), var(--#{$var-prepend + $name}));
}
```

</details>

<br>




#### v <a id="function-v">&nbsp;</a>
Get a CSS variable defined via Sass

```scss
/* Get a CSS variable defined via Sass */
/* alias of get-var */
v($name, $fallback)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>name</td><td>Variable name</td><td><code>String</code></td><td>-</td></tr><tr><td>fallback</td><td>Fallback value</td><td><code>*</code></td><td>null</td></tr></table>

**Requires:** <a href="/src/theme/define-vars.scss">get-var</a>

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function v($name, $fallback) {
    @return get-var($name, $fallback);
}
```

</details>

<br>




#### elevation <a id="function-elevation">&nbsp;</a>
Return box shadow based on elevation settings

```scss
/* Return box shadow based on elevation settings */
elevation($level)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>level</td><td>Level of elevation</td><td><code>Number</code></td><td>1</td></tr></table>

**Requires:** <a href="/src/utility/get.scss">get</a>, <a href="/src/theme/elevation.scss">elevations</a>

**File source:** <a href="/src/theme/elevation.scss">src/theme/elevation.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function elevation($level) {
	@return get($elevations, $level);
}
```

</details>

<br>




#### font-family <a id="function-font-family">&nbsp;</a>
Return named font-family

```scss
/* Return named font-family */
font-family($id)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>id</td><td>Font Family name ID</td><td><code>Null</code> <code>String</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/utility/get.scss">get</a>, <a href="/src/theme/font-family.scss">font-families</a>

**File source:** <a href="/src/theme/font-family.scss">src/theme/font-family.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function font-family($id) {
    @return get($font-families, $id, $id);
}
```

</details>

<br>




#### select <a id="function-select">&nbsp;</a>
Get selectors from a named selector group

```scss
/* Get selectors from a named selector group */
select($ids)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>ids</td><td>Selector group id(s)</td><td><code>String</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/utility/get.scss">get</a>, <a href="/src/theme/select.scss">selectors</a>

**File source:** <a href="/src/theme/select.scss">src/theme/select.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function select($ids) {
    $selector: "";
    @if not $ids {
        @return "&";
    }
    $ids: if(meta.type-of($ids) == list, $ids, ($ids));
    @each $id in $ids {
        $append: $id;
        @if map.has-key($selectors, $id) {
            $append: map.get($selectors, $id);
        }
        $selector: if($selector == "", "#{$append}", "#{$selector}, #{$append}");
    }
    @return if(string.length($selector) > 0, $selector, "&");
}
```

</details>

<br>




#### size <a id="function-size">&nbsp;</a>
Return named size

```scss
/* Return named size */
size($id)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>id</td><td>Size name ID</td><td><code>Null</code> <code>String</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/utility/get.scss">get</a>, <a href="/src/theme/size.scss">sizes</a>

**File source:** <a href="/src/theme/size.scss">src/theme/size.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function size($id) {
    @return if($id, get($sizes, $id, $id), get($sizes, default, $id));
}
```

</details>

<br>




#### s <a id="function-s">&nbsp;</a>
Return named size

```scss
/* Return named size */
/* alias of size */
s($id)
```
**Type:** function
**Parameters:**
<table>
  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr><tr><td>id</td><td>Size name ID</td><td><code>Null</code> <code>String</code> <code>List</code></td><td>-</td></tr></table>

**Requires:** <a href="/src/theme/size.scss">size</a>

**File source:** <a href="/src/theme/size.scss">src/theme/size.scss</a>
<details><summary><strong>Source</strong></summary>

```scss 

@function s($id) {
    @return size($id);
}
```

</details>

<br>

### Variables


#### asset-path <a id="variable-asset-path">&nbsp;</a>
The default asset path to prepend

```scss
/* The default asset path to prepend */
$asset-path
```
**Type:** variable

**File source:** <a href="/src/theme/asset.scss">src/theme/asset.scss</a>

<br>




#### color-palette <a id="variable-color-palette">&nbsp;</a>
Named colors palette

```scss
/* Named colors palette */
$color-palette
```
**Type:** variable

**File source:** <a href="/src/theme/color.scss">src/theme/color.scss</a>

<br>




#### var-prepend <a id="variable-var-prepend">&nbsp;</a>
Manage CSS variables via Sass variables

```scss
/* Manage CSS variables via Sass variables */
$var-prepend
```
**Type:** variable

**File source:** <a href="/src/theme/define-vars.scss">src/theme/define-vars.scss</a>

<br>




#### elevations <a id="variable-elevations">&nbsp;</a>
Elevation level box-shadow settings

```scss
/* Elevation level box-shadow settings */
$elevations
```
**Type:** variable

**File source:** <a href="/src/theme/elevation.scss">src/theme/elevation.scss</a>

<br>




#### font-families <a id="variable-font-families">&nbsp;</a>
Named font families

```scss
/* Named font families */
$font-families
```
**Type:** variable

**File source:** <a href="/src/theme/font-family.scss">src/theme/font-family.scss</a>

<br>




#### media-queries <a id="variable-media-queries">&nbsp;</a>
Named shorthands for media queries

```scss
/* Named shorthands for media queries */
$media-queries
```
**Type:** variable

**File source:** <a href="/src/theme/media.scss">src/theme/media.scss</a>

<br>




#### selectors <a id="variable-selectors">&nbsp;</a>
Predefined selectors

```scss
/* Predefined selectors */
$selectors
```
**Type:** variable

**File source:** <a href="/src/theme/select.scss">src/theme/select.scss</a>

<br>




#### sizes <a id="variable-sizes">&nbsp;</a>
Named size values

```scss
/* Named size values */
$sizes
```
**Type:** variable

**File source:** <a href="/src/theme/size.scss">src/theme/size.scss</a>

<br>




#### transition-settings <a id="variable-transition-settings">&nbsp;</a>
Default transition settings

```scss
/* Default transition settings */
$transition-settings
```
**Type:** variable

**File source:** <a href="/src/theme/transition.scss">src/theme/transition.scss</a>

<br>



<a href="/README.md">Back to Sass Styler</a>
