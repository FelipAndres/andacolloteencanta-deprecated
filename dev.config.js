const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "dev.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    publicPath: '../images',
                    outputPath: '/img'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    publicPath: '../fonts',
                    outputPath: '/fonts'
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ]
}