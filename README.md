# Iran National Code Validation
This package validates Iran National Code. [![Build Status](https://travis-ci.org/peekbyte/inc-validation.svg?branch=master)](https://travis-ci.org/peekbyte/inc-validation)

## Table of content
* [Install](#install)
* [Example](#example)
* [Building From Source](#building-from-source)
  + [Get Source From Git And Install Packages](#get-source-from-git-and-install-packages)
  + [Run Test](#run-test)
  + [Test In Local](#test-in-local)
  + [Publish](#publish)
* [License](#license)

## Install
```shell
$ npm install inc-validation --save
```

## Example
```javascript
//Module format: Commonjs 
var incValidation = require('incValidation');
var valid = incValidation.isValid(incValidation);

//Module format: ES2015
import * as incValidation from 'incValidation';
var valid = incValidation.isValid(incValidation);

//Module format: umd
<script src="node_modules/inc-validation/index.umd.min.js"></script>
var valid = incValidation.isValid(incValidation);
```
## Building From Source

### Get Source From Git And Install Packages
```shell
git clone https://github.com/peekbyte/inc-validation
cd inc-validation
npm install
```

### Run Test
```shell
npm run test
```

### Test In Local
```shell
npm link
```

### Publish
```shell
npm release
```

## License
MIT