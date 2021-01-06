const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: './images/[name].[ext]?[hash]',
            limit: 8192, // in bytes
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
      }), // https://github.com/webpack-contrib/terser-webpack-plugin
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
