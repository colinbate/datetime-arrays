# Date & Time Arrays

So I found that when passing date only or time only values around in JSON, there wasn't a great format to do so. In order to keep the payload size small when passing around a lot of these, I tend to use arrays. This is a library for dealing with them.

Everything here is assumed local time, there is no offset or time zone information recorded or managed.

A UTC mode and offset support is something which may be added if there is a need.

## Installation

You can download the package from NPM with the following:

```
npm install datetime-arrays
```

Or you can clone the repository:

```
git clone https://github.com/colinbate/datetime-arrays
```

This script is packaged as a UMD module, so you should be able to incorporate it into your project as expected. In node.js you should be able to `require('datetime-arrays');` or in the browser:

```html
<script src="datetime-arrays.js"></script>
```

## Usage / API

If using the library as a browser global, it exposes `datetimeArrays` on the `window`. Otherwise this API is attached to whatever your module system assigns it to.

For the purposes of this library, a time array looks like: `[hour, minute, second]` where hour is a 24-hour clock value.

Likewise a date array is like: `[year, month, day]`. Note that the month is 1-based!

### `time`

* `time.toString([7, 2, 0]) -> "7:02"`
  Note that if the second is `0` it is omitted.
* `time.fromString("10:05:34") -> [10, 5, 34]`
