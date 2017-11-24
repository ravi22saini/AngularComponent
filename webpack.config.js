var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: { 
       app:['./scripts/app/app.js'],
         appContent:['./scripts/app/firstComponent/firstComponent.js'] ,
         vendor: ['angular']
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].bundle.js',
        publicPath: '/dist', 
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: [{ loader: 'ng-annotate-loader' }],
            }, 
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
            }
        ]
    },
    plugins:[
       // new webpack.HotModuleReplacementPlugin()
        new webpack.ProvidePlugin({            
            //  jQuery: 'jquery',
            //  $: 'jquery',
            //  jquery: 'jquery'           
        })
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer:{ 

    }
};