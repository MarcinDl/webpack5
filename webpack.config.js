const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");   
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        // clean: true
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname,"dist"),
        },
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: ["autoprefixer"]
                        }
                    }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|gif|jpg|jpeg|svg)$/,
            type: "asset/resource"
        }
        ]
    }
}