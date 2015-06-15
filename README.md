#Print Element

Prints the HTML of a provided element.

Forked from [https://github.com/erikzaadi/jQueryPlugins/tree/master/jQuery.printElement](jQuery.printElement) to remove jQuery dependency.

This fork is currently stripped down in terms of features and full cross-browser testing. More features will be added as needed or requested.
PR's welcome


##Usage

In a CommonJS module system via Browserify or Webpack
```js
    var PE = require("print-element");
    PE.print( document.getElementById('toPrint') );
```

Good old-fashioned way
```html
    <script type="text/javascript" src="js/print-element.js"></script>
```
```js
    var PE = PrintElement();
    PE.print( document.getElementById('toPrint') );
```

###Options supported
```js
    var opts = {
        printMode: '',
        pageTitle: ''
    };

    PE.print( document.getElementById('toPrint'), opts );
```

- printMode determines which method is used to print. As a hidden iframe (default), or popup window
- pageTitle sets the printed page title (defaults to blank)