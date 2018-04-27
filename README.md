# one-utils
Super useful utility tool library
> 兼容web，小程序
#### Install using npm 
[![one-utils](https://nodei.co/npm/one-utils.png)](https://npmjs.org/package/one-utils)
``` 
npm install one-utils --save
yarn add one-utils --save
```
### Api

### initial
```javacript
// 初始化oneUtils运行环境，创建实例
const oneIns = oneUtils.create({ engine: wx || window });
```
#### dom
+ oneIns.querySelector(selector)
> 选择界面第一个符合条件的元素
+ oneIns.querySelectorAll(selector)
> 选择界面所有符合条件的元素

### fetch
```javascript
oneIns.fetch({
  url: 'http://github.com',
  method: 'GET/POST',
  header: {}, // custom request header,
  body: {}, // submit data
})
```
