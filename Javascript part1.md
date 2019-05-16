## Part 1 基础
#### 1. 介绍JavaScript的基本数据类型
    最新的 ECMAScript 标准定义了 7 种数据类型:  
    6 种原始类型:
    Undefined
    Null
    Boolean
    Number
    String
    Symbol (ECMAScript 6 新定义)
    和 Object 
    数据类型判断方法：   
    那么问题来了，如何判断某变量是否为数组数据类型？    
    方法一：判断其是否具有“数组性质”，如slice()方法。可自己给该变量定义slice方法, 故有时会失效;   
    方法二：obj instanceof Array 在某些IE版本中不正确;     
    方法三：方法一二皆有漏洞, 在ECMA Script5中定义了新方法Array.isArray(),    保证其兼容性，最好的方法如下：   
        if(typeof Array.isArray==="undefined") {
          Array.isArray = function(arg){
              return Object.prototype.toString.call(arg)==="[object Array]"
            }; 
        }

#### 2. 介绍js有哪些内置对象？
    Object 是 JavaScript 中所有对象的父对象  
    数据封装类对象：Object、Array、Boolean、Number 和 String  
    其他对象：Function、Arguments、Math、Date、RegExp、Error   
    
    扩展：
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
    对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，
    如Window和Document等。
    所有的DOM和BOM对象都属于宿主对象。
    
    关于专业名词：本地对象也经常被叫做原生对象或内部对象，包含Global和Math在内的内置对象在
    《JavaScript高级程序设计》里也被叫做单体内置对象，很多时候，
    干脆也会直接把本地对象和内置对象统称为“内置对象”，也就是说除了宿主对象，
    剩下的都是ECMAScript的内部的“内置”对象。
[JS所有内置对象属性和方法汇总](https://segmentfault.com/a/1190000011467723) </br>
[标准内置对象的分类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)    
    
#### 3. 说几条写JavaScript的基本规范？
     1.不要在同一行声明多个变量。  
     2.请使用 ===/!==来比较true/false或者数值  
     3.使用对象字面量替代new Array这种形式  
     4.不要使用全局函数。  
     5.Switch语句必须带有default分支  
     6.函数不应该有时候有返回值，有时候没有返回值。  
     7.For循环必须使用大括号  
     8.If语句必须使用大括号  
     9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。  
[JavaScript编码规范](https://github.com/fex-team/styleguide/blob/master/javascript.md)</br>
[5个JavaScript编码规范-包括AirBnB, GitHub 和 Google](https://www.css88.com/archives/8405)
[前端JavaScript规范](http://www.codeceo.com/article/javascript-guide.html)

#### 4. JavaScript有几种类型的值？，你能画一下他们的内存图吗？
    栈：原始数据类型（Undefined，Null，Boolean，Number、String）
    堆：引用数据类型（对象、数组和函数）  
    特点：
    两种类型的区别是：存储位置不同；
    原始数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，
    属于被频繁使用数据，所以放入栈中存储；
    引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。
    如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，
    该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，
    取得地址后从堆中获得实体。
[JavaScript的数据类型及其检测](https://segmentfault.com/a/1190000016733918)

#### 5. 如何将字符串转化为数字，例如'12.3b'?
    parseInt(), parseFloat(), Number()(转换的是整个值，而不是部分值)
    扩展：转换函数、强制类型转换、利用JS变量弱类型特点进行转换；
[JavaScript 字符串与数字的相互转换](https://www.jianshu.com/p/7962deab3cea)

#### 6.Javascript作用链域
    当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，
    就会从父级(词法层面上的父级)执行上下文的变量对象中查找, 一直找到全局上下文的变量对象, 也就是全局对象。   
    这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
[JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)</br>
[深入了解 JavaScript，从作用域链开始（1）](https://juejin.im/entry/57f5d492bf22ec006475238f)</br>
[理解JavaScript的作用域链](https://www.cnblogs.com/wilber2013/p/4909459.html)</br>

#### 7.谈谈This对象的理解
    this是Javascript语言的一个关键字。  
    它代表函数运行时，自动生成的一个内部对象，而且是所有函数运行时的一个隐藏参数，指向函数的运行环境。  
    this的使用可以分成以下几个场合: 
    **（1）全局环境**   
    在全局环境使用this，它指的就是顶层对象window。  
    **（2）构造函数**     
    构造函数中的this，指的是实例对象。   
    **（3）对象的方法**  
    如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。
    如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。

[JavaScript 的 this 原理](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)</br>
[Javascript 的 this 用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)</br>
[彻底理解js中this的指向](https://www.cnblogs.com/pssp/p/5216085.html)</br>
[从这两套题，重新认识JS的this、作用域、闭包、对象](https://juejin.im/post/59aa71d56fb9a0248d24fae3)</br>
[this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)</br>
[深入理解 js this 绑定](https://segmentfault.com/a/1190000011194676)</br>
[你不懂JS：this与对象原型 第二章：this豁然开朗！](https://www.jianshu.com/p/fcbc21a2c507)</br>
[深入浅出 JavaScript 中的 this](https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html)</br>
[如何理解 JavaScript 中的 this 关键字？](https://www.zhihu.com/question/19636194)</br>
[this 关键字](https://wangdoc.com/javascript/oop/this.html)
#### 8.eval是做什么的？
    eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    但是应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
    由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');
    如果 eval() 的参数不是字符串， eval() 将会将参数原封不动的返回.
    eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象.
    如果你间接的使用 eval()，比如通过一个引用来调用它，而不是直接的调用 eval 。 
    从 ECMAScript 5 起, 它工作在全局作用域下，而不是局部作用域中。
   [JavaScript 为什么不推荐使用 eval？](https://www.zhihu.com/question/20591877)</br>
#### 9.null，undefined 的区别？
    ECMAScript 规范认为，既然 null 和  undefined 的行为很相似，并且都表示 一个无效的值，
    那么它们所表示的内容也具有相似性，即有undefined == null.
    typeof null        // "object" (因为一些以前的原因而不是'null')
    typeof undefined   // "undefined"
    null是一个表示"无"的对象，转为数值时为0；
    undefined是一个表示"无"的原始值，转为数值时为NaN。
    Number(undefined) // NaN
    5 + undefined  // NaN
    null表示"没有对象"，即该处不应该有值。典型用法是：
    （1） 作为函数的参数，表示该函数的参数不是对象。
    （2） 作为对象原型链的终点。
    undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：
    （1）变量被声明了，但没有赋值时，就等于undefined。
    （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
    （3）对象没有赋值的属性，该属性的值为undefined。
    （4）函数没有返回值时，默认返回undefined。

#### 10.`["1", "2", "3"].map(parseInt)` 答案是多少？
    [1, NaN, NaN]  
[详细解析](http://blog.csdn.net/justjavac/article/details/19473199)  </br>

#### 11.什么是闭包（closure），为什么要用它？
    闭包是指有权访问另一个函数作用域中变量的函数，
    创建闭包的最常见的方式就是在一个函数内创建另一个函数，
    通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。  
    闭包的最大用处有两个，
    一个是可以读取函数内部的变量，
    另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
    闭包的另一个用处，是封装对象的私有属性和私有方法。
[用闭包模拟私有方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures#Emulating_private_methods_with_closures)    

#### 12.javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
    'use strict'是一种ECMAscript 5 添加的一种运行模式：即严格模式,这种模式使得 Javascript 在更严格的条件下运行。
    设立"严格模式"的目的，主要有以下几个：
    - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    - 消除代码运行的一些不安全之处，保证代码运行的安全；
    - 提高编译器效率，增加运行速度；
    - 为未来新版本的Javascript做好铺垫。
    严格模式对Javascript的语法和行为，都做了一些改变。
    4.1 全局变量显式声明
    4.2 静态绑定
    （1）禁止使用with语句
    （2）创设eval作用域
    4.3 增强的安全措施
    （1）禁止this关键字指向全局对象
    （2）禁止在函数内部遍历调用栈
    4.4 禁止删除变量
    4.5 显式报错
    4.6 重名错误
    （1）对象不能有重名的属性
    （2）函数不能有重名的参数
    4.7 禁止八进制表示法
    4.8 arguments对象的限制
    （1）不允许对arguments赋值
    （2）arguments不再追踪参数的变化
    （3）禁止使用arguments.callee
    4.9 函数必须声明在顶层
    4.10 保留字
    为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：
    implements, interface, let, package, private, protected, public, static, yield。
    使用这些词作为变量名将会报错。
[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)</br>
[Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)</br>

#### 13.如何判断一个对象是否属于某个类？
    JavaScript中判断一个对象是否为一个类的实例主要有两种方法，即instanceof和constructor。   
    前者的用法是：`object instanceof constructor`；  
    后者的用法是：`var o = new Object // 或者 o = {} ;  o.constructor == Object`；    
    区别：constructor 更加精确地指向对象所属的类，而对 instanceof 而言，即使是父类也会返回true。
    <pre>
    var a = [1, 2, 3];  
    alert(a instanceof Array);  //返回true  
    alert(a instanceof Object);  //返回true  
    alert(a.constructor == Array);  //返回true  
    alert(a.constructor == Object);  //返回false  
    </pre>

#### 14.new操作符具体干了什么呢?
    new命令的作用，就是执行构造函数，返回一个实例对象。     
    使用new命令时，它后面的函数调用就不是正常的调用，而是依次执行下面的步骤。  
    - 创建一个空对象，作为将要返回的对象实例；   
    -  将这个空对象的原型，指向构造函数的prototype属性；   
    -  将这个空对象赋值给函数内部的this关键字；   
    -  开始执行构造函数内部的代码。  

#### 15.用原生JavaScript的实现过什么功能吗？

#### 16.Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
     `hasOwnProperty`  
    javaScript中`hasOwnProperty()`方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。
    此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。  
    使用方法：  
    `object.hasOwnProperty(proName)`     
    如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty()方法返回 true，反之则返回 false。

#### 17.JSON 的了解
    JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）。   
    JSON 是存储和交换文本信息的语法，类似 XML，JSON 比 XML 更小、更快，更易解析。  
    JSON 是轻量级的文本数据交换格式。  
    JSON 独立于语言 *。  
    JSON 具有自我描述性，更易理解。  
    * JSON 使用JavaScript 语法来描述数据对象，但是JSON仍然独立于语言和平台。JSON解析器和JSON库支持许多不同的编程语言。  
    **优点：**  
    轻量级、易于人的阅读和编写，便于机器（JavaScript）解析，支持复合数据类型（数组、对象、字符串、数字）。  
    **缺点：**   
    和许多好东西都具有两面性一样，JSON的非冗长性也不例外，为此JSON丢失了XML具有的一些特性。
    命名空间允许不同上下文中的相同的信息段彼此混合，然而，显然在JSON中已经找不到了命名空间。
    JSON与XML的另一个差别是属性的差异，由于JSON采用冒号赋值，这将导致当XML转化为 JSON时，
    在标识符（XML  CDATA）与实际属性值之间很难区分谁应该被当作文本考虑。   
    另外，JSON片段的创建和验证过程比一般的XML稍显复杂。从这一点来看，XML在开发工具方面领先于JSON。
    JSON字符串转换为JSON对象:
    var obj =eval('('+ str +')');
    var obj = str.parseJSON();
    var obj = JSON.parse(str);
    JSON对象转换为JSON字符串：
    var last=obj.toJSONString();
    var last=JSON.stringify(obj);

#### 18.`[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？`

#### 19.js延迟加载的方式有哪些？
    （1）直接将script节点放置在</body>之前，这样js脚本就会在页面显示出来之后再加载。  
    （2）使用script标签的defer和async属性，defer属性为延迟加载，是在页面渲染完成之后再进行加载的，
    而async属性则是和文档并行加载，这两种解决方案都不完美，原因在于不是所有浏览器都支持。  
    直接插入代码、将脚本放置在底部和使用“defer”或“async”，
    这几种方法都不能达到先加载页面后加载JS的目的，而且它们肯定不能在各个浏览器上表现一致。   
    （3）Google帮助页面的推荐方案： (动态创建DOM方式（用得最多）) 
    下面是Google推荐的代码。这些代码应被放置在</body>标签前(接近HTML文件底部)。另外，我将外部JS文件名突出显示。  
    <pre>
       function downloadJSAtOnload() {  
          var element = document.createElement("script");  
          element.src = "defer.js";  
          document.body.appendChild(element);  
       }  
       if (window.addEventListener)  
          window.addEventListener("load",downloadJSAtOnload, false);  
       else if (window.attachEvent)  
          window.attachEvent("onload",downloadJSAtOnload);  
       else window.onload =downloadJSAtOnload;  
    </pre>  
    说明：   
    1）复制上面代码、粘贴到HTML的</body>标签前(靠近HTML文件底部)，修改“defer.js”为你的外部JS文件。   
    2）不应该把那些页面正常加载需要依赖的javascript代码放在这里。   
    3）将JavaScript代码分成两组：一组是因页面需要而立即加载的javascript代码，
    另外一组是在页面加载后进行操作的javascript代码(例如添加click事件或其他东西)。
    这些需等到页面加载后再执行的JavaScript代码，应放在一个外部文件，然后再引进来。   
    （4）通过ajax下载js脚本，动态添加script节点。但是ajax有一个缺点，就是无法引用使用CDN方式提供的js文件，
    因为这种方式下，你即时通过xhr.open下载了js文件，而向body中注入script节点时还是需要向CDN请求js文件。   

#### 20.Ajax 是什么? 如何创建一个Ajax？
    AJAX(Asynchronous Javascript And XML) = 异步 JavaScript + XML, 是浏览器用来实现异步加载的一种技术方案.
    在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新。
    创建 ajax 步骤：
    1.创建 XMLHttpRequest 对象
    2.创建一个新的 HTTP 请求，并指定该 HTTP 请求的类型、验证信息
    3.设置响应 HTTP 请求状态变化的回调函数
    4.发送 HTTP 请求
    5.获取异步调用返回的数据
    6.使用 JavaScript 和 DOM 实现局部刷新
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
            fn.call(this, xhr.responseText);
        }
    };
    xhr.send(data);
[Ajax 是什么? 如何创建一个Ajax？](https://zhuanlan.zhihu.com/p/23605192)
[深入浅出Ajax](https://segmentfault.com/a/1190000015611594)

#### 21.Ajax 解决浏览器缓存问题？
    1、在ajax发送请求前加上anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
    2、在ajax发送请求前加上anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
    3、在URL后面加上一个随机数： "fresh=" + Math.random();。
    4、在URL后面加上时间戳："nowtime=" + new Date().getTime();。
    5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。
    这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
[Ajax 解决浏览器缓存问题](https://www.jianshu.com/p/4f76f06383ec)</br>
[彻底理解浏览器的缓存机制](https://juejin.im/entry/5ad86c16f265da505a77dca4)</br>

#### 22.同步和异步的区别?
    网络通信中的同步机制和异步机制是描述通信模式的概念。
    同步机制是指发送方发送请求后,需要等待接收到接收方发回的响应后,才接着发送下一个请求;
    异步机制,和同步机制正好相反,在异步机制中,发送方发出一个请求后,不等待接收方响应这个请求,就继续发送下个请求。
    在同步机制中,所有的请求在服务器端得到同步,发送方和接收方对请求的处理步调是一致的;
    在异步机制中,所有来自发送方的请求形成一个队列,接收方处理完成后通知发送方。
[怎样理解阻塞非阻塞与同步异步的区别？](https://www.zhihu.com/question/19732473)</br>
[深入理解--异步和非阻塞](https://liuchi.coding.me/2017/07/28/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3-%E5%BC%82%E6%AD%A5%E5%92%8C%E9%9D%9E%E9%98%BB%E5%A1%9E/)</br>
[Javascript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)</br>

#### 23. 如何解决跨域问题?
[前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
#### 24. 页面编码和被请求的资源编码如果不一致如何处理？
#### 25. 服务器代理转发时，该如何处理cookie？
#### 26. 模块化开发怎么做？
#### 27. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
#### 28. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）
#### 29. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？
#### 30. 谈一谈你对ECMAScript6的了解？
#### 31. ECMAScript6 怎么写class么，为什么会出现class这种东西?
#### 32. 异步加载JS的方式有哪些？

#### 33. call() 和 apply() 的区别？
    相同点:两个方法产生的作用是完全一样的
    不同点:方法传递的参数不同
    apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组。
    call 方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。
    //apply 和 call 的用法
    改变 this 指向
    借用别的对象的方法
    调用函数
[apply 和 call 的区别]( https://github.com/lin-xin/blog/issues/7)</br>

#### 34. 数组有哪些原生方法，列举一下？
    数组：
    Array.from(arrayLike[, mapFn[, thisArg]])  //从一个类似数组或可迭代对象中创建一个新的数组实例。 返回值:一个新的数组实例。
    Array.isArray(obj)  //判断某个变量是否是一个数组对象.  返回值: 如果对象是 Array，则为true; 否则为false。
    Array.of(element0[, element1[, ...[, elementN]]]) //创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 返回值: 新的 Array 实例
    
    修改器方法[Mutator methods], 会改变调用它们的对象自身的值：
    Array.prototype.pop()     //删除数组的最后一个元素，并返回这个元素。此方法更改数组的长度。
    Array.prototype.push(element1, ..., elementN))    //在数组的末尾增加一个或多个元素，并返回数组的新长度。
    Array.prototype.shift()   //删除数组的第一个元素，并返回这个元素。
    Array.prototype.unshift(element1, ..., elementN) //在数组的开头增加一个或多个元素，并返回数组的新长度。
    Array.prototype.reverse() //颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
    Array.prototype.sort()    //对数组元素进行排序，并返回当前数组。默认排序顺序是根据字符串Unicode码点.
    Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])  //在任意的位置给数组添加或删除任意个元素。
                                            
    访问方法[Accessor methods], 绝对不会改变调用它们的对象的值, 只会返回一个新的数组。
    Array.prototype.concat()  //合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组; var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
    Array.prototype.join([separator])   //连接所有数组元素组成一个字符串。
    Array.prototype.slice([begin[, end]])  //抽取当前数组中的一段元素组合成一个新数组。返回值:一个含有提取元素的新数组.
    Array.prototype.indexOf(searchElement[, fromIndex = 0]) //返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
    Array.prototype.lastIndexOf()
    Array.prototype.toString() //返回一个由所有数组元素组合而成的字符串。
                         
    迭代方法[Iteration methods], 回调函数作为参数
    Array.prototype.forEach(callback(element[, index[, array]])[, thisArg]) //为数组中的每个元素执行一次回调函数。
    Array.prototype.every(callback(element[, index[, array]])[, thisArg])  //如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
    Array.prototype.some(callback(element[, index[, array]])[, thisArg]) //如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
    Array.prototype.filter(callback(element[, index[, array]])[, thisArg]) //将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
    Array.prototype.map() //返回一个由回调函数的返回值组成的新数组。
    Array.prototype.reduce() //从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
    Array.prototype.reduceRight()
[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)       <br>  
[js 数组详细操作方法及解析合集](https://juejin.im/post/5b0903b26fb9a07a9d70c7e0)  <br>  
[JavaScript Array 对象](http://www.runoob.com/jsref/jsref-obj-array.html)</br>

#### 35. String有哪些原生方法，列举一下？
    String.fromCharCode(num1, ..., numN) //通过一串 Unicode 创建字符串。
    String.prototype.charAt(index) //返回特定位置的字符
    String.prototype.charCodeAt(index) //返回表示给定索引的字符的Unicode的值。
    String.prototype.concat(string2, string3[, ..., stringN]) //连接两个字符串文本，并返回一个新的字符串。
    String.prototype.includes(searchString[, position]) //判断一个字符串里是否包含其他字符串。
    String.prototype.indexOf(searchValue[, fromIndex]) //从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。
    String.prototype.lastIndexOf(searchValue[, fromIndex])
    String.prototype.match(regexp) //使用正则表达式与字符串相比较
    String.prototype.replace(regexp|substr, newSubStr|function) //被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串
    String.prototype.search(regexp) //对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标
    String.prototype.split([separator[, limit])  //通过分离字符串成字串，将字符串对象分割成字符串数组
    String.prototype.slice(beginSlice[, endSlice])     //摘取一个字符串区域，返回一个新的字符串
    String.prototype.substring(indexStart[, indexEnd]) //返回在字符串中指定两个下标之间的字符
    String.prototype.substr(start[, length])            //通过指定字符数返回在指定位置开始的字符串中的字符
    String.prototype.toLowerCase() //将字符串转换成小写并返回
    String.prototype.toUpperCase() //将字符串转换成大写并返回
    String.prototype.trim() //从字符串的开始和结尾去除空格
    String.prototype.toString()  //返回指定对象的字符串形式
    String.prototype.valueOf()
[String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

#### 36. Object有哪些原生方法，列举一下？
    Object
    Object构造函数的方法
    Object.assign(target, ...sources) //通过复制一个或多个对象来创建一个新的对象
    Object.create(proto, [propertiesObject]) //使用指定的原型对象和属性创建一个新对象
    Object.defineProperty(obj, prop, descriptor) //给对象添加一个属性并指定该属性的配置
    Object.defineProperties(obj, props) //给对象添加多个属性并分别指定它们的配置
    Object.entries() //返回给定对象自身可枚举属性的[key, value]数组
    Object.freeze()  //冻结对象：其他代码不能删除或更改任何属性
    Object.getOwnPropertyDescriptor(obj, prop) //返回对象指定的属性配置。
    Object.getOwnPropertyNames(obj) //返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
    Object.getOwnPropertySymbols() //返回一个数组，它包含了指定对象自身所有的符号属性。
    Object.getPrototypeOf(object)  //返回指定对象的原型对象。
    Object.is(value1, value2)   //比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）
    Object.isExtensible(obj) //判断对象是否可扩展。
    Object.isFrozen()  //判断对象是否已经冻结。
    Object.isSealed()  //判断对象是否已经密封。
    Object.keys(obj)  //返回一个包含所有给定对象自身可枚举属性名称的数组
    Object.preventExtensions() //防止对象的任何扩展。
    Object.seal() //防止其他代码删除对象的属性。
    Object.setPrototypeOf(obj, prototype) //设置对象的原型（即内部[[Prototype]]属性）。
    Object.values() //返回给定对象自身可枚举值的数组。
       
    Object 实例和Object 原型对象
    Object.prototype.hasOwnProperty(prop) //返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
    Object.prototype.isPrototypeOf(object)  //返回一个布尔值，表示指定的对象是否在本对象的原型链中。
    Object.prototype.propertyIsEnumerable(prop) //判断指定属性是否可枚举
    Object.prototype.toString() //返回对象的字符串表示。`"[object type]"` 其中type是对象的类型 Object.prototype.toString.call()
    Object.prototype.valueOf() //返回指定对象的原始值
[Object
](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### 37. Date有哪些原生方法，列举一下？
    Date.now() //返回自 1970-1-1 00:00:00  UTC（世界标准时间）至今所经过的毫秒数。
    Date.parse() //解析一个表示日期的字符串,并返回从 1970-1-1 00:00:00 所经过的毫秒数
    
    Date 实例
    
    Getter
    Date.prototype.getFullYear()     //根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）
    Date.prototype.getDate()         //根据本地时间返回指定日期对象的月份中的第几天（1-31）
    Date.prototype.getMonth()        //根据本地时间返回指定日期对象的月份（0-11）
    Date.prototype.getHours()        //根据本地时间返回指定日期对象的小时（0-23）
    Date.prototype.getMinutes()       //根据本地时间返回指定日期对象的分钟（0-59）
    Date.prototype.getSeconds()       //根据本地时间返回指定日期对象的秒数（0-59）
    Date.prototype.getMilliseconds()  //根据本地时间返回指定日期对象的毫秒（0-999）
    Date.prototype.getTime()          //返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数
    Date.prototype.getDay()            //根据本地时间返回指定日期对象的星期中的第几天（0-6）。 
    
    Setter
    Date.prototype.setFullYear(yearValue[, monthValue[, dayValue])
    Date.prototype.setDate(dayValue)
    Date.prototype.setMonth(monthValue[, dayValue])
    Date.prototype.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
    Date.prototype.setMinutes(minutesValue[, secondsValue[, msValue]])
    Date.prototype.setSeconds(secondsValue[, msValue])
    Date.prototype.setMilliseconds(millisecondsValue)
    Date.prototype.setTime(timeValue)
[Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

#### 38. Number有哪些原生方法，列举一下？
    Number.isNaN()
    Number.isFinite()
    Number.isInteger()
    Number.parseFloat(string) //解析一个字符串参数并返回一个浮点数
    Number.parseInt(string[, radix]) //解析一个字符串参数，并返回一个指定基数的整数
    Number.prototype.toExponential([fractionDigits]) //以指数表示法返回该数值字符串表示形式
    Number.prototype.toFixed([digits])  //使用定点表示法来格式化一个数。
    Number.prototype.toLocaleString() //返回这个数字在特定语言环境下的表示字符串. //var number = 3523600.89; number.toLocaleString() // "3,523,600.89"
    Number.prototype.toPrecision([precision]) //指定的精度返回该数值对象的字符串表示
    Number.prototype.toString([radix])  //返回指定 Number 对象的字符串表示形式。
    Number.prototype.valueOf()
[Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)    
#### 39. JS 怎么实现一个类。怎么实例化这个类
#### 40. JavaScript中的作用域与变量声明提升？
#### 41. 如何编写高性能的Javascript？
#### 42. 那些操作会造成内存泄漏？
    意外的全局变量引起的内存泄漏
    闭包引起的内存泄漏
    没有清理的DOM元素引用
    被遗忘的定时器或者回调
    子元素存在引用引起的内存泄漏
[JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)</br>
[4类 JavaScript 内存泄漏及如何避免](https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/)</br>
[了解 JavaScript 应用程序中的内存泄漏](https://www.ibm.com/developerworks/cn/web/wa-jsmemory/index.html)</br>
[关于js闭包是否真的会造成内存泄漏？](https://www.zhihu.com/question/31078912)</br>
[常见的 JavaScript 内存泄露](https://github.com/zhansingsong/js-leakage-patterns)</br>


#### 43.把 `<script>` 标签 放在页面的最底部的`</body>`之前和`</body>`之后有什么区别？浏览器会如何解析它们？
    这种写法是不符合标准HTML5语法规则的, 但是浏览器对HTML容错机制。       
    错误嵌套的标签、以及位置放置错误的标签都会在paser HTML过程中尝试修复。    
    修复后得到合法的HTML后在由布局引擎建立相应的DOM对象。  
    在`<script>`标签放置于`</body>`标签之后时,源码被浏览器修复为正常形式,即`<script></script></body>`。
[知乎问题讨论](https://www.zhihu.com/question/20027966)</br>

#### 44. 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?
    路由是根据不同的 url 地址展示不同的内容或页面.
    前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做,之前是通过服务端根据 url 的不同返回不同的页面实现的。
    传统的路由指的是：当用户访问一个url时,对应的服务器会接收这个请求,然后解析url中的路径,从而执行对应的处理逻辑。
    而前端路由是不涉及服务器的,是前端利用hash或者HTML5的history API来实现的,一般用于不同内容的展示和切换。
    其实前端路由要做的就是两点：
    在页面不刷新的情况下实现url的变化; 捕捉url的变化,根据url更改页面内容。
    在单页面应用,大部分页面结构不变,只改变部分内容的使用.
    优点
    用户体验好,不需要每次都从服务器全部获取,快速展现给用户
    缺点
    使用浏览器的前进,后退键的时候会重新发送请求,没有合理地利用缓存.
    单页面无法记住之前滚动的位置,无法在前进,后退的时候记住滚动的位置.
[你了解前端路由吗?](https://juejin.im/post/5ac61da66fb9a028c71eae1b)</br>
[前端路由是什么东西？](https://www.zhihu.com/question/53064386)</br>
[前端路由的两种实现原理](https://segmentfault.com/a/1190000007238999)</br>
[理解Web路由](https://zhuanlan.zhihu.com/p/24814675)</br>
[浅谈前后端路由与前后端渲染](https://molunerfinn.com/fe-be-router-render/)</br>
[为什么要前后端分离？有什么优缺点？](https://blog.csdn.net/bntx2jsqfehy7/article/details/80589580)</br>

#### 45. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
    WebKit是一种用来让网页浏览器绘制网页的排版引擎。
    使用Chrome 开发者工具。
    是一套内置于Google Chrome中的Web开发和调试工具,可用来对网站进行迭代、调试和分析。
    Elements, console, sources, network, performance, memory, application, security, audits
    elements: 使用元素面板可以自由的操作DOM和CSS来迭代布局和设计页面.
    console: 使用控制台面板查看信息，或者使用它作为 shell在页面上与JavaScript交互。
    sources:在源代码面板中设置断点来调试 JavaScript,或者通过Workspaces(工作区)连接本地文件来使用开发者工具的实时编辑器。
    network: 使用网络面板了解请求和下载的资源文件并优化网页加载性能.
    performance:使用时间轴面板可以通过记录和查看网站生命周期内发生的各种事件来提高页面的运行时性能。
    (Note: 在Chrome57之后时间线Timeline面板更名为性能面板.)
    memory：查找影响页面性能的内存问题,包括内存泄漏、内存膨胀和频繁的垃圾回收; JS CPU分析器(识别开销大的函数);
    application: 使用资源面板检查加载的所有资源,包括IndexedDB与Web SQL数据库,本地和会话存储,cookie,应用程序缓存,
    图像,字体和样式表。(Note: 在 Chrome 52 之后资源面板更名为应用面板.)
    security: 使用安全面板调试混合内容问题,证书问题等等
[深入剖析 WebKit](https://ming1016.github.io/2017/10/11/deeply-analyse-webkit/) </br>
[Chrome 开发者工具](https://developers.google.com/web/tools/chrome-devtools/?hl=zh-cn)</br>
[chrome调试](https://segmentfault.com/a/1190000002439648)    </br>





