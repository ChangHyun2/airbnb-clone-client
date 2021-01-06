const path = require('path');
const {
  DefinePlugin,
  ids: { HashedModuleIdsPlugin },
} = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const isDevMode = process.env.NODE_ENV !== 'production';
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, 'src/config/.env'),
});
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

if (dotenv.error) {
  throw new Error('dotenv error');
}
console.log(dotenv.parsed);

const commonConfig = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HashedModuleIdsPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@UI': path.resolve(__dirname, 'src/component/UI'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@api': path.resolve(__dirname, 'src/api'),
      S: path.resolve(__dirname, 'src/lib/S/index.js'),
      Former: path.resolve(__dirname, 'src/lib/Former/index.js'),
      '@variable': path.resolve(__dirname, 'src/variable/index.js'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index.js'),
      '@utils': path.resolve(__dirname, 'src/utils/index.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            ident: '[name]__[local]___[hash:base64:5]',
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
module.exports = commonConfig;
