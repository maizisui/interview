####1. 介绍JavaScript的基本数据类型
    最新的 ECMAScript 标准定义了 7 种数据类型:  
    6 种原始类型:
    Boolean
    Null
    Undefined
    Number
    String
    Symbol (ECMAScript 6 新定义)
    和 Object

#### 2. 介绍js有哪些内置对象？
 Object 是 JavaScript 中所有对象的父对象  
 数据封装类对象：Object、Array、Boolean、Number 和 String  
 其他对象：Function、Arguments、Math、Date、RegExp、Error   

 扩展：
 https://segmentfault.com/a/1190000011467723
 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects

 JavaScript有3大对象，分别是本地对象、内置对象和宿主对象。  
在此引用ECMA-262（ECMAScript的制定标准）对于他们的定义：  
本地对象  
与宿主无关，独立于宿主环境的ECMAScript实现提供的对象。  
简单来说，本地对象就是 ECMA-262 定义的类（引用类型）。  
这些引用类型在运行过程中需要通过new来创建所需的实例对象。  
包含：Object、Array、Date、RegExp、Function、Boolean、Number、String等。  
内置对象    
与宿主无关，独立于宿主环境的ECMAScript实现提供的对象。   
在 ECMAScript 程序开始执行前就存在，本身就是实例化内置对象，开发者无需再去实例化。  
内置对象是本地对象的子集。  
包含：Global和Math。  
ECMAScript5中增添了JSON这个存在于全局的内置对象。  
宿主对象    
由 ECMAScript实现的宿主环境提供的对象，包含两大类，一个是宿主提供，一个是自定义类对象。 
所有非本地对象都属于宿主对象。  
对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，如Window和Document等。
所有的DOM和BOM对象都属于宿主对象。

关于专业名词：本地对象也经常被叫做原生对象或内部对象，包含Global和Math在内的内置对象在《JavaScript高级程序设计》里也被叫做单体内置对象，很多时候，干脆也会直接把本地对象和内置对象统称为“内置对象”，也就是说除了宿主对象，剩下的都是ECMAScript的内部的“内置”对象。

#### 3. 说几条写JavaScript的基本规范？
https://github.com/fex-team/styleguide/blob/master/javascript.md
https://www.css88.com/archives/8405

####4. JavaScript原型，原型链 ? 有什么特点？
prototype(显式原型), __proto__(隐式原型)的区别:


####5. JavaScript有几种类型的值？，你能画一下他们的内存图吗？

 栈：原始数据类型（Undefined，Null，Boolean，Number、String）
 堆：引用数据类型（对象、数组和函数）

 特点：
 两种类型的区别是：存储位置不同；
 原始数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
https://segmentfault.com/a/1190000016733918

#### 6. 如何将字符串转化为数字，例如'12.3b'?
parseInt(), parseFloat(), Number()(转换的是整个值，而不是部分值)
扩展：转换函数、强制类型转换、利用JS变量弱类型特点进行转换；
https://www.jianshu.com/p/7962deab3cea
https://blog.csdn.net/Inuyasha1121/article/details/40182105

#### 7.  如何将浮点数点左边的数每三位添加一个逗号， 如12000000.11 转化为『12,000,000.11』?

```
  function commafy(num){
    return num && num
        .toString()
        .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
            return $2 + ',';
        });
  }


```

####8. 如何实现数组的随机排序？
```
方法一：
    var arr = [1,2,3,4,5,6,7,8,9,10];
    function randSort1(arr){
        for(var i = 0,len = arr.length;i < len; i++ ){
            var rand = parseInt(Math.random()*len);
            var temp = arr[rand];
            arr[rand] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    console.log(randSort1(arr));
    
  方法二：
    var arr = [1,2,3,4,5,6,7,8,9,10];
    function randSort2(arr){
        var mixedArray = [];
        while(arr.length > 0){
            var randomIndex = parseInt(Math.random()*arr.length);
            mixedArray.push(arr[randomIndex]);
            arr.splice(randomIndex, 1);
        }
        return mixedArray;
    }
    console.log(randSort2(arr));

  方法三：
    var arr = [1,2,3,4,5,6,7,8,9,10];
    arr.sort(function(){
        return Math.random() - 0.5;
    })
    console.log(arr);
```

####9.Javascript如何实现继承
####10.javascript创建对象的几种方式
####11.Javascript作用链域
####12.谈谈This对象的理解
####13.eval是做什么的？
####14.什么是window对象? 什么是document对象?
####15.null，undefined 的区别？
####16.写一个通用的事件侦听器函数。
####17.["1", "2", "3"].map(parseInt) 答案是多少？
####18.事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
####19.什么是闭包（closure），为什么要用它？
####20.javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
####21.如何判断一个对象是否属于某个类？
####22.new操作符具体干了什么呢?
####23.用原生JavaScript的实现过什么功能吗？
####24.Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
####25.JSON 的了解
####26.`[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？`
####27.js延迟加载的方式有哪些？
####28.Ajax 是什么? 如何创建一个Ajax？
####29.Ajax 解决浏览器缓存问题？
####30.同步和异步的区别?
####31. 如何解决跨域问题?
####32. 页面编码和被请求的资源编码如果不一致如何处理？
####33. 服务器代理转发时，该如何处理cookie？
####34. 模块化开发怎么做？
####35. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
####36. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）
####37. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？
####38. 谈一谈你对ECMAScript6的了解？
####39. ECMAScript6 怎么写class么，为什么会出现class这种东西?
####40. 异步加载JS的方式有哪些？
####41. documen.write和 innerHTML的区别
####42. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?
####43. call() 和 apply() 的区别？
####44. 数组和对象有哪些原生方法，列举一下？
####45. JS 怎么实现一个类。怎么实例化这个类
####46. JavaScript中的作用域与变量声明提升？
####47. 如何编写高性能的Javascript？
####48. 那些操作会造成内存泄漏？
####49. JQuery的源码看过吗？能不能简单概况一下它的实现原理？
####50. jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
####51. jquery中如何将数组转化为json字符串，然后再转化回来？
####52. jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
####53. jquery.extend 与 jquery.fn.extend的区别？
####54. jQuery 的队列是如何实现的？队列可以用在哪些地方？
####55. 谈一下Jquery中的bind(),live(),delegate(),on()的区别？
####56. JQuery一个对象可以同时绑定多个事件，这是如何实现的？
####57. 是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？
####58. jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）
####59. 针对 jQuery性能的优化方法？
####60. Jquery与jQuery UI 有啥区别？
####61. jQuery和Zepto的区别？各自的使用场景？
####62. Zepto的点透问题如何解决？
####63. jQueryUI如何自定义组件?
####64. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
####65. 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
####66. 移动端最小触控区域是多大？
####67. jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?
####68. 把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？
####69. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）
####70. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
####71. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？
####72. 解释JavaScript中的作用域与变量声明提升？
####73. 那些操作会造成内存泄漏？
####74. Node.js的适用场景？
####75. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
####76. 解释一下 Backbone 的 MVC 实现方式？
####77. 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?
####78. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
####79. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
####80. 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?
####81. 简述一下 Handlebars 的基本用法？
####82. 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？
####83. 检测浏览器版本版本有哪些方式？
####84. What is a Polyfill?
####85. 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
####86. 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？
####87. 使用JS实现获取文件扩展名？
####88. Webpack热更新实现原理?
####89. 请介绍一下JS之事件节流？
####90. 什么是JS的函数防抖？
####91.
####92.
####93.
####94.
####95.
####96.
####97.
####98.
####99.
####100.



