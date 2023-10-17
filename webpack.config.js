const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    card: './src/card.js',
    contactList: './src/contactList.js',
    contactPage: './src/contactPage.js',
    icon: './src/icon.js',
    menu: './src/menu.js',
    navigationTab: './src/navigationTab.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/dist',
      serverSideRender: true,
      writeToDisk: true,
    },
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
