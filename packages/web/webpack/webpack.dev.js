'use strict';

const { commonConfig } = require('./webpack.common');
const merge = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const devConfig = {
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
