# 模块学习

## AMD
  依赖前置，提前执行
~~~js
define(['a', 'b'], function(a, b){
  // 依赖全部初始化
  if(false){
    // 模块b已经初始化了，虽然没用到
    b.do()
  }
})
~~~
## CMD
  就近依赖，延迟执行
~~~js
define(function(){
  var a = require('a');
  if(false){
    // 在需要的时候申明
    var b = require('b');
    b.do()
  }
})
~~~
## commonjs
1. 模块输出是值的拷贝
2. 运行时加载
  + 输出一个对象module.exports，然后在对象上读取
  + exports在脚本执行完生成
## ES模块
1. 模块输出变量声明
2. 编译时加载
  + export 指定输出的代码，import 指定加载输出
  + 对外接口的定义，在代码静态解析时就会生成