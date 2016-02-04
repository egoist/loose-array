'use strict'

function isType(obj, type) {
	return Object.prototype.toString.call(obj) === '[object ' + type + ']'
}

module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object')
	}

	// A real array or Node list
	if (isType(obj, 'Array') || isType(obj, 'NodeList')) {
		return true
	}

	// Detect other array-like object
	var isArray = false
	Array.prototype.forEach.call(obj, () => {
		isArray = true
		return
	})

	return isArray
}
