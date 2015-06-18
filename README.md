# Print HTML Element v0.3.1

Prints the HTML of a provided element.

Forked from [jQuery.printElement](https://github.com/erikzaadi/jQueryPlugins/tree/master/jQuery.printElement) to remove jQuery dependency.

This fork removes some features while adding others (IE8 support is also removed for now). More features will be added as needed or requested.
PR's welcome.

## Installation
Print HTML Element is available on both NPM and Bower.

`npm install print-html-element`

`bower install print-html-element`


## Usage


### Include
In a CommonJS module system via Browserify or Webpack
```js
    var PE = require("print-html-element");
```

Good old-fashioned way
```html
    <script type="text/javascript" src="js/print-html-element.js"></script>
```
```js
    var PE = PrintElement();
```

### Examples
```js
    PE.printElement( document.getElementById('toPrint') );
    PE.printHtml("<h1>Let's print this h1</h1>");

    PE.printHtml("<h1>Let's print this h1</h1>", {templateString: "<header>I'm part of the template header</header>{{printBody}}<footer>I'm part of the template footer</footer>"});
```

An HTML class `pe-body` is also added to the body of the print area which can be used as an additional style hook (on top of the regular print media query/stylesheet)

### Options and methods supported
```js
    var opts = {
        printMode: 'iframe',
        pageTitle: '',
        templateString: ''
    };

    PE.printElement( elem, opts ); // Prints a DOM Element
    PE.printHtml( str, opts ); // Prints an HTML string
```

- printMode determines which method is used to print. As a hidden `iframe` (default), or `popup` window
- pageTitle sets the printed page title (defaults to blank)
- templateString allows you to define a template that the html will be printed within.
    - Use `{{printBody}}` within the template to signify where the HTML should be injected


## Possible future features

- Integrate a template system (such as handlebars)
- Support multiple and/or custom template variables
- Support for multiple elements/HTML strings
- Promise/callback support


## License

`print-html-element` is [MIT licensed](LICENSE.txt)