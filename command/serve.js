'use strict'

const Command = require('common-bin')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { checkDir } = require('../lib/check-dir')

class ServeCommand extends Command {
  constructor (rawArgv) {
    super(rawArgv)
  }
  async run () {
    if (!checkDir()) {
      return
    }
    const webpackConfig = require('../webpack/webpack.dev')
    const compiler = Webpack(webpackConfig)
    const server = new WebpackDevServer(compiler, webpackConfig.devServer)
    server.listen(webpackConfig.devServer.port, webpackConfig.devServer.host)
  }

  get description () {
    return 'Start a server'
  }
}

module.exports = ServeCommand
