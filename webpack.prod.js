'use strict';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
  mode:'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disable', // server || disable
      generateStatsFile: true,
      statsOptions: { source: false }
    }) // analyzer after building
  ]
})
