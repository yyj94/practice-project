//Webpack 开发配置文件
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
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
                loader: "babel-loader",
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
                    'sass-loader',
                ]
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("Copyright MediaTek inc."),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    retrun [autoprefixer];
                }
            },
            minimize: true
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true
            }
        })
    ],

    devServer: {
        // proxy: {
        //     '/api': 'http://localhost:3000'
        // },
        port: 7777,
        host: 'localhost',
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        inline: true,
        hot: true,
    }
}