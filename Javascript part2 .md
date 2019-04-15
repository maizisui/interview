## Part 2 核心 面向对象
#### 4. JavaScript原型, 原型对象, 实例, 构造函数 ,`__proto__`,原型链 ? 有什么特点？
    所有对象有[[prototype]]属性，指向其构造函数的原型对象.
    所有函数都有prototype属性，指向其原型对象.
    所有实例都有constructor属性，指向其构造函数.
    每个函数对象都有一个`prototype` 属性, 这个属性指向函数的原型对象, 它包含了对象实例共享的方法和属性。  
    当我们访问一个对象的属性时, 如果这个对象内部不存在这个属性, 那么他就会去prototype里找这个属性, 这个prototype又会有自己的prototype, 于是就这样一直找下去，就构成了实例与原型之间的链条，也就是我们平时所说的原型链的概念。  
![示意图](https://image-static.segmentfault.com/475/872/475872986-5aab55344226c_articlex)</br>
[js中__proto__和prototype的区别和关系？](https://www.zhihu.com/question/34183746)</br>
[(JavaScript)原型与原型对象](https://segmentfault.com/a/1190000013778393)

#### 10.javascript创建对象的几种方式
    1. 工厂模式
       优点:
       缺点:
    2. 构造函数模式
       优点:
       缺点:
    3. 原型模式
       优点:
       缺点:
    4. 组合使用构造函数模式和原型模式
       优点:
       缺点:
    5. 动态原型模式
       优点:
       缺点:
    6. 寄生构造函数模式
       优点:
       缺点:
    7. 稳妥构造函数模式
       优点:
       缺点:
[JavaScript创建对象的七种方式](https://xxxgitone.github.io/2017/06/10/JavaScript%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%83%E7%A7%8D%E6%96%B9%E5%BC%8F/)</br>
[JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15   )</br>
[原生js的对象创建模式以及优缺点](https://segmentfault.com/a/1190000008293117)</br>
#### 9.Javascript如何实现继承
    原型链
    借用构造函数
    组合继承
    原型式继承
    寄生式继承
    寄生组合式继承
[JS实现继承的几种方式](http://www.cnblogs.com/humin/p/4556820.html) </br>
[Javascript面向对象编程：封装,构造函数的继承,非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)</br>
[JavaScript继承方式详解](https://segmentfault.com/a/1190000002440502)</br>
[JavaScript常见的继承方式](https://juejin.im/entry/5993eeaa51882524382f3c0b)</br>