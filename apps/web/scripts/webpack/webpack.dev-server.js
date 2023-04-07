const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
        devServer: {
          static: {
            directory: path.join(process.cwd(), 'dist'),
          },
            host: '0.0.0.0',
            port: 3000,
            historyApiFallback: true,
        },
        watchOptions: {
          ignored: '**/node_modules'
        },
        output: {
            ...common.output,
            path: path.resolve(process.cwd(), 'dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: common.title,
                template: path.join(__dirname, '../../public/index.html'), // Load a custom template
                inject: 'body', // Inject all scripts into the body
                chunksSortMode: 'none',
            }),
            new webpack.DefinePlugin({
                APP_NAME: "Weather forecast",
                DEV_PICK_ENV: true,
            }),
        ]
    });
