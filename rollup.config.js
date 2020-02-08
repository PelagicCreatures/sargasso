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
		name: 'PelagicCreatures.Sargasso',
		file: './dist/sargasso.iife.js',
		sourcemap: true
	}],

	plugins: [
		json(),
		nodeResolve(),
		commonjs(),
		terser({
			output: {
				comments: false
			}
		})
	]
}
