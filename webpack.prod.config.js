var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//清空基本设定的外挂程式清单
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
	output: {
		publicPath:'/dist/',
		//将入口文件重新命名为带有20位hash值的唯一文件
		filename: '[name].[hash].js'
	},
	plugins: [
		new ExtractTextPlugin({
			//分析css，并重新命名带有20位hash值的唯一文件
			filename: '[name].[hash].css',
			allChunks: true
		}),
		//定义目前node环境为生产环境
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		//分析范本，并储存入口html文件
		new HtmlwebpackPlugin({
			filename: '../index_prod.html',
			template: './index.ejs',
			inject: false
		}),
	],
	optimization: {
    	runtimeChunk: false,
   		 splitChunks: {
      		cacheGroups: {
        		commons: {
         			 test: /[\\/]node_modules[\\/]/,
          			 name: 'vendors',
                     chunks: 'all',
                         },
                    },
               },
     	}
    })
