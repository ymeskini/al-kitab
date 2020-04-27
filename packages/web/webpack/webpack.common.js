const HtmlWebbackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const commonConfig = {
  entry: [resolve('src', 'index.tsx')],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebbackPlugin({
      template: resolve('src', 'index.html'),
    }),
  ],
};

module.exports = { commonConfig };
