const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|[jt]sx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
