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
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2016',
                                ['es2015', { modules: false }],
                                'react',
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Ticket Printer'
        }),
    ],
};
