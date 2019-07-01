/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true }] */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.config');

module.exports = [
  merge(common, {
    output: {
      filename: './dist/client.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
    target: 'web',
  }), 
  merge(common, {
    output: {
      filename: './dist/server.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
    target: 'node',
  }),
];
