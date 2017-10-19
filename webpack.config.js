module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    watch: true,

    module: {
        loaders: [
            {
                test: [/\.scss$/, /\.css$/],
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: './src/img/[name].[ext]?[hash]',
                    //publicPath: '/'
                }
            },
        ],
    }
};