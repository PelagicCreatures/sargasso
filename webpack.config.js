const path = require('path')

module.exports = {
	mode: 'development',
	entry: ['./index.js'],
	output: {
		filename: 'sargasso.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'sargasso'
	},
	watchOptions: {
		poll: 1000 // Check for changes every second
	},
	target: 'web',
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ['@babel/preset-env']
			}
		}]
	}
}
