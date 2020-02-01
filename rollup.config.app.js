import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default {
	input: './example/app.js',
	output: [{
		format: 'iife',
		name: 'App',
		file: './example/app-bundle.iife.js',
		sourcemap: true
	}],

	plugins: [
		json(),
		nodeResolve({
			preferBuiltins: false
		}),
		commonjs({
			namedExports: {}
		})
	]
}
