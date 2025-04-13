const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/js/main.js',
        getDay: './src/js/modules/getDay.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin()
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        }
    }
};
