import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default {
	input: './example/app.mjs',
	output: [{
		format: 'iife',
		name: 'App',
		file: './example/app-bundle.iife.js'
	}],

	plugins: [
		json(),
		nodeResolve({
			preferBuiltins: false
		}),
		commonjs({})
	]
}
