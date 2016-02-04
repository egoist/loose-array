# loose-array [![NPM version](https://img.shields.io/npm/v/loose-array.svg)](https://npmjs.com/package/loose-array) [![NPM downloads](https://img.shields.io/npm/dm/loose-array.svg)](https://npmjs.com/package/loose-array) [![Build Status](https://img.shields.io/circleci/project/egoist/loose-array/master.svg)](https://circleci.com/gh/egoist/loose-array)

> Check if is an Array or Array-like Object

## Install

```
$ npm install --save loose-array
```

## Usage

```js
const looseArray = require('loose-array')

looseArray([]) 																// => true
looseArray(arguments) 												// => true
looseArray(document.querySelectorAll('div'))  // => true
```

## License

MIT © [EGOIST](https://github.com/egoist)
