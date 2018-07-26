const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig, {
    mode: "development",
    plugins: []
});
