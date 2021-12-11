const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const options = { };

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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif|ico|webp)$/,
        type: "asset/resource",
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
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
      browser: 'C:/Program Files/Firefox Developer Edition/firefox.exe',
      files: ["./**/*.php", "./**/*.css", "./**/*.scss"],
      proxy: "development.local",
    }),
    new WebpackManifestPlugin(options),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};
