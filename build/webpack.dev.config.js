const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    hot: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
