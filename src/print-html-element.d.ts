export = PrintHtmlElement;

declare namespace PrintHtmlElement{
    function printElement(element: Element, opts?: PrintHtmlElementOptions);
    function printHtml(html: string, opts?: PrintHtmlElementOptions);
    
    export interface PrintHtmlElementOptions {
        printMode: string;
        pageTitle: string;
        templateString: string;
        popupProperties: string;
        printTimeout: number;
        stylesheets: string[];
        styles: string[];
    }
}