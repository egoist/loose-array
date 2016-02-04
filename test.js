import test from 'ava'
import looseArray from './'

test('Real array', t => {
	t.true(looseArray([]))
	t.true(looseArray([null, undefined]))
	t.true(looseArray([1, 2, 3]))
})

test('Array-like', t => {
	t.false(looseArray({0: null, 1: 'cool'}))
	t.true(looseArray({0: null, 1: false, length: 2}))
})
