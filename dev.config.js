const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"build"),
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
                type:'asset',
                test: /\.(png|jpg|svg|jpeg|gif|ico|webp)$/
                
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