const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[hash]_bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx",".css",".qcss"],
        alias: {
            Css: path.resolve(__dirname, 'src/css/'),
            Scss: path.resolve(__dirname, 'src/scss/'),
            Utilities: path.resolve(__dirname, 'src/utilities/'),
            Img: path.resolve(__dirname, 'src/img/'),
            // Templates: path.resolve(__dirname, 'src/templates/'),
            '@': path.resolve(__dirname, 'src/')
        },
        modules: ["node_modules"]
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
              test: /\.(jpe?g|png|gif|svg)$/i, 
              loader: 'file-loader',
            },
            {
              test: /\.css$/,
              use : [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  }
                }
              ]
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    // outputPath: 'fonts/'
                  }
                }
              ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            ignoreOrder: true,
        }),
    ],
    devServer: {
      host: 'localhost',
      port: 3000,
      publicPath: "/",
      // contentBase: "./public",
      // open: true, // open page when start
    },
}
