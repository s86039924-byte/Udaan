const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/main.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            configFile: path.resolve(__dirname, "tsconfig.app.json"),
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  devServer: {
    host: "0.0.0.0",
    port: Number(process.env.PORT || 30010),
    allowedHosts: "all",
    static: {
      directory: path.resolve(__dirname, "public"),
      watch: true,
      staticOptions: {
        setHeaders: (res, filePath) => {
          if (/\.(png|jpe?g|webp|gif|svg|ico|woff2?)$/i.test(filePath)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
            return;
          }
          if (/\.html$/i.test(filePath)) {
            res.setHeader("Cache-Control", "no-cache");
          }
        },
      },
    },
    historyApiFallback: true,
    hot: true,
    open: false,
  },
  devtool: "source-map",
};
