# Print HTML Element v0.2.0

Prints the HTML of a provided element.

Forked from [jQuery.printElement](https://github.com/erikzaadi/jQueryPlugins/tree/master/jQuery.printElement) to remove jQuery dependency.

This fork is currently stripped down in terms of features and full cross-browser testing (IE8 support removed). More features will be added as needed or requested.
PR's welcome.


## Usage

In a CommonJS module system via Browserify or Webpack
```js
    var PE = require("print-html-element");

    PE.printElement( document.getElementById('toPrint') );
    PE.printHtml("<h1>Let's print this h1</h1>");
```

Good old-fashioned way
```html
    <script type="text/javascript" src="js/print-html-element.js"></script>
```
```js
    var PE = PrintElement();

    PE.printElement( document.getElementById('toPrint') );
    PE.printHtml("<h1>Let's print this h1</h1>");
```

### Options and methods supported
```js
    var opts = {
        printMode: '',
        pageTitle: ''
    };

    PE.printElement( elem, opts ); // Prints a DOM Element
    PE.printHtml( str, opts ); // Prints an HTML string
```

- printMode determines which method is used to print. As a hidden iframe (default), or popup window
- pageTitle sets the printed page title (defaults to blank)