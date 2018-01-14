const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

	module.exports = {
	  entry: './src/app.js',
	  output: {
	    filename: 'bundle.js',
	    path: path.resolve(__dirname, 'dist')
	  },
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new ExtractTextPlugin("styles.css"), // <-- nouveau plugin
		new webpack.ProvidePlugin({
	        $: 'jquery',
	        jQuery: 'jquery',
	        'window.jQuery': 'jquery',
	        Popper: ['popper.js', 'default']
	      })
	],

	// Configuration des loaders
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
            })
          },
          {
            test: /\.(png|jpg|gif|eot|otf|ttf|woff|woff2|svg)$/,
            use: [
		          {
		            loader: 'file-loader',
		            options: {}  
		          }
		    ]
          }
        ]
    }
	};