const webpack = require('webpack');
const ExtractPluginText = require('extract-text-webpack-plugin');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractPluginText('style.css') // after build this file is created, reference in index.html
    ],
    module: {
        loaders: [{
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /.css?$/,
                loader: ExtractPluginText.extract['style-loader', 'css-loader']

            }
        ]
    }

}