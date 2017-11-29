var webpack = require('webpack');  
var WebpackDevServer = require('webpack-dev-server');  
var config = require('./webpack.config');  
 
new WebpackDevServer(webpack(config), {  
    publicPath: config.output.publicPath,  
    hot: true,  
    inline:true,  
    historyApiFallback: true,
    stats: {
        detailed: true
    } ,  
}).listen(8085, 'localhost', function (error, result) {  
    if (error) {  
        return console.log(error);  
    }  
    console.log('Listening at http://localhost:8085/');  
});  
