'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './src/main.tsx',
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx'],
    },
    module: {
        loaders: [
            { loader: 'style!css!sass', test: /\.scss$/ },
            { loader: 'file-loader', test: /\.(jpg|png|gif)$/ },
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
