const path = require('path');
const webpack = require('webpack');

/*
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
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
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
                    path.resolve('./src/components')
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve('./src/components')
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
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /(?<!\.d)\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, '../../../common'),
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
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ]
};
