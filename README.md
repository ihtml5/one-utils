# one-utils
Super useful utility tool library
> 兼容web，小程序
### Install using npm 
[![one-utils](https://nodei.co/npm/one-utils.png)](https://npmjs.org/package/one-utils)
``` 
npm install one-utils --save
yarn add one-utils --save
```
## Api

### 1. initial
> 初始化oneUtils运行环境，创建实例
```javacript
const oneIns = oneUtils.create({ engine: wx || window });
```
### 2. [dom](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)
> 根据运行环境不同，选择dom或者wxml
+ oneIns.querySelector(selector)
> 返回文档中与指定选择器或选择器组匹配的第一个Element
+ oneIns.querySelectorAll(selector)
> 选择界面所有符合条件的元素

### 3. [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
> 和web fetch用法相同
```javascript
oneIns.fetch({
  url: 'http://github.com',
  method: 'GET/POST',
  header: {}, // custom request header,
  body: {}, // submit data
}).then(res => console.log(res));
```
