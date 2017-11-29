'use strict';  
var webpack = require('webpack');  
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({filename:'common.js'});  
var path = require('path');  

module.exports = {  
    devtool: 'eval', 
    entry: [  
        'webpack-dev-server/client?http://localhost:8085',   
        'webpack/hot/only-dev-server',  
        './src/js/entry.js',
    ],  
    output: {  
        path: path.join(__dirname, 'dist'),  
        filename: 'bundle.js',  
        publicPath: '/static/'  
    },  
    plugins: [  
        new webpack.HotModuleReplacementPlugin(),  
        // commonsPlugin  
    ],  
  
    module: {  
        loaders: [  
            {  
                test: /\.css$/,  
                loader: 'style-loader!css-loader'  
            },
            {  
                test: /\.jsx?$/,  
                loaders: ['react-hot-loader/webpack', 'babel-loader'],  
                exclude: /node_modules/,  
  
            }, 
            {  
                test: /\.(png|jpg)$/,  
                loader: 'url-loader?limit=8192'  
            },  
            {  
                test: /\.less$/,  
                loader: 'style-loader!css-loader!less-loader'  
            },  
            {  
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,  
                loader: "url-loader?limit=10000&mimetype=application/font-woff"  
            },  
            {  
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,  
                loader: "file-loader"  
            }  
        ]  
    },  
    resolve: {   
        extensions: ['.js', '.json', '.less']  
    }  
};  