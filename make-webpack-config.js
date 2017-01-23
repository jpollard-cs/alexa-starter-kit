const webpack = require('webpack');
const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');
const Environment = require('./Environment');

const makeConfig = (environment = Environment.PRODUCTION) => {
    process.env['NODE_ENV'] = environment;

    const config = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    use: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new ZipPlugin() // if you just have js you can copy and paste the output js into your lambda function,
            // but if you have assets you'll need the zip file
        ]
    };

    return config;
};

module.exports = makeConfig;