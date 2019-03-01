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
Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js')
.then((lodash) => {
  console.log(lodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' }));
})

```

### Webpack
```js
import Kurumi from 'kurumi';
Kurumi('https://unpkg.com/lodash@4.17.11/lodash.min.js')
.then((lodash) => {
  console.log(lodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' }));
})
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

## FAQ
### Why is it called Kurumi?
> `Kurumi` Tokisaki (時崎 狂三ときさき くるみ, Tokisaki Kurumii?) is the third Spirit to appear. Due to her brutal actions, she is referred to as the Worst Spirit (最悪の精霊, Saiaku no Seirei?). She is also the first Spirit to appear as an antagonist in the Date A Live series.

—— From [Date A Live](https://en.wikipedia.org/wiki/Date_A_Live)

<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551433129533&di=3f06a5d35dcc885329147ffe59560600&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F03%2F20181103134800_yKCli.jpeg" width="200" />
### 
## Contributing
Welcome to `pr`!