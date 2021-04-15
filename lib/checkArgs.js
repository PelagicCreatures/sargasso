const validators = {}

const setValidation = (name, fn) => {
	validators[name] = fn
}

setValidation('isDefined', (arg) => {
	return arg !== undefined
})

setValidation('isElement', (arg) => {
	return arg && (arg instanceof Element || arg instanceof Window)
})

setValidation('isEventTarget', (arg) => {
	return arg && arg instanceof EventTarget
})

setValidation('isString', (arg) => {
	return arg && (typeof arg === 'string' || arg instanceof String)
})

setValidation('isArray', (arg) => {
	return arg && arg instanceof Array
})

setValidation('notEmpty', (arg) => {
	return arg instanceof Array ? arg.length !== 0 : arg !== ''
})

setValidation('isEmpty', (arg) => {
	return arg === undefined || (arg instanceof Array ? arg.length === 0 : arg === '')
})

setValidation('isObject', (arg) => {
	return arg && arg instanceof Object
})

setValidation('isFunction', (arg) => {
	return arg && typeof arg === 'function'
})


// tests is an array which must be all true
// if top level element is an array then sub array is evaluated as an 'or'
// ['test1','test2',['either','or']]
const validate = (param, arg, tests) => {
	// console.log(param, arg)
	const result = tests.map((test) => {
		if (test instanceof Array) {
			const anyOf = test.map((or) => {
				return validators[or](arg)
			})
			return anyOf.indexOf(true) !== -1
		}
		else {
			return validators[test](arg)
		}
	})

	if (result.indexOf(false) !== -1) {
		throw (new Error('call to ' + param + ' invalid value'))
	}
}

export {
	validate, setValidation
}
