const webpack = require('webpack')
const entry = {
	main: './index.js'
}

const legacy = {
	output: {
		filename: './sargasso.common.js',
		library: 'sargasso'
	},
	name: 'antique',
	entry,
	mode: 'development',
	devtool: 'source-map',
	plugins: [
		new webpack.ProvidePlugin({
			Cookies: 'js-cookie/src/js.cookie.js'
		})
	],
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
