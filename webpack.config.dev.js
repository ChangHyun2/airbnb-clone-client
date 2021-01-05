const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

// redirect cannot get issue
// https://dev.to/tylermcginnis/fixing-the-cannot-get-url-error-on-refresh-with-react-router-or-how-client-side-routers-work-4ho9
const devConfig = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 5000,
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '',
    stats: 'errors-only',
    hot: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};

module.exports = merge(commonConfig, devConfig);
