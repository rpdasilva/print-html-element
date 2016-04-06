const webpack = require('webpack');
const path = require('path');

const plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true})
]

module.exports = {
  entry: './src/print-html-element.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'print-html-element.min.js',
    publicPath: '/'
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