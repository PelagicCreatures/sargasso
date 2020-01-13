module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		mocha: true
	},
	extends: [
		'standard'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'no-tabs': 0,
		'indent': ['error', 'tab']
	}
}
