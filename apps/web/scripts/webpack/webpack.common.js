const path = require('path');
const webpack = require('webpack');

/*
* context: default value is process.cwd(), where the current working directly contains package.json
* __dirname: ./scripts/webpack
*
* */
module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(process.cwd(), '../../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            {
                test: /(\.d)\.ts$/,
                loader: 'ignore-loader',
                include: [
                    path.resolve(__dirname, '../../../common'),
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [
                    path.resolve('./src/components'),
                    path.resolve(__dirname, '../../../common'),
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve('./src/components'),
                    path.resolve(__dirname, '../../../common'),
                ],
                use: [
                    'style-loader', // creates style nodes from JS strings
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: "local",
                                auto: true,
                                exportGlobals: true,
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                namedExport: true,
                                exportLocalsConvention: "camelCase",
                                exportOnlyLocals: false,
                            },
                        }

                    }, // translates CSS into CommonJS
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    }
                ]
            },

            {
                test: /(?<!\.d)\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    path.resolve('./src'),
                    path.resolve(__dirname, '../../../common')
                ],
                options: {
                    transpileOnly: true
                },
                resolve: {
                    alias: {
                        'react-native$': 'react-native-web',
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ]
};
