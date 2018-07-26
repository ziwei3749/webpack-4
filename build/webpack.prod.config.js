const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "../")
        })
    ]
});
