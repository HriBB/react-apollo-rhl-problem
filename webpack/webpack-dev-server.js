var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./config.dev')
var config = require('../config')

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(config.dev.port, config.dev.host, function (err, result) {
  if (err) return console.log(err)
  console.log(`==> Development server running on ${config.dev.url}`)
})
