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
                loaders: ['style-loader', 'css-loader']
            }
        ],
    }
};