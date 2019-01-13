"use strict";
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map'
  })
];

module.exports = {
  entry: {
    'print-html-element.min': './src/print-html-element.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'printHtmlElement',
    libraryTarget: 'umd'
  },
  plugins: plugins,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          include: './src/print-html-element.js',
          exclude: 'print-html-element',
          ie8: false,
          safari10: false,
          sourceMap: true
        }
      }),
    ],
  },
  module: {
    rules: [
      {
        use: { 
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};