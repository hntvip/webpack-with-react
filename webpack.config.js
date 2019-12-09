'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode:'development',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  watch: true,
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback:"style-loader",
        }),
        test: /\.css$/
      }
    ]
  },
  resolve: {
  },
  devtool: 'source-map',
  plugins: [
    //create new instance of this plugin to spitting the css to single file
    new ExtractTextPlugin('style.css') 
  ]
};
