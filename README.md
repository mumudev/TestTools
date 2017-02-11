# nemv

  一个开源的全栈框架，架构采取nodejs+express+mongoose+Vue，简称NEMV。

  A simple open source and full-stack framework which used nodejs+express+mongoose+Vue called NEMV.

  [Demo Site](http://www.nemv.club/)

## Depandence

  Nodejs>=4

  Mongodb

  Python2.7(for node-sass)

## Quick Start

  The quickest way to get started Is shown below:

  At first, you need to create a file named: mongodb.js in conf folder.
  Write down the code bellow in mongodb.js:

  
```js
module.exports = {
    auth: false,
    cookieSecret: 'nemv',
    database: 'nemv',
    host: 'localhost', 
    port: 27017
};
```

  You can build as below:

```bash
$ npm install -g gulp
$ npm install -g webpack
$ npm install
$ gulp #Watch app and api folder when its files changed.
```
  When you want to build in production:
    
```bash
$ gulp build #For production build.
```

## License

  [MIT](LICENSE)