var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/CvssV3.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'CvssV3.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}