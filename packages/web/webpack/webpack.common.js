const HtmlWebbackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const commonConfig = {
  entry: [resolve('src', 'index.tsx')],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
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
