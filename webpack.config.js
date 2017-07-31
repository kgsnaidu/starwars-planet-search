const path = require('path');

module.exports = {
    target: 'web',

    context: __dirname,

    entry: path.resolve( __dirname, './src/index.js' ),

    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, '/build' ),
        publicPath: '/public/js'
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
        clientLogLevel: 'error'
    },

    plugins: [
        
    ],

    resolve: {
        extensions: [ ".js", ".json", ".jsx", ".css" ]
    },

    stats: "minimal"
}