const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const testConfig = {
  entry: path.resolve(__dirname + '/playground/index.js'),
  resolve: {
    alias: {
      S: path.resolve(__dirname, '/src/style/index.js'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '/playground'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '/playground/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /(style.css|globalCSS|node_modules)/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /(style.css|globalCSS|node_modules)/,
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
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 4001,
    contentBase: path.resolve(__dirname, '/playground'),
    compress: true,
    stats: 'errors-only',
    open: true,
    hot: true,
  },
};

module.exports = testConfig;
