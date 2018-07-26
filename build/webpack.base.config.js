const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader', // eslint-loader的作用是，开发时如果有错，及时报错提醒
        exclude: /node_module/,
        enforce: 'pre' // 在处理vue之前，先用eslint-loader处理一般
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png)|(jpg)|(jpeg)|(svg)|(gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/images/[name].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)|(bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"' // 因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }) // 默认自动在output.path里生成index.html,生产和开发环境都需要
  ]
}
