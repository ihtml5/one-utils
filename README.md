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

1. const oneIns = oneUtils.create({ engine: wx || window });
> 初始化oneUtils运行环境，创建实例
2. oneIns.querySelector(selector)
> 选择界面第一个符合条件的元素
3. oneIns.querySelectorAll(selector)
> 选择界面所有符合条件的元素
