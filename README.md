# webpack-4
webpack@4从0搭建

## 目录结构说明

```js
- build
  + webpack.base.conf.js
  + webpack.dev.conf.js
  + webpack.prod.conf.js
- src
  + asssets        // 静态资源
  + components     // 公用组件，利用layout / dialog
  + router         // 路由配置
  + store          // 数据状态管理
  + views          // 视图组件
  + main.js        // 入口文件
  + index.html     // 模板
- package.json
- postcss.config.js // css后处理器的配置文件
- .babelrc          // babel的配置文件
- .editorconfig     // 编辑器代码风格的配置文件
- .eslintrc         // eslint的配置文件
- .gitignore        // git忽略的文件
- README.md
```

## 目前配置的功能

- development
  + devServer
    * 通过process.env.NODE_ENV区分环境
    * 热更替（默认）
    * 设置port/host
    * 设置publicPath
    * 设置浏览器遮罩报错提醒
    * 设置是否自动打开浏览器
  + 静态文件编译处理
    * 处理vue文件,开启css module (暂时没有设置css module。需要可查看 vue-loader@15文档 https://vue-loader.vuejs.org/zh/ )
    * 处理css路径
    * 处理css预处理的解析
    * 处理图片路径
    * 处理ES7/ES7的编译
    * 处理postcss添加css前缀
    * 处理html文件里的img路径 (暂时没有，需要可查看 html-withimg-loader)
  + 指定devtool
  + 代码规范性约束
    * .eslint
    * .editorconfig
    * pre-commont防止不符合eslint的代码被提交
  + 设置resolve，注意css里解析alias需要配置css-loadr
  + webpack日志仪表盘


- production
  + 静态路径的调整
  + 将代码单独打包，代码分割，分配不同hash，以最大化利用缓存
    * 单独分离css
    * 单独分离第三方类库、webpack的manifest
    * 动态import做代码分割，异步加载组件
  + 压缩、混淆js和css
  + 处理打包后的静态文件路径
  + 自动生成html模板、打包前自动remove dist文件夹
  + 去掉devtool
  + Tree Shaking，去掉冗余代码


```
关于别名，使用resolve.alias时遇到一些坑，无法解析@的问题。

https://wiki.zthxxx.me/wiki/%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF/Webpack-%E4%B8%AD-css-import-%E4%BD%BF%E7%94%A8-alias-%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84/
```

## 配置项详细说明



- [webpack4的开发环境配置](https://github.com/ziwei3749/blog/blob/master/Other/%E3%80%8A%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%BD%93%E7%B3%BB%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5%E3%80%8B/webpack4%E7%9A%84%E5%BC%80%E5%8F%91%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.md)
- [webpack4的生产环境配置](https://github.com/ziwei3749/blog/blob/master/Other/%E3%80%8A%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%BD%93%E7%B3%BB%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5%E3%80%8B/webpack4%E7%9A%84%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%BC%98%E5%8C%96.md)

- [webpack4的新增变化](https://github.com/ziwei3749/blog/blob/master/Other/%E3%80%8A%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%BD%93%E7%B3%BB%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5%E3%80%8B/webpack4%E7%9A%84%E6%96%B0%E5%8F%98%E5%8C%96.md)


