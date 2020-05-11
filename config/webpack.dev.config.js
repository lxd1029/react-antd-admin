"use strict";

const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = webpackMerge(baseConfig,{
	mode: 'development',
    devServer: {
        port: 8899,
        host: '0.0.0.0',
        inline: true,
        hot: true,
        progress: true,
        open: true,
        historyApiFallback: true,
        disableHostCheck:true,
        proxy:{
            '/':{
                target: 'http://localhost:8899/public',
                changeOrigin: true,
                pathRewrite:{'^/':""}
            }
        }
    }
})
