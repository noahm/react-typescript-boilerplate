'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/main.tsx',
    ],
    output: {
        path: 'build/',
        filename: 'app.js',
        publicPath: '',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx'],
    },
    module: {
        loaders: [
            { loader: 'ts-loader', test: /\.tsx?$/, exclude: /node_modules/ },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Ticket Printer'
        }),
    ],
};
