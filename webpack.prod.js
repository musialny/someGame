const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
          }
        ]
      },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: "Some Nois Game",
          template: "./src/index.html"
        })
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}