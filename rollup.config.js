import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import {
	terser
}
	from 'rollup-plugin-terser'

export default {
	input: './index.js',
	output: [{
		format: 'iife',
		name: 'SargassoModule',
		file: './dist/sargasso.iife.js'
	}, {
		format: 'iife',
		name: 'SargassoModule',
		file: './dist/sargasso.iife.min.js',
		sourcemap: true,
		plugins: [terser({
			output: {
				comments: false
			},
			keep_classnames: true,
			keep_fnames: true
		})]
	}],

	plugins: [
		json(),
		nodeResolve(),
		commonjs()
	]
}
