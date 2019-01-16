1. 介绍JavaScript的基本数据类型
最新的 ECMAScript 标准定义了 7 种数据类型:

6 种原始类型:
Boolean
Null
Undefined
Number
String
Symbol (ECMAScript 6 新定义)
和 Object

2. 介绍js有哪些内置对象？
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

由 ECMAScript 实现的宿主环境提供的对象，包含两大类，一个是宿主提供，一个是自定义类对象。
所有非本地对象都属于宿主对象。
对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，如Window和Document等。
所有的DOM和BOM对象都属于宿主对象。

关于专业名词：本地对象也经常被叫做原生对象或内部对象，包含Global和Math在内的内置对象在《JavaScript高级程序设计》里也被叫做单体内置对象，很多时候，干脆也会直接把本地对象和内置对象统称为“内置对象”，也就是说除了宿主对象，剩下的都是ECMAScript的内部的“内置”对象。

3. 说几条写JavaScript的基本规范？
https://github.com/fex-team/styleguide/blob/master/javascript.md
https://www.css88.com/archives/8405

4. JavaScript原型，原型链 ? 有什么特点？
prototype(显式原型), __proto__(隐式原型)的区别:


5. JavaScript有几种类型的值？，你能画一下他们的内存图吗？

 栈：原始数据类型（Undefined，Null，Boolean，Number、String）
 堆：引用数据类型（对象、数组和函数）

 特点：
 两种类型的区别是：存储位置不同；
 原始数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
https://segmentfault.com/a/1190000016733918

6. 如何将字符串转化为数字，例如'12.3b'?
parseInt(), parseFloat(), Number()(转换的是整个值，而不是部分值)
扩展：转换函数、强制类型转换、利用JS变量弱类型特点进行转换；
https://www.jianshu.com/p/7962deab3cea
https://blog.csdn.net/Inuyasha1121/article/details/40182105