module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ],
    }
};