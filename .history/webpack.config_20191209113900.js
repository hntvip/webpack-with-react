'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: '/\.js$/'
      },
      {
        use: ['style-loader','css-loader'],
        test: '/\.js$/'
      }
    ]
  },
  resolve: {
  },
  devtool: 'source-map',
  plugins: [
  ]
};
