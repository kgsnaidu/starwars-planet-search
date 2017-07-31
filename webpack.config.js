const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    target: 'web',

    context: __dirname,

    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/'
    },

    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8000,
        inline: true,
        historyApiFallback: true,
        hot: true,
        overlay: true,
        clientLogLevel: 'info'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'public', 'index.html'),
        })
    ],

    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },

    stats: "minimal"
}