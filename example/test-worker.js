onmessage = function (e) {
	const baseNumber = e.data
	let result = 0
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i)
	};
	postMessage('Done doing pointless math: ' + result)
}
