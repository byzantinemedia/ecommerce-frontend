'use strict';

var webpack = require('webpack');
var path = require('path');
var production = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: production ? null : 'eval',
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['jsx?harmony'], exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json-loader' },
            { test: path.join(__dirname, 'src'), loader: 'babel-loader' },
        ],
        noParse: [/react(-with-addons)?\.min\.js/]
    },

    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].app.js'
    },

    entry: {
        'front': [
            './src/app.js'
        ] // Should we create an own admin file? Separate the load.
    },

    plugins: production ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin()
    ] : [
        new webpack.NoErrorsPlugin()
    ],

    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
        dns: 'empty',
        console: production ? false : true
    }
};
