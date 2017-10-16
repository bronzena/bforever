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
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
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