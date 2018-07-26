const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.styl(us)?$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "stylus-loader"]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "../")
        }),
        new ExtractTextPlugin("static/css/[name].css")
    ]
});
