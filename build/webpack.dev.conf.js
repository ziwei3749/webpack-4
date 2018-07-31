const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // webpack4在开发阶段可以不写devtool
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    hot: true,
    overlay: true
    // compress: true
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        loader: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
