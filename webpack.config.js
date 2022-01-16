const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");   

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
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
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