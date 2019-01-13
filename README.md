# Print HTML Element

Prints the HTML of a provided element.

Originally forked from [jQuery.printElement](https://github.com/erikzaadi/jQueryPlugins/tree/master/jQuery.printElement) to remove jQuery dependency.

This fork removes some features while adding others (IE8 support is also removed for now). More features will be added as needed or requested.
PR's welcome.

View examples [here](https://rpdasilva.github.io/print-html-element/)

## Installation
Print HTML Element is available on both NPM and Bower.

`npm install print-html-element`

`bower install print-html-element`


## Usage


### Include
In a CommonJS module system via Browserify or Webpack
```js
    var PHE = require("print-html-element");
```

Good old-fashioned way
```html
    <script type="text/javascript" src="print-html-element.js"></script>
```
```js
    // Alias global variable printHtmlElement for purposes of example
    var PHE = printHtmlElement;
```

### Examples
View examples [here](https://rpdasilva.github.io/print-html-element/)

```js
    PHE.printElement( document.getElementById('toPrint') );
    PHE.printHtml('<h1>Let\'s print this h1</h1>');

    PHE.printHtml('<h1>Let\'s print this h1</h1>', {templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>'});
```

An HTML class `pe-body` is also added to the body of the print area which can be used as an additional style hook (on top of the regular print media query/stylesheet)

### Options and methods supported
```js
    opts = {
        printMode: string;
        pageTitle: string;
        templateString: string;
        popupProperties: string;
        stylesheets: string | string[];
        styles: string | string[];
    };

    PHE.printElement( elem, opts ); // Prints a DOM Element
    PHE.printHtml( str, opts ); // Prints an HTML string
```

- printMode determines which method is used to print. As a hidden `iframe` (default), or `popup` window
- pageTitle sets the printed page title (defaults to blank)
- templateString allows you to define a template that the html will be printed within.
    - Use `{{printBody}}` within the template to signify where the HTML should be injected
- popupProperties set the window features (such as `menubar`, `scrollbars`, etc. in `popup` mode
- stylesheets overrides parsed `link` tags and instead injects `link` tags with hrefs specified as either a single string or array of strings
- styles overrides parsed `style` tags and instead injects `style` blocks specified as either a single string or array of strings


## Possible future features

- Integrate a template system (such as handlebars)
- Support multiple and/or custom template variables
- Support for multiple elements/HTML strings
- Promise/callback support


## License

`print-html-element` is [MIT licensed](LICENSE.txt)