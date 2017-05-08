'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV_DEV = 0;
const ENV_PRODUCTION = 1;

module.exports = {
  ENV_DEV,
  ENV_PRODUCTION,
  getWebpackConfig: function(env) {
    const isDev = env === ENV_DEV;
    const entry = ['./src/main.tsx'];
    if (isDev) {
      entry.unshift('webpack-dev-server/client?http://localhost:3000');
    }

    const plugins = [
        new HtmlWebpackPlugin({
          inject: true,
          title: 'Ticket Printer'
        }),
      ];
    if (!isDev) {
      plugins.unshift(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        })
      );
    }

    return {
      devtool: isDev ? '#inline-source-map' : 'eval',
      entry,
      output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: isDev ? '/' : '',
      },
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
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
      plugins,
    }
  },
};
