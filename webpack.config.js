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
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: './assets/img/[name].[ext]?[hash]',
                    //publicPath: '/'
                }
            },
        ],
    }
};