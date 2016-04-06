<a name="0.4.0"></a>
# 0.4.0 (2016-04-12)

### Features
- **bundle:** Converted to UMD module
- **build:** Build via `webpack`, `babel-loader` setup for planned migration for ES2015

### BREAKING CHANGES
- Transpiled and minified files now moved under `dist` folder. `<script>` tags may need to be updated
- `PrintElement` factory is no longer publie and is now called `PrintHtmlElement`
- When included outside of any module system (such as via `<script>` tag in browser), `PrintHtmlElement` is now constructed as global `printHtmlElement`