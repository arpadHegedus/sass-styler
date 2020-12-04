# Utilities

## get

### Description

Deeply get a value from a map

### Parameters

| Name     | Description                                                  | Type        | Default Value |
| -------- | ------------------------------------------------------------ | ----------- | ------------- |
| map      | The map                                                      | Map         |               |
| keys     | The key or list of keys (if lookup is supposed to go deeper) | List|String |               |
| fallback | A fallback value if the key is not found                     | *           | null          |

### Returns

Any type

### Used By

* [function] `theme`

* [function] `theme`

* [function] `theme`

* [function] `sides-bottom`

* [function] `sides-left`

* [function] `sides-right`

* [function] `sides-top`

* [function] `sides-x`

* [function] `sides-x`

* [function] `sides-x`

* [function] `sides-x`

* [function] `sides-x`

* [function] `sides-x`

* [function] `sides-y`

* [function] `sides-y`

* [function] `sides-y`

* [function] `sides-y`

* [function] `sides-y`

* [function] `sides-y`

### Source

```scss
@function get($map, $keys, $fallback: null) { 
    @each $key in $keys {
        @if meta.type-of($map) != map or not map.has-key($map, $key) {
            @return $fallback;
        } @else {
            $map: map.get($map, $key);
        }
    }

    @return $map;
}
```

## sides-bottom

### Description

Get the bottom value from a list like margin or padding

### Parameters

| Name  | Description    | Type        | Default Value |
| ----- | -------------- | ----------- | ------------- |
| value | The list value | Number|List |               |

### Returns

`Null|Number`

### Requires

* [function] `get` 

* [function] `sides` 

### Source

```scss
@function sides-bottom($value) { 
    @return map.get(sides($value), bottom);
}
```

## sides-left

### Description

Get the left value from a list like margin or padding

### Parameters

| Name  | Description    | Type        | Default Value |
| ----- | -------------- | ----------- | ------------- |
| value | The list value | Number|List |               |

### Returns

`Null|Number`

### Requires

* [function] `get` 

* [function] `sides` 

### Source

```scss
@function sides-left($value) { 
    @return map.get(sides($value), left);
}
```

## sides-right

### Description

Get the right value from a list like margin or padding

### Parameters

| Name  | Description    | Type        | Default Value |
| ----- | -------------- | ----------- | ------------- |
| value | The list value | Number|List |               |

### Returns

`Null|Number`

### Requires

* [function] `get` 

* [function] `sides` 

### Source

```scss
@function sides-right($value) { 
    @return map.get(sides($value), right);
}
```

## sides-top

### Description

Get the top value from a list like margin or padding

### Parameters

| Name  | Description    | Type        | Default Value |
| ----- | -------------- | ----------- | ------------- |
| value | The list value | Number|List |               |

### Returns

`Null|Number`

### Requires

* [function] `get` 

* [function] `sides` 

### Source

```scss
@function sides-top($value) { 
    @return map.get(sides($value), top);
}
```

## sides-x

### Description

Get the right-left value from a list like margin or padding

### Parameters

| Name  | Description                                            | Type        | Default Value |
| ----- | ------------------------------------------------------ | ----------- | ------------- |
| value | The list value                                         | Number|List |               |
| mode  | Whether to return the average or summary of the values | String      | average       |

### Returns

`Null|Number`

### Requires

* [function] `sides` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

### Source

```scss
@function sides-x($value, $mode: average) { 
    $sides: sides($value);

    @if map.get($sides, right) == null or map.get($sides, left) == null {
        @return null;
    }

    @if $mode == average {
        @return (map.get($sides, right) + map.get($sides, left)) / 2;
    } @else {
        @return map.get($sides, right) + map.get($sides, left);
    }
}
```

## sides-y

### Description

Get the top-bottom value from a list like margin or padding

### Parameters

| Name  | Description                                            | Type        | Default Value |
| ----- | ------------------------------------------------------ | ----------- | ------------- |
| value | The list value                                         | Number|List |               |
| mode  | Whether to return the average or summary of the values | String      | average       |

### Returns

`Null|Number`

### Requires

* [function] `sides` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [function] `get` 

### Source

```scss
@function sides-y($value, $mode: average) { 
    $sides: sides($value);

    @if map.get($sides, top) == null or map.get($sides, bottom) == null {
        @return null;
    }

    @if $mode == average {
        @return (map.get($sides, top) + map.get($sides, bottom)) / 2;
    } @else {
        @return map.get($sides, top) + map.get($sides, bottom);
    }
}
```

## sides

### Description

Get a map of sides from a value or list (like margin, padding)

### Parameters

| Name  | Description                             | Type        | Default Value |
| ----- | --------------------------------------- | ----------- | ------------- |
| value | Multi-size value (like margin, padding) | Number|List |               |

### Returns

`Map`

### Example

```scss
sides(1px)             /* (top: 1px, right: 1px, bottom: 1px, left: 1px) */
sides(1px 2px)         /* (top: 1px, right: 2px, bottom: 1px, left: 2px) */
sides(1px 2px 3px)     /* (top: 1px, right: 2px, bottom: 3px, left: 2px) */
sides(1px 2px 3px 4px) /* (top: 1px, right: 2px, bottom: 3px, left: 4px) */
```

### Used By

* [function] `sides-bottom`

* [function] `sides-left`

* [function] `sides-right`

* [function] `sides-top`

* [function] `sides-x`

* [function] `sides-y`

### Source

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

## str-replace

### Description

Replace `$search` with `$replace` in `$string`

### Parameters

| Name    | Description          | Type   | Default Value |
| ------- | -------------------- | ------ | ------------- |
| string  | Initial string       | String |               |
| search  | Substring to replace | String |               |
| replace | New value            | String | &quot;&quot;            |

### Returns

`String`

### Links

[https://css-tricks.com/snippets/sass/str-replace-function/](https://css-tricks.com/snippets/sass/str-replace-function/>)

### Author

* Hugo Giraudel

### Source

```scss
@function str-replace($string, $search, $replace: &quot;&quot;) { 
    $index: string.index($string, $search);

    @if $index {
        @return string.slice($string, 1, $index - 1) + $replace +
            str-replace(
                string.slice($string, $index + string.length($search)),
                $search,
                $replace
            );
    }

    @return $string;
}
```
