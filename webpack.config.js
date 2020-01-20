const webpack = require('webpack')
const entry = {
	main: './index.js'
}

const legacy = {
	output: {
		filename: './sargasso.cjs.js'
	},
	name: 'antique',
	entry,
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /(node_modules)/,
			options: {
				presets: [
					['@babel/preset-env']
				]
			}
		}]
	}
}

module.exports = [legacy]
