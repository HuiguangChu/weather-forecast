const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
        entry: {
            main: [common.entry.main],
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                APP_NAME: 'Weather forecast',
                DEV_PICK_ENV: false,
            }),
        ],
    });
