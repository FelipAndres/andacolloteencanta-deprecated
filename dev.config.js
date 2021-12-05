const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "dev.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","resolve-url-loader", "sass-loader"],
      },
      {
        type: "asset",
        test: /\.(png|jpg|svg|jpeg|gif|ico|webp)$/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "../fonts",
          outputPath: "/fonts",
        },
      },
    ],
  },
  devtool: "inline-source-map",
    plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3000,
      files: ['./**/*.php', './**/*.css', './**/*.scss'],
      proxy: 'development.local'
    }),
    new CleanWebpackPlugin(),
    new HtmlPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};
