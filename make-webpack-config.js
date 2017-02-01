const webpack = require('webpack');
const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');
const Environment = require('./Environment');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const makeConfig = (environment = Environment.PRODUCTION) => {
    process.env['NODE_ENV'] = environment;
    const plugins = [
        new ZipPlugin() // if you just have js you can copy and paste the output js into your lambda function,
        // but if you have assets you'll need the zip file
    ];
    if (environment === Environment.PRODUCTION) {
        plugins.unshift(new UglifyJSPlugin);
    }
    const config = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            libraryTarget: 'commonjs2',
            library: 'alexaApp',
            filename: 'index.js'
        },
        target: 'node',
        module: {
            rules: [
                {
                    use: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }
            ]
        },
        plugins: plugins
    };

    return config;
};

module.exports = makeConfig;