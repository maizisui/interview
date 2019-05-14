## Part 4 库,框架及其他
#### 1. jQuery的源码看过吗？能不能简单概况一下它的实现原理？
    jQuery可以分为入口模块, 底层支持模块和功能模块三部分;    
    入口模块: 构造jQuery对象;   
    底层支持模块: 工具方法(Utilities), 选择器(Sizzle), 回调函数列表(Callbacks Object), 异步队列(Deferred Object),      
    浏览器功能测试(Support), 数据缓存(Data), 队列;    
    功能模块: 属性操作(Attribute), 事件系统(Events), DOM遍历(Traversing), 样式操作(CSS), 异步请求(Ajax), 动画(Effects);
![jQuery模块分类](https://thumbnail0.baidupcs.com/thumbnail/fcb526a5ca49a1d6aeb7c6c9918c73eb?fid=3825913931-250528-945902542473770&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-zoK%2f9fJRNROWfm8VleS%2fdKxS6wI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746396159924838046&dp-callid=0&time=1556499600&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)

![jQuery源码总体结构](https://thumbnail0.baidupcs.com/thumbnail/7cc5c5fb116857c7fe0d5aa2c5cd4b53?fid=3825913931-250528-181993357041500&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-iHIvyd8v1AH%2fedjp6rsS%2bc8AL6c%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746396159924838046&dp-callid=0&time=1556499600&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)

    其核心是构造jQuery对象, 调用构造函数jQuery根据传入的参数不同,  创建jQuery对象也不同;   
    在立即执行函数内, 定义变量jQuery, 自调用匿名函数返回jQuery构造函数并赋值给变量jQuery,       
    最后再把这个jQuery变量暴露给全局作用域window, 并定义为别名$.    
![构造jQuery对象模块的总体源码结构](https://thumbnail0.baidupcs.com/thumbnail/68c4e7e9b2519bc897e80c62e3231b1b?fid=3825913931-250528-912614335947438&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-2GhDYHk1hwg7REPvdsrpottUR30%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746396159924838046&dp-callid=0&time=1556499600&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)
![构造jQuery对象模块的总体源码结构解析](https://thumbnail0.baidupcs.com/thumbnail/ca581c58f578485223a9f759581da43a?fid=3825913931-250528-129703248934925&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-xz6yw3FalpNXkxQsFRxDcXtrfSY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2746759758132300828&dp-callid=0&time=1556503200&size=c1920_u1080&quality=90&vuk=3825913931&ft=image&autopolicy=1)

#### 2. jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
    jQuery.fn 的 init 方法 返回的 this 就是 jQuery 对象
    用户使用 jQuery() 或 $() 即可初始化 jQuery 对象，不需要动态的去调用 init 方法

#### 3. jQuery中如何将数组转化为json字符串，然后再转化回来？
    // 通过原生 JSON.stringify/JSON.parse 扩展 jQuery 实现
     $.array2json = function(array) {
        return JSON.stringify(array);
     }
     $.json2array = function(array) {
        // $.parseJSON(array); // 3.0 开始，已过时
        return JSON.parse(array);
     }
     // 调用
     var json = $.array2json(['a', 'b', 'c']);
     var array = $.json2array(json);

#### 4. jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
    浅拷贝（只复制一份原始对象的引用） var newObject = $.extend({}, oldObject);
    深拷贝（对原始对象属性所引用的对象进行进行递归拷贝） var newObject = $.extend(true, {}, oldObject);
[jQuery.extend 与 jQuery.fn.extend使用](https://thumbnail0.baidupcs.com/thumbnail/2171f651e7b8e45f1636b1db2710f9b1?fid=3825913931-250528-448051292313021&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TT%2b0Fumnahf5kIECbSOypRtd8V8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2757629071950649758&dp-callid=0&time=1556542800&size=c1536_u864&quality=90&vuk=3825913931&ft=image&autopolicy=1)
[jQuery.extend 与 jQuery.fn.extend源码分析](https://thumbnail0.baidupcs.com/thumbnail/c35d1ee3338dabc3d213d6872e2fabc7?fid=3825913931-250528-629694906887199&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ECiv%2bnFt5tniBR9TW2htpvby1S8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2757753738135064217&dp-callid=0&time=1556542800&size=c1536_u864&quality=90&vuk=3825913931&ft=image&autopolicy=1)
#### 5. jQuery.extend 与 jQuery.fn.extend的区别？
    $.fn.extend() 和 $.extend() 是 jQuery 为扩展插件提拱了两个方法
    $.extend(object); // 为jQuery添加“静态方法”（工具方法）
        $.extend({
        　　min: function(a, b) { return a < b ? a : b; },
        　　max: function(a, b) { return a > b ? a : b; }
        });
        $.min(2,3); //  2
        $.max(4,5); //  5
    $.extend([true,] targetObject, object1[, object2]); // 对targt对象进行扩展
        var settings = {validate:false, limit:5};
        var options = {validate:true, name:"bar"};
        $.extend(settings, options);  // 注意：不支持第一个参数传 false
        // settings == {validate:true, limit:5, name:"bar"}
    $.fn.extend(json); // 为jQuery添加“成员函数”（实例方法）
        $.fn.extend({
           alertValue: function() {
              $(this).click(function(){
                alert($(this).val());
              });
           }
        });
        $("#email").alertValue();

#### 6.jQuery 的队列是如何实现的？队列可以用在哪些地方？
    jQuery 核心中有一组队列控制方法，由 queue()/dequeue()/clearQueue() 三个方法组成。
    主要应用于 animate()，ajax，其他要按时间顺序执行的事件中.

[jQuery队列原理](https://thumbnail0.baidupcs.com/thumbnail/070e07ea272b3da8f10357da662d36f7?fid=3825913931-250528-655834159106749&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6Aa%2fnxCWyqUlIMFj0x9T%2fRbw9qo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2757935150286340639&dp-callid=0&time=1556542800&size=c1536_u864&quality=90&vuk=3825913931&ft=image&autopolicy=1)
[jQuery队列源码](https://thumbnail0.baidupcs.com/thumbnail/d733be21f89ab0cd5f0810c5647d2351?fid=3825913931-250528-357468821142822&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-hGg30VO2ut%2fb7zPBeP1n8YiCiUo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2757935150286340639&dp-callid=0&time=1556542800&size=c1536_u864&quality=90&vuk=3825913931&ft=image&autopolicy=1)

#### 7. 谈一下jQuery中的bind(),live(),delegate(),on()的区别？
    bind 直接绑定在目标元素上.  
    live 通过冒泡传播事件，默认document上，支持动态数据. 
    delegate 更精确的小范围使用事件代理，性能优于 live. 
    on 是最新的1.7版本整合了之前的三种方式的新事件绑定机制.
[bind(),live(),delegate(),on()的区别](https://segmentfault.com/a/1190000010435530)    

#### 8. jQuery一个对象可以同时绑定多个事件，这是如何实现的？
    //绑定多个事件对应同一个事件处理
    $("#btn").on("mouseover mouseout", func);
    //绑定多个事件对应不同的事件处理函数
    $("#btn").on({
      mouseover: func1,
      mouseout: func2,
      click: func3
    });
    内部调用底层方法jQuery.event.add(elem,types,handler,data,selector)来实现;   
    如果参数events是对象, 则遍历events参数, 递归调用on方法;
[jQuery.on实现源码分析](https://thumbnail0.baidupcs.com/thumbnail/b4a75a097cabe6e3dc467882200fb2b9?fid=3825913931-250528-952615814318067&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-8gKrh3afHAt0i5c9Ghws4fyf12U%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2756843689649874548&dp-callid=0&time=1556539200&size=c1536_u864&quality=90&vuk=3825913931&ft=image&autopolicy=1)    

#### 9.是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？
    事件即“发布/订阅”模式，自定义事件即“消息发布”，事件的监听即“订阅订阅”
    JS 原生支持自定义事件，示例：
      document.createEvent(type); // 创建事件
      event.initEvent(eventType, canBubble, prevent); // 初始化事件
      target.addEventListener('dataavailable', handler, false); // 监听事件
      target.dispatchEvent(e);  // 触发事件
    jQuery 里的 fire 函数用于调用 jQuery 自定义事件列表中的事件

#### 10.jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）
    Sizzle 选择器采取 Right To Left 的匹配模式，先搜寻所有匹配标签，再判断它的父节点
    jQuery 通过 $(selecter).find(selecter); 和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

#### 12.jQuery 与 jQuery UI、jQuery Mobile 区别？
    jQuery 是 JS 库，兼容各种PC浏览器，主要用作更方便地处理 DOM、事件、动画、AJAX
    jQuery UI 是建立在 jQuery 库上的一组用户界面交互、特效、小部件及主题
    jQuery Mobile 以 jQuery 为基础，用于创建“移动Web应用”的框架
 
#### 13.jQuery和Zepto的区别？各自的使用场景？
    jQuery主要目标是PC的网页中, 兼容全部主流浏览器。 在移动设备方面, 单独推出jQuery Mobile.     
    Zepto 从一开始就定位移动设备, 相对更轻量级, 它的 API 基本兼容 jQuery, 但对PC浏览器兼容不理想   .   

#### 14.针对 jQuery 的优化方法？
    缓存频繁操作DOM对象
    尽量使用id选择器代替class选择器
    总是从#id选择器来继承
    尽量使用链式操作
    使用时间委托 on 绑定事件
    采用jQuery的内部函数data()来存储数据
    使用最新版本的 jQuery
    Zepto的点透问题如何解决？

#### 15. jQuery的slideUp动画, 如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?
    在触发元素上的事件设置为延迟处理：使用 JS 原生 setTimeout 方法;    
    在触发元素的事件时预先停止所有的动画，再执行相应的动画事件：$('.tab').stop().slideUp();

#### 16. 你觉得jQuery或zepto源码有哪些写的好的地方
    jquery源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，  
    好处是当jquery中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问window对象。                   
    同样，传入undefined参数，可以缩短查找undefined时的作用域链 
        (function( window, undefined ) {
             //用一个函数域包起来，就是所谓的沙箱
             //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局
             //把当前沙箱需要的外部变量通过函数参数引入进来
             //只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数
            window.jQuery = window.$ = jQuery;
        })( window ); 
    jquery将一些原型属性和方法封装在了jquery.prototype中，为了缩短名称，又赋值给了jquery.fn，这是很形象的写法        
    有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度        
    jquery实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率

#### 17.jQuery UI 如何自定义组件？
    通过向 $.widget() 传递组件名称和一个原型对象来完成;  
    $.widget("ns.widgetName", [baseWidget], widgetPrototype);

#### 70. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

#### 71. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

#### 74. Node.js的适用场景？

#### 75. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?

#### 76. 解释一下 Backbone 的 MVC 实现方式？

#### 79. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
    单元测试(Unit Test): mocha, jasmine, jest. 
    比较细粒度的去测试我们业务代码中写的function, 测试function里提供的method是否可靠.
    e2e测试(端对端测试):利用一些工具库提供的API使用代码来模拟终端用户在UI界面上的操作,比如输入,点击等等。            
    目前常用的工具有: selenium, puppeteer, phantom, protractor(angular), Nightwatch(Vue)等等.
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
    Shim 指的是在一个旧的环境中模拟出一个新API, 而且仅靠旧环境中已有的手段实现, 以便所有的浏览器具有相同的行为。     
    主要特征：
    该 API 存在于现代浏览器中;   
    浏览器有各自的 API 或 可通过别的 API 实现;          
    API 的所有方法都被重新实现；          
    拦截 API 调用，并提供自己的实现；          
    是一个优雅降级。    
    
    polyfill是一段代码(或者插件), 提供了那些开发者们希望浏览器原生提供支持的功能。          
    程序库先检查浏览器是否支持某个API，如果不支持则加载对应的 polyfill。    
    主要特征：
    是一个浏览器 API 的 Shim;      
    与浏览器有关;       
    没有提供新的API，只是在 API 中实现缺少的功能;         
    以只需要引入 polyfill ，它会静静地工作;        
    shim 的概念要比 polyfill 更大一些，可以将 polyfill 理解为专门兼容浏览器 API 的 shim 。      
    简单的说，如果浏览器X支持标准规定的功能，那么 polyfill 可以让浏览器 Y 的行为与浏览器 X 一样。  
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
