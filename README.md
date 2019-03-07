<h1 align='center'>Kurumi</h1>
<p align='center'>
  <a href="https://travis-ci.com/ShanaMaid/kurumi/">
    <img src="https://travis-ci.com/ShanaMaid/Kurumi.svg" alt="travis ci badge">
  </a>
  <img src='https://img.shields.io/npm/v/kurumi.svg?style=flat-square' alt="version">
  <img src='https://img.shields.io/npm/l/kurumi.svg' alt="license">
  <img src='http://img.badgesize.io/https://unpkg.com/kurumi/lib/Kurumi.js?compression=gzip&label=gzip%20size:%20&style=flat-square'>
  <img src='https://img.shields.io/npm/dt/kurumi.svg?style=flat-square' alt="downloads">
  <img src='https://img.shields.io/npm/dm/kurumi.svg?style=flat-square' alt="downloads-month">
</p>

> if you think that `Kurumi` can help you，please `star` or `follow` to support me! 😘

## Introduction
-  Install npm dependencies that run directly in the browser. No Browserify, Webpack or import maps required.
- Imports source code URLs(it must support `UMD`)! most of all, It don't affect global variable as same as `webpack`

```js
const kurumi = new Kurumi({
  modules: {
  'lodash': 'https://unpkg.com/lodash@4.17.11/lodash.min.js'
  }
});
await kurumi.install();
const myLodash = kurumi.get('lodash');
console.log(myLodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' })); // Wow! so cool! Kurumi!!!
console.log(lodash) // undefined
```
- No more `node_modules`, no dependency to install.

## Install
```
npm install kurumi
```

## Usage
### Webpack
use kurumi in React, [Onlie Demo](https://stackblitz.com/edit/react-1jql5r);

### Browser
```html
<script src="https://unpkg.com/kurumi/lib/Kurumi.min.js"></script>
<script>
(async () => {
  const kurumi = new Kurumi({
    modules: {
    'lodash': 'https://unpkg.com/lodash@4.17.11/lodash.min.js'
    }
  });
  await kurumi.install();
  const myLodash = kurumi.get('lodash');
  console.log(myLodash.template(`Wow! so cool! <%= name %>`)({ name: 'Kurumi!!!' })); // Wow! so cool! Kurumi!!!
})();
</script>
```


## Method
### constructor(opt)
#### opt - object
  - `modules` - required -  key: package name, value: package url
  - `order` - optional - the execution order of package
     eg: the peerdependence of react-dom is react， order is ['react', 'react-dom']; 
     default: `Object.keys(opt.module)`;
  - `threadNum` - the maxium of xhr request, deafalt: `5`

### install - install packages
```js
const kurumi = new Kurumi(...);
kurumi.setThreadNum(1);
kurumi.install();
```

### get(name) - name in Object.keys(opt.module)
```js
const kurumi = new Kurumi({
  modules: {
    'react': 'https://unpkg.com/react@16.8.4/umd/react.production.min.js',
    'react-dom': 'https://unpkg.com/react-dom@16.8.4/umd/react-dom.production.min.js'
  }
});
kurumi.install();
kurumi.get('react').createElement('div', {}, 'this is a div!');
```

### setThreadNum(num) - set the maxium of xhr request 
```js
const kurumi = new Kurumi(...);
kurumi.setThreadNum(1);
kurumi.install();
```
## FAQ
### Why is it called Kurumi?
> `Kurumi` Tokisaki (時崎 狂三ときさき くるみ, Tokisaki Kurumii?) is the third Spirit to appear. Due to her brutal actions, she is referred to as the Worst Spirit (最悪の精霊, Saiaku no Seirei?). She is also the first Spirit to appear as an antagonist in the Date A Live series.

—— From [Date A Live](https://en.wikipedia.org/wiki/Date_A_Live)

<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551433129533&di=3f06a5d35dcc885329147ffe59560600&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F03%2F20181103134800_yKCli.jpeg" width="200" />

## Contributing
Welcome to `pr`!

## Others
inspired By [import-http](https://github.com/egoist/import-http)! thx!