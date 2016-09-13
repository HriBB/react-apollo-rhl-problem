var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginRemove = require('html-webpack-plugin-remove')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('../config')

module.exports = {
  name: 'bit',
  target: 'web',
  entry: [
    path.resolve(__dirname, '..', 'client', 'index'),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bit.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
    alias: {
      config: path.resolve(__dirname, '..', 'config'),
      apollo: path.resolve(__dirname, '..', 'client', 'apollo'),
      components: path.resolve(__dirname, '..', 'client', 'components'),
      routes: path.resolve(__dirname, '..', 'client', 'routes'),
    },
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?cacheDirectory'],
      exclude: /(node_modules)/,
    },{
      test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
      loader: 'url-loader?limit=100000',
    },{
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract('css!resolve-url!sass!postcss'),
    },{
      test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
      loader: 'imports?define=>false&this=>window',
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, '..', 'client', 'styles'),
    ],
  },
  postcss: function() {
    return [
      require('autoprefixer'),
    ];
  },
  plugins: [
    new HtmlWebpackPluginRemove('<script src="/bit.js"></script>\n'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'index.html'),
      filename: 'index.html',
      inject: 'body',
      hash: true,
      xhtml: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('bit.css'),
  ],
}
