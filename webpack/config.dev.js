var path = require('path')
var webpack = require('webpack')
var config = require('../config')

module.exports = {
  name: 'bit',
  target: 'web',
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?' + config.dev.url,
    'webpack/hot/only-dev-server',
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
      loaders: ['babel'],
      exclude: /(node_modules)/,
    },{
      test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
      loader: 'url-loader?limit=100000',
    },{
      test: /\.(css|scss)$/,
      loader: 'style!css?sourceMap!resolve-url?sourceMap!sass?sourceMap!postcss',
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
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
