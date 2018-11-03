const path = require('path');

module.exports = {
    mode: 'development',
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 1100
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        includePaths: [path.resolve(__dirname, 'src')]
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};