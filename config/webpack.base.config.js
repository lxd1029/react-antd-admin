"use strict";

const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: "static/js/[name].[hash:8].js",
		publicPath: "/"
	},
	resolve: {
		extensions: ['.js','.jsx','.json']
	},
	module: {
		rules: [
			{
				test:/\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: [path.resolve('src')]
			},
            // { test: /\.js$/, loader: "source-map-loader" },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
			{
				test: /\.(png|jpg|gif|jpeg|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							name: '/img/[name].[hash:4].[ext]',
							limit: 86400,
							outputPath: 'static'
						}
					}
				]
			},
			{
				test:/\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader:'file-loader',
				options:{
					outputPath: 'static/fonts'
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: "./public/index.html",
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            inject: 'body',
            chunks: ['app']
        })
    ]
}
