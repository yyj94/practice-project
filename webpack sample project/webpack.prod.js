// webpack 生产配置文件
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name]-[hash].js",
    },

    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [autoprefixer];
                }
            },
            minimize: true,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app/index.tmpl.html")
        }),
        new ExtractTextPlugin({
            filename: "[name]-[hash].css",
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true
            },
        }),
    ],
}