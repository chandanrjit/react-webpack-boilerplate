const path=require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry :'./src/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:
                {
                 loader:'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({filename: 'style.css'}),
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}