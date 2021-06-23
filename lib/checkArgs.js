const validators = {}

const setValidator = (name, fn) => {
	validators[name] = fn
}

setValidator('isDefined', (arg) => {
	return arg !== undefined
})

setValidator('isUnDefined', (arg) => {
	return arg === undefined
})

setValidator('isNull', (arg) => {
	return arg === null
})

setValidator('isElement', (arg) => {
	return arg && (arg instanceof Element || arg instanceof Window)
})

setValidator('isEventTarget', (arg) => {
	return arg && arg instanceof EventTarget
})

setValidator('isString', (arg) => {
	return arg && (typeof arg === 'string' || arg instanceof String)
})

setValidator('isArray', (arg) => {
	return arg && arg instanceof Array
})

setValidator('notEmpty', (arg) => {
	return arg instanceof Array ? arg.length !== 0 : arg !== ''
})

setValidator('isEmpty', (arg) => {
	return arg === undefined || !arg || (arg instanceof Array ? arg.length === 0 : arg === '')
})

setValidator('isObject', (arg) => {
	return arg && arg instanceof Object
})

setValidator('isFunction', (arg) => {
	return arg && typeof arg === 'function'
})


// tests is an array of validators which must be all evaluate to true
// if top level element is an sub array then the sub array is evaluated as an 'or'
// ['this','and',['either','or']]
const validate = (param, arg, tests) => {
	// console.log(param, arg)
	const allOf = tests.map((test) => {
		if (test instanceof Array) {
			const anyOf = test.map((orTest) => {
				return validators[orTest] && validators[orTest](arg)
			})
			return anyOf.indexOf(true) !== -1
		}
		else {
			return validators[test] && validators[test](arg)
		}
	})

	if (allOf.indexOf(false) !== -1) {
		throw (new Error('call to ' + param + ' invalid value: ' + arg + ' ' + tests, +' ' + allOf))
	}
}

export {
	validate, setValidator
}
