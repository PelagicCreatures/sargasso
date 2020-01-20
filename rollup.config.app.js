import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default {
	input: './example/app.js',
	output: [{
		format: 'es',
		file: './example/app-bundle.es.js'
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
