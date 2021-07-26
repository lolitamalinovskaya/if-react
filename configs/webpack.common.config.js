const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, '../src'),
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'svg/[hash]-[name].[ext]',
                        },
                    },
                ],
               /* test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]*/
            },
            {
                test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                use: [{
                    loader: 'url-loader?limit=100000',
                    options: {
                        outputPath: 'fonts/',
                        name: '[name].[ext]',
                    }
                }]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html'
        })
    ]
};