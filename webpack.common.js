const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/public/index.js",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader",
        options: {
          helperDirs: path.join(__dirname, "src/public/view/layout"),
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/view/index.handlebars",
      title: "Applicative NLP V2",
    }),
    new Dotenv({ path: "./config/.env", systemvars: true }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
};
