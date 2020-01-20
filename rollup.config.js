import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default {
	input: './index.js',
	output: [{
		format: 'es',
		file: './dist/sargasso.es.js'
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
