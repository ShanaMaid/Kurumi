<h1 align='center'>Kurumi</h1>
<p align='center'>
  <a href="https://travis-ci.com/ShanaMaid/kurumi/">
    <img src="https://travis-ci.com/ShanaMaid/Kurumi.svg" alt="travis ci badge">
  </a>
  <img src='https://img.shields.io/npm/v/kurumi.svg?style=flat-square' alt="version">
  <img src='https://img.shields.io/npm/l/kurumi.svg' alt="license">
  <img src='http://img.badgesize.io/https://unpkg.com/kurumi/lib/Archer.js?compression=gzip&label=gzip%20size:%20&style=flat-square'>
  <img src='https://img.shields.io/npm/dt/kurumi.svg?style=flat-square' alt="downloads">
  <img src='https://img.shields.io/npm/dm/kurumi.svg?style=flat-square' alt="downloads-month">
</p>
> if you think that `Kurumi` can help you，please `star` or `follow` to support me! 😘

## Introduction
- Imports source code URLs(it must support `UMD`)! most of all, It don't affect global variable as same as `webpack`

You can use `await`
```js
const myLodash = await Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js');
console.log(myLodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' })); // Wow! so cool! Kurumi!!!
console.log(lodash) // undefined
```
`or` `.then`
```js
Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js')
.then((lodash) => {
  console.log(lodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' }));
})
```
- No more `node_modules`, no dependency to install.

## Install
```
npm install kurumi
```

## Usage
### Node
```js
const Kurumi = require('kurumi');
const myLodash = await Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js');
console.log(myLodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' })); // Wow! so cool! Kurumi!!!
console.log(lodash) // undefined

```

### Webpack
```js
import Kurumi from 'kurumi';
const myLodash = await Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js');
console.log(myLodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' })); // Wow! so cool! Kurumi!!!
console.log(lodash) // undefined
```

### Browser
```
<script src="https://unpkg.com/kurumi/Kurumi.min.js">
<script>
Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js')
.then((lodash) => {
  console.log(lodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' }));
})
</script>
```

## Contributing
Welcome to `pr`!