const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: env === "dev" ? "development" : "production",
  target: "node",
  externals: [nodeExternals()],
  entry: ["@babel/polyfill", "./server/index.js"],
  output: {
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [{ loader: "css-loader" }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/images/",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new NodemonPlugin({
      script: "./dist/server.js",
      watch: path.resolve("./dist"),
    }),
  ],
};
