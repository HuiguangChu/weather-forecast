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
                    path.resolve('./src'),
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
                                sourceMap: true,
                                camelCase: true,
                                minimize: true,
                                namedExport: true,
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[hash:base64:5]',
                            }
                        }

                    }, // translates CSS into CommonJS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("node-sass"),
                        },
                    },
                ]
            },
            {
                test: /(?<!\.d)\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, '../../../common'),
                ],
                exclude: [
                    path.resolve('./src'),
                ],
                options: {
                    transpileOnly: true
                },
                resolve: {
                    alias: {
                        'react-native$': 'react-native-web'
                    }
                }
            },
            {
                test: /(?<!\.d)\.tsx?$/,
                loader: 'ts-loader',
                exclude: [
                    path.resolve(__dirname, '../../../common'),
                ],
                include: [
                    path.resolve('./src'),
                ],
                options: {
                    transpileOnly: true
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
