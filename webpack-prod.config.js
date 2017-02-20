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
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx'],
    },
    module: {
        loaders: [
            { loader: 'style!css!sass', test: /\.scss$/ },
            { loader: 'file-loader', test: /\.(jpg|png|gif)$/ },
            {
                loader: 'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Ticket Printer'
        }),
    ],
};
