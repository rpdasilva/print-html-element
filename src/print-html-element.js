/*
* Print HTML Element
*
* Copyright (c) 2015 Philip Da Silva
*
* Forked from jQuery.printElement
* (https://github.com/erikzaadi/jQueryPlugins/tree/master/jQuery.printElement)
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*/

class PrintElement {
    constructor() {
        this.defaults = {
            printMode: opts.printMode || '',
            pageTitle: opts.pageTitle || '',
            templateString: opts.templateString || '',
            popupProperties: opts.popupProperties || ''
        };
    }

    printElement(element, opts) {
        let elementHtml = element.outerHTML;
        this._print(elementHtml, opts);
    }

    printHtml(html, opts) {
        this._print(html, opts);
    }

    _print(html, opts = {}) {
        opts = Object.assign({}, defaults, opts);

        // Get markup to be printed
        let markup = this._getMarkup(html, opts);
        let printWindow;
        let printIframe;
        let printDocument;
        let printElementID;

        if (opts.printMode.toLowerCase() === 'popup') {
            printWindow = window.open('about:blank', 'printElementWindow', opts.popupProperties);
            printDocument = printWindow.document;
        } else {
            // The random ID is to overcome a safari bug
            // http://www.cjboco.com.sharedcopy.com/post.cfm/442dc92cd1c0ca10a5c35210b8166882.html
            printElementID = 'printElement_' + (Math.round(Math.random() * 99999)).toString();
            printIframe = document.createElement('iframe');
            printIframe.setAttribute('id', printElementID);
            printIframe.setAttribute('src', 'about:blank');
            printIframe.setAttribute('frameBorder', '0');
            printIframe.setAttribute('scrolling', 'no');
            printIframe.setAttribute('style', 'position:fixed;bottom:100%;right:100%;');

            document.body.appendChild(printIframe);

            printDocument = printIframe.contentWindow || printIframe.contentDocument;
            if (printDocument.document) {
                printDocument = printDocument.document;
            }

            printIframe = document.frames ? document.frames[printElementID] : document.getElementById(printElementID);
            printWindow = printIframe.contentWindow || printIframe;
        }

        focus();
        printDocument.open();
        printDocument.write(markup);
        printDocument.close();

        this._callPrint(printWindow, printIframe);
    }

    _callPrint(printWindow, iframe) {
        if (printWindow && printWindow.printPage) {
            printWindow.printPage();

            if(iframe) {
                // Remove iframe after printing
                document.body.removeChild(iframe);
            }
        } else {
            setTimeout(() => {
                this._callPrint(printWindow, iframe);
            }, 50);
        }
    }

    _getBaseHref() {
        let port = window.location.port ? `:${window.location.port}` : '';
        return `${window.location.protocol}//${window.location.hostname + port + window.location.pathname}`;
    }

    _getMarkup(elementHtml, opts) {
        let template = opts.templateString;
        let templateRegex = new RegExp(/{{\s*printBody\s*}}/gi);
        let stylesheets = Array.prototype.slice.call( document.getElementsByTagName('link') );
        let styles = Array.prototype.slice.call(document.getElementsByTagName('style'));
        let html = `<html><head><title>${opts.pageTitle || ''}</title>`;

        if (template && templateRegex.test(template)) {
            elementHtml = template.replace(templateRegex, elementHtml);
        }

        stylesheets.forEach(link => html += `<link rel="stylesheet" href="${link.href}">'`);
        styles.forEach(style => html += style.outerHTML);

        // Ensure that relative links work with <base> tag
        return html += `
                <base href="${this._getBaseHref()}" />
            </head>
            <body class="pe-body">
                ${elementHtml}
                <script type="text/javascript">
                    function printPage() {
                        focus();
                        print();
                        ${opts.printMode.toLowerCase() === 'popup' ? 'close();' : ''}
                    }
                </script>
        `;
    }
};

if (typeof module === 'object' && module.exports === exports) {
    module.exports = new PrintElement();
}