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
    对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，
    如Window和Document等。
    所有的DOM和BOM对象都属于宿主对象。

    关于专业名词：本地对象也经常被叫做原生对象或内部对象，包含Global和Math在内的内置对象在
    《JavaScript高级程序设计》里也被叫做单体内置对象，很多时候，
    干脆也会直接把本地对象和内置对象统称为“内置对象”，也就是说除了宿主对象，
    剩下的都是ECMAScript的内部的“内置”对象。

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
    原始数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，
    属于被频繁使用数据，所以放入栈中存储；
    引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。
    如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，
    该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，
    取得地址后从堆中获得实体。
    https://segmentfault.com/a/1190000016733918

#### 6. 如何将字符串转化为数字，例如'12.3b'?
    parseInt(), parseFloat(), Number()(转换的是整个值，而不是部分值)
    扩展：转换函数、强制类型转换、利用JS变量弱类型特点进行转换；
    https://www.jianshu.com/p/7962deab3cea
    https://blog.csdn.net/Inuyasha1121/article/details/40182105

#### 7.  如何将浮点数点左边的数每三位添加一个逗号， 如12000000.11 转化为『12,000,000.11』?

     function commafy(num){
        return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
                return $2 + ',';
            });
      }

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
    
    参考： http://www.cnblogs.com/humin/p/4556820.html
    http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html
    http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html
    https://segmentfault.com/a/1190000002440502
    https://juejin.im/entry/5993eeaa51882524382f3c0b

####10.javascript创建对象的几种方式
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
    参考：https://xxxgitone.github.io/2017/06/10/JavaScript%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%83%E7%A7%8D%E6%96%B9%E5%BC%8F/
    https://github.com/mqyqingfeng/Blog/issues/15   
    https://segmentfault.com/a/1190000008293117

####11.Javascript作用链域
       当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，
       就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，
       也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
####12.谈谈This对象的理解
####13.eval是做什么的？
    eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    但是应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
    由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');
    如果 eval() 的参数不是字符串， eval() 将会将参数原封不动的返回.
    eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象.
    如果你间接的使用 eval()，比如通过一个引用来调用它，而不是直接的调用 eval 。 从 ECMAScript 5 起，它工作在全局作用域下，而不是局部作用域中。
    [JavaScript 为什么不推荐使用 eval？](https://www.zhihu.com/question/20591877)

####14.什么是window对象? 什么是document对象?
    Window 对象表示浏览器中打开的窗口。Window 对象是全局对象, 在全局作用域中声明的任何一个变量,  函数都会成为window对象的属性和方法。
    每个载入浏览器的 HTML 文档都会成为 Document 对象。
    Document 对象是 HTML 文档的根节点。
    Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。
    Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

####15.null，undefined 的区别？
    ECMAScript 规范认为，既然 null 和  undefined 的行为很相似，并且都表示 一个无效的值，那么它们所表示的内容也具有相似性，即有undefined == null.
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

####16.写一个通用的事件侦听器函数。
    var eventUtil = {
    //add dom event
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent: function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        } else if (element.attachEvent) {
            element.attachEvent('on'+type,handler);
        } else {
            element['on'+type] = handler;
        }
    },
    //remove dom event
    removeEvent: function(element,type,handler) {
        if (element.addEventListener) {
            element.removeEventListener(type,handler,false);
        } else if (element.attachEvent) {
            element.detachEvent('on'+type,handler);
        } else {
            element['on'+type] = null;
        }
    },
    //阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
    stopPropogation: function(e){
        if (e.stopPropogation) {
            e.stopPropogation();
        } else {
            e.cancelBubble = true;
        }
    },
    //取消事件的默认行为
    preventDefault: function(e){
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },
    // 获取事件目标
    getTarget: function(e){
        return e.target || e.srcElement;
    },
    // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
    getEvent: function(e){
        var ev = e || window.e;
        if (!e) {
            var c = this.getEvent.caller;
            while(c){
                e = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return ev;
    }
};
####17.["1", "2", "3"].map(parseInt) 答案是多少？
####18.事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
    http://www.w3school.com.cn/js/js_events.asp
    事件是可以被 JavaScript 侦测到的行为。
    网页中的每个元素都可以产生某些可以触发 JavaScript 函数的事件。比方说，我们可以在用户点击某按钮时产生一个 onClick 事件来触发某个函数。事件在 HTML 页面中定义。
    事件举例：
    鼠标点击, 页面或图像载入, 鼠标悬浮于页面的某个热点之上, 在表单中选取输入框, 确认表单, 键盘按键.
     IE的事件流叫做事件冒泡（event bubbling），即事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。也就是子级元素先触发，父级元素后触发。
     Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件.
     在W3c中，使用event.stopPropagation()方法。 在IE下设置event.cancelBubble = true；
####19.什么是闭包（closure），为什么要用它？
    闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。  
    闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。闭包的另一个用处，是封装对象的私有属性和私有方法。
####20.javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
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
    为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。
    使用这些词作为变量名将会报错。
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
    [Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)
####21.如何判断一个对象是否属于某个类？
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
####22.new操作符具体干了什么呢?
    new命令的作用，就是执行构造函数，返回一个实例对象。     使用new命令时，它后面的函数调用就不是正常的调用，而是依次执行下面的步骤。  
    - 创建一个空对象，作为将要返回的对象实例；   
    -  将这个空对象的原型，指向构造函数的prototype属性；   
    -  将这个空对象赋值给函数内部的this关键字；   
    -  开始执行构造函数内部的代码。  
####23.用原生JavaScript的实现过什么功能吗？
####24.Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
     `hasOwnProperty`  
    javaScript中`hasOwnProperty()`方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。  
    使用方法：  
    `object.hasOwnProperty(proName)`     
    如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty()方法返回 true，反之则返回 false。
####25.JSON 的了解
    JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）。   
    JSON 是存储和交换文本信息的语法，类似 XML，JSON 比 XML 更小、更快，更易解析。  
    JSON 是轻量级的文本数据交换格式。  
    JSON 独立于语言 *。  
    JSON 具有自我描述性，更易理解。  
    * JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。  
    **优点：**  
    轻量级、易于人的阅读和编写，便于机器（JavaScript）解析，支持复合数据类型（数组、对象、字符串、数字）。  
    **缺点：**   
    和许多好东西都具有两面性一样，JSON的非冗长性也不例外，为此JSON丢失了XML具有的一些特性。命名空间允许不同上下文中的相同的信息段彼此混合，然而，显然在JSON中已经找不到了命名空间。JSON与XML的另一个差别是属性的差异，由于JSON采用冒号赋值，这将导致当XML转化为 JSON时，在标识符（XML  CDATA）与实际属性值之间很难区分谁应该被当作文本考虑。   
    另外，JSON片段的创建和验证过程比一般的XML稍显复杂。从这一点来看，XML在开发工具方面领先于JSON。
    JSON字符串转换为JSON对象:
    var obj =eval('('+ str +')');
    var obj = str.parseJSON();
    var obj = JSON.parse(str);
    JSON对象转换为JSON字符串：
    var last=obj.toJSONString();
    var last=JSON.stringify(obj);

####26.`[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？`
####27.js延迟加载的方式有哪些？
    （1）直接将script节点放置在</body>之前，这样js脚本就会在页面显示出来之后再加载。  
    （2）使用script标签的defer和async属性，defer属性为延迟加载，是在页面渲染完成之后再进行加载的，而async属性则是和文档并行加载，这两种解决方案都不完美，原因在于不是所有浏览器都支持。  直接插入代码、将脚本放置在底部和使用“defer”或“async”，这几种方法都不能达到先加载页面后加载JS的目的，而且它们肯定不能在各个浏览器上表现一致。   
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
    3）将JavaScript代码分成两组：一组是因页面需要而立即加载的javascript代码，另外一组是在页面加载后进行操作的javascript代码(例如添加click事件或其他东西)。这些需等到页面加载后再执行的JavaScript代码，应放在一个外部文件，然后再引进来。   
    （4）通过ajax下载js脚本，动态添加script节点。但是ajax有一个缺点，就是无法引用使用CDN方式提供的js文件，因为这种方式下，你即时通过xhr.open下载了js文件，而向body中注入script节点时还是需要向CDN请求js文件。   
####28.Ajax 是什么? 如何创建一个Ajax？
    AJAX(Asynchronous Javascript And XML) = 异步 JavaScript + XML 在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新。
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
####29.Ajax 解决浏览器缓存问题？
    1、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
    2、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
    3、在URL后面加上一个随机数： "fresh=" + Math.random();。
    4、在URL后面加上时间戳："nowtime=" + new Date().getTime();。
    5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。
    这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
    https://www.jianshu.com/p/4f76f06383ec
    [彻底理解浏览器的缓存机制](https://juejin.im/entry/5ad86c16f265da505a77dca4)
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



