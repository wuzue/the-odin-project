const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {

    

    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader",

            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader',
                    }
                ],
            },
        ],
    },

    //target: 'node',
    output: {
        path: path.resolve(__dirname, "dist"),
        //publicPath: 'dist',
        filename: "main.js",
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new NodePolyfillPlugin(),
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    //target: "async-node",
    //mode: "production",
    //entry: "./app.js",
   // externalsPresets: { node: true },   // <-- here
    //externals: [nodeExternals()],
};

/*const webpackConfig = {
    target: 'node'
  };
  module.exports = webpackConfig;*/