const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const isDevMode = process.env.NODE_ENV !== 'production';

const commonConfig = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@UI': path.resolve(__dirname, 'src/component/UI'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@context': path.resolve(__dirname, 'src/context'),
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
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
