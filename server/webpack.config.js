const path = require('path');

module.exports = {
    entry: './server.js',
    target: 'node',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            emitFile: false, // Set to false since it's for server-side code
                        },
                    },
                ],
            },
            {
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'api.bundle.js',
    },
};