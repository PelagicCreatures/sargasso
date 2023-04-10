const cloneObj = (source,dest) => {
	Object.keys(source).forEach((key) => {
		if(Array.isArray(source[key])){
			dest[key] = []
			cloneObj(source[key],dest[key])
		}
		else {
			if(typeof source[key] === 'object') {
				dest[key] = {}
				cloneObj(source[key],dest[key])
			}
			else {
				dest[key] = source[key]
			}
		}
	})
}

export {
	cloneObj
}