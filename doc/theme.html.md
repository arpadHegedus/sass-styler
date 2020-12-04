# theme

## normalize

### Description

Modern Normalize

### Links

[https://github.com/sindresorhus/modern-normalize](https://github.com/sindresorhus/modern-normalize>)

### Author

* Sindre Sorhus

### Source

```scss
@mixin normalize() { 

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        -moz-tab-size: 4;
        tab-size: 4;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        font-family:
            system-ui,
            -apple-system,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji";
    }

    hr {
        height: 0;
        color: inherit;
    }

    abbr[title] {
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp,
    pre {
        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            "Liberation Mono",
            Menlo,
            monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    table {
        text-indent: 0;
        border-color: inherit;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }

    ::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    :-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    :-moz-ui-invalid {
        box-shadow: none;
    }

    legend {
        padding: 0;
    }

    progress {
        vertical-align: baseline;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    summary {
        display: list-item;
    }
}
```

## theme

### Description

Theme settings global

### Type

`Map`

### Used By

* [function] `theme`

* [function] `theme`

* [function] `theme`

### Source

```scss
$theme: ()
```

## theme

### Description

Get a setting from the global theme settings.

### Parameters

| Name     | Description                                        | Type        | Default Value |
| -------- | -------------------------------------------------- | ----------- | ------------- |
| path     | Path to deeply get from the global theme settings. | String|List |               |
| fallback | A fallback value if the key is not found           | *           | null          |

### Returns

Any type

### Requires

* [function] `get` 

* [function] `get` 

* [function] `get` 

* [variable] `theme` 

* [variable] `theme` 

* [variable] `theme` 

### Source

```scss
@function theme($path, $fallback: null) { 
    @return if(get($theme, $path, "&%£@") == "&%£@", get($theme, list.join(default, $path), $fallback), get($theme, $path, $fallback));
}
```
