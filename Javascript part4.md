## Part 4 库,框架及其他
#### 1. jQuery的源码看过吗？能不能简单概况一下它的实现原理？
    没细看;     
    jQuery可以分为入口模块, 底层支持模块和功能模块三部分;    
    入口模块: 构造jQuery对象;   
    底层支持模块: 工具方法(Utilities), 选择器(Sizzle), 回调函数列表(Callbacks Object), 异步队列(Deferred Object), 浏览器功能测试(Support), 数据缓存(Data), 队列;    
    功能模块: 属性操作(Attribute), 事件系统(Events), DOM遍历(Traversing), 样式操作(CSS), 异步请求(Ajax), 动画(Effects);
![jQuery模块分类](https://thumbnail0.baidupcs.com/thumbnail/fcb526a5ca49a1d6aeb7c6c9918c73eb?fid=3825913931-250528-945902542473770&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-zoK%2f9fJRNROWfm8VleS%2fdKxS6wI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746396159924838046&dp-callid=0&time=1556499600&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)

![jQuery源码总体结构](https://thumbnail0.baidupcs.com/thumbnail/7cc5c5fb116857c7fe0d5aa2c5cd4b53?fid=3825913931-250528-181993357041500&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iHIvyd8v1AH%2fedjp6rsS%2bc8AL6c%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746396159924838046&dp-callid=0&time=1556499600&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)

    其核心是构造jQuery对象, 调用构造函数jQuery根据传入的参数不同,  创建jQuery对象也不同;   
    在立即执行函数内, 定义变量jQuery, 自调用匿名函数返回jQuery构造函数并赋值给变量jQuery, 最后再把这个jQuery变量暴露给全局作用域window, 并定义为别名$.    
![构造jQuery对象模块的总体源码结构](https://thumbnail0.baidupcs.com/thumbnail/68c4e7e9b2519bc897e80c62e3231b1b?fid=3825913931-250528-912614335947438&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-2GhDYHk1hwg7REPvdsrpottUR30%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746396159924838046&dp-callid=0&time=1556499600&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)
![构造jQuery对象模块的总体源码结构解析](https://thumbnail0.baidupcs.com/thumbnail/ca581c58f578485223a9f759581da43a?fid=3825913931-250528-129703248934925&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-xz6yw3FalpNXkxQsFRxDcXtrfSY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746759758132300828&dp-callid=0&time=1556503200&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)

#### 2. jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

#### 3. jquery中如何将数组转化为json字符串，然后再转化回来？

#### 4. jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

#### 5. jquery.extend 与 jquery.fn.extend的区别？
     - jquery.extend 为jquery类添加类方法，可以理解为添加静态方法
     - jquery.fn.extend:
        源码中jquery.fn = jquery.prototype，所以对jquery.fn的扩展，就是为jquery类添加成员函数
     使用：
     jquery.extend扩展，需要通过jquery类来调用，而jquery.fn.extend扩展，所有jquery实例都可以直接调用。
#### 6.jQuery 的队列是如何实现的？队列可以用在哪些地方？

#### 7. 谈一下Jquery中的bind(),live(),delegate(),on()的区别？

#### 8. JQuery一个对象可以同时绑定多个事件，这是如何实现的？

#### 9.是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

#### 10.jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

#### 11.针对 jQuery性能的优化方法？

#### 12.Jquery与jQuery UI 有啥区别？
     *jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。
     *jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
      提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等
 

#### 13.jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：

    $.fn.stringifyArray = function(array) {
        return JSON.stringify(array)
    }

    $.fn.parseArray = function(array) {
        return JSON.parse(array)
    }

    然后调用：
    $("").stringifyArray(array)
jQuery和Zepto的区别？各自的使用场景？

针对 jQuery 的优化方法？

 *基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。

 *频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。
  比如：var str=$("a").attr("href");

 *for (var i = size; i < arr.length; i++) {}
  for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：
  for (var i = size, length = arr.length; i < length; i++) {}
Zepto的点透问题如何解决？

#### 67. jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?


#### 69. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）
#### 70. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
#### 71. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

#### 74. Node.js的适用场景？
#### 75. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
#### 76. 解释一下 Backbone 的 MVC 实现方式？


#### 79. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
    单元测试(Unit Test): mocha, jasmine, jest. 
    比较细粒度的去测试我们业务代码中写的function, 测试function里提供的method是否可靠.
    e2e测试(端对端测试):利用一些工具库提供的API使用代码来模拟终端用户在UI界面上的操作,比如输入, 点击等等。目前常用的工具有: selenium, puppeteer, phantom, protractor(angular), Nightwatch(Vue)等等.
[作为一个前端开发到底要不要写测试](https://segmentfault.com/a/1190000015724775)</br>
[如何进行前端自动化测试？](https://www.zhihu.com/question/29922082)</br>
[TDD 与 BDD 仅仅是语言描述上的区别么？](https://www.zhihu.com/question/20161970)</br>
[[从入门到不放弃]多浏览器的自动化测试(1)-本地测试](https://zhuanlan.zhihu.com/p/27473256)</br>

#### 80. 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

#### 81. 简述一下 Handlebars 的基本用法？

#### 82. 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

#### 83. 检测浏览器版本版本有哪些方式？
 [JS 获得浏览器类型和版本](https://segmentfault.com/a/1190000007640795)</br>

#### 84. What is a Polyfill?
[HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) <br>
[shim 和 polyfill）](http://www.ituring.com.cn/article/details/766#)<br>
[JavaScript术语：shim 和 polyfill](https://www.html.cn/archives/8339)<br>

#### 85. 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？


#### 88. Webpack热更新实现原理?



#### 88. http状态码?
    1** 信息响应
    2** 成功响应
    3** 重定向
    4** 客户端响应
    5** 服务端响应
    200 OK 请求成功，正常响应
    301 Moved Permanently 被请求的资源已永久移动到新位置
    302 Found 被请求的资源临时移动到新位置
    304 Not Modified 请求资源从上次请求以来未被修改
    400 Bad Request 请求包含语法错误
    401 Unauthorized 访问被拒绝，客户试图未经授权访问受密码保护的页面
    403 Forbidden  服务器已经理解请求，但是拒绝执行它
    404 Not Found 请求的资源在服务器上不存在
    500 Internal Server Error 服务器遇到了不知道如何处理的情况
    502 Bad Gateway
    504 Gateway Timeout
[HTTP状态码](http://www.httpstatus.cn/)
[关于Http协议，你必须要知道的](https://segmentfault.com/a/1190000016751071)
[HTTP 协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
[Http协议面试题小结](https://blog.csdn.net/weixin_38051694/article/details/77777010)
[HTTP 响应代码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
