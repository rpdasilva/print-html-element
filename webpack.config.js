const webpack = require('webpack');
const path = require('path');

const plugins = [
  new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
  })
];

module.exports = {
  entry: {
    'print-html-element': './src/print-html-element.js',
    'print-html-element.min': './src/print-html-element.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'printHtmlElement',
    libraryTarget: 'umd'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};