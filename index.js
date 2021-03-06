'use strict'

function isType(obj, type) {
	return Object.prototype.toString.call(obj) === '[object ' + type + ']'
}

module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object')
	}

	// Whatever array or array-like thing have the `length` property
	if (typeof obj.length === 'undefined') {
		return false
	}

	// A real array or Node list
	if (isType(obj, 'Array') || isType(obj, 'NodeList')) {
		return true
	}

	// Detect other array-like object
	var isArray = false
	Array.prototype.every.call(obj, function () {
		isArray = true
		return false
	})

	return isArray
}
