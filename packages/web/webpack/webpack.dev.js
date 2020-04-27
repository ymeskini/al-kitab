'use strict';

const { resolve } = require('path');
const { commonConfig } = require('./webpack.common');
const merge = require('webpack-merge');

const devConfig = {
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  mode: 'development',
};

module.exports = merge(commonConfig, devConfig);
