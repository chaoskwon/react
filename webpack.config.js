const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[hash]_bundle.js'
    },
    resolve: {
        extensions: [".wasm", ".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            // Utilities: path.resolve(__dirname, 'src/utilities/'),
            // Templates: path.resolve(__dirname, 'src/templates/'),
            '@': path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use:{
                  loader: 'babel-loader'
              },
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'html-loader',
                  options: {
                    minimize: true,
                  },
                },
              ],
            },
            {
              test:  /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    devServer: {
      host: 'localhost',
      port: 3000,
      open: true, // open page when start
    },
}
