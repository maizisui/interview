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
[JS所有内置对象属性和方法汇总](https://segmentfault.com/a/1190000011467723)
[标准内置对象的分类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)    
    

#### 3. 说几条写JavaScript的基本规范？
    https://github.com/fex-team/styleguide/blob/master/javascript.md
    https://www.css88.com/archives/8405

#### 4. JavaScript原型，原型链 ? 有什么特点？
    prototype(显式原型), __proto__(隐式原型)的区别:


#### 5. JavaScript有几种类型的值？，你能画一下他们的内存图吗？
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

#### 8. 如何实现数组的随机排序？
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

#### 9.Javascript如何实现继承
    原型链
    借用构造函数
    组合继承
    原型式继承
    寄生式继承
    寄生组合式继承
[JS实现继承的几种方式](http://www.cnblogs.com/humin/p/4556820.html)
[Javascript面向对象编程：封装,构造函数的继承,非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
[JavaScript继承方式详解](https://segmentfault.com/a/1190000002440502)
[JavaScript常见的继承方式](https://juejin.im/entry/5993eeaa51882524382f3c0b)

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
[JavaScript创建对象的七种方式](https://xxxgitone.github.io/2017/06/10/JavaScript%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%83%E7%A7%8D%E6%96%B9%E5%BC%8F/)
[JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15   )
[原生js的对象创建模式以及优缺点](https://segmentfault.com/a/1190000008293117)

#### 11.Javascript作用链域
    当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，
    就会从父级(词法层面上的父级)执行上下文的变量对象中查找, 一直找到全局上下文的变量对象, 也就是全局对象。 这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
[JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
[深入了解 JavaScript，从作用域链开始（1）](https://juejin.im/entry/57f5d492bf22ec006475238f)
[理解JavaScript的作用域链](https://www.cnblogs.com/wilber2013/p/4909459.html)
[]()
[]()
[]()
#### 12.谈谈This对象的理解
[JavaScript 的 this 原理](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)
[Javascript 的 this 用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
[彻底理解js中this的指向](https://www.cnblogs.com/pssp/p/5216085.html)
[从这两套题，重新认识JS的this、作用域、闭包、对象](https://juejin.im/post/59aa71d56fb9a0248d24fae3)
[this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
[深入理解 js this 绑定](https://segmentfault.com/a/1190000011194676)
[你不懂JS：this与对象原型 第二章：this豁然开朗！](https://www.jianshu.com/p/fcbc21a2c507)
[深入浅出 JavaScript 中的 this](https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html)
[如何理解 JavaScript 中的 this 关键字？](https://www.zhihu.com/question/19636194)
#### 13.eval是做什么的？
    eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    但是应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
    由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');
    如果 eval() 的参数不是字符串， eval() 将会将参数原封不动的返回.
    eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象.
    如果你间接的使用 eval()，比如通过一个引用来调用它，而不是直接的调用 eval 。 
    从 ECMAScript 5 起, 它工作在全局作用域下，而不是局部作用域中。
   [JavaScript 为什么不推荐使用 eval？](https://www.zhihu.com/question/20591877)

#### 14.什么是window对象? 什么是document对象?
    Window 对象表示浏览器中打开的窗口。
    Window 对象是全局对象, 在全局作用域中声明的任何一个变量,  函数都会成为window对象的属性和方法。
    每个载入浏览器的 HTML 文档都会成为 Document 对象。
    Document 对象是 HTML 文档的根节点。
    Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。
    Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

#### 15.null，undefined 的区别？
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

#### 16.写一个通用的事件侦听器函数。
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
#### 17.["1", "2", "3"].map(parseInt) 答案是多少？
#### 18.事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
    http://www.w3school.com.cn/js/js_events.asp
    事件是可以被 JavaScript 侦测到的行为。
    网页中的每个元素都可以产生某些可以触发 JavaScript 函数的事件。
    比方说，我们可以在用户点击某按钮时产生一个 onClick 事件来触发某个函数。事件在 HTML 页面中定义。
    事件举例：
    鼠标点击, 页面或图像载入, 鼠标悬浮于页面的某个热点之上, 在表单中选取输入框, 确认表单, 键盘按键.
    IE的事件流叫做事件冒泡（event bubbling），即事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，
    然后逐级向上传播到较为不具体的节点（文档）。也就是子级元素先触发，父级元素后触发。
     Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件.
     在W3c中，使用event.stopPropagation()方法。 在IE下设置event.cancelBubble = true；
#### 19.什么是闭包（closure），为什么要用它？
    闭包是指有权访问另一个函数作用域中变量的函数，
    创建闭包的最常见的方式就是在一个函数内创建另一个函数，
    通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。  
    闭包的最大用处有两个，
    一个是可以读取函数内部的变量，
    另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
    闭包的另一个用处，是封装对象的私有属性和私有方法。
#### 20.javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
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
[严格模式
](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
[Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)
#### 21.如何判断一个对象是否属于某个类？
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
#### 22.new操作符具体干了什么呢?
    new命令的作用，就是执行构造函数，返回一个实例对象。     
    使用new命令时，它后面的函数调用就不是正常的调用，而是依次执行下面的步骤。  
    - 创建一个空对象，作为将要返回的对象实例；   
    -  将这个空对象的原型，指向构造函数的prototype属性；   
    -  将这个空对象赋值给函数内部的this关键字；   
    -  开始执行构造函数内部的代码。  
#### 23.用原生JavaScript的实现过什么功能吗？
#### 24.Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
     `hasOwnProperty`  
    javaScript中`hasOwnProperty()`方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。
    此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。  
    使用方法：  
    `object.hasOwnProperty(proName)`     
    如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty()方法返回 true，反之则返回 false。
#### 25.JSON 的了解
    JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）。   
    JSON 是存储和交换文本信息的语法，类似 XML，JSON 比 XML 更小、更快，更易解析。  
    JSON 是轻量级的文本数据交换格式。  
    JSON 独立于语言 *。  
    JSON 具有自我描述性，更易理解。  
    * JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。  
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

#### 26.`[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)}) 能解释一下这段代码的意思吗？`
#### 27.js延迟加载的方式有哪些？
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
#### 28.Ajax 是什么? 如何创建一个Ajax？
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
#### 29.Ajax 解决浏览器缓存问题？
    1、在ajax发送请求前加上anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
    2、在ajax发送请求前加上anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
    3、在URL后面加上一个随机数： "fresh=" + Math.random();。
    4、在URL后面加上时间戳："nowtime=" + new Date().getTime();。
    5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。
    这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
    https://www.jianshu.com/p/4f76f06383ec
    [彻底理解浏览器的缓存机制](https://juejin.im/entry/5ad86c16f265da505a77dca4)
#### 30.同步和异步的区别?
#### 31. 如何解决跨域问题?
#### 32. 页面编码和被请求的资源编码如果不一致如何处理？
#### 33. 服务器代理转发时，该如何处理cookie？
#### 34. 模块化开发怎么做？
#### 35. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
#### 36. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）
#### 37. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？
#### 38. 谈一谈你对ECMAScript6的了解？
#### 39. ECMAScript6 怎么写class么，为什么会出现class这种东西?
#### 40. 异步加载JS的方式有哪些？
#### 41. document.write和 innerHTML的区别
    两者都可向页面输出内容.
    ducument.write会将内容直接写入页面，即重绘整个页面.
    innerHTML只将当前元素的内容替换为新的内容,可以重绘页面的一部分。
    innerHTML很多情况下都优于document.write，其原因在于其允许更精确的控制要刷新页面的那一个部分。
    [全面理解document.write()](https://segmentfault.com/a/1190000007958530)
  
#### 42. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?
    //查找
    document.getElementById ：根据ID查找元素，大小写敏感，如果有多个结果，只返回第一个；
    document.getElementsByClassName ：根据类名查找元素，多个类名用空格分隔，返回一个 HTMLCollection 。注意兼容性为IE9+（含）。
    document.getElementsByTagName ：根据标签查找元素， * 表示查询所有标签，返回一个 HTMLCollection 。
    document.getElementsByName ：根据元素的name属性查找，返回一个 NodeList 。
    document.querySelector ：返回单个Node，IE8+(含），如果匹配到多个结果，只返回第一个。
    document.querySelectorAll ：返回一个 NodeList ，IE8+(含）。
    document.forms ：获取当前页面所有form，返回一个 HTMLCollection ；
    //创建
    createElement
    createTextNode
    cloneNode
    createDocumentFragment
    //修改
    appendChild
    insertBefore
    removeChild
    replaceChild
    
    //扩展
[Javascript操作DOM常用API总结]( http://luopq.com/2015/11/30/javascript-dom/)
[JavaScript常见原生DOM操作API总结]( https://www.cnblogs.com/liuxianan/p/javascript-dom-api.html)
[常见的原生javascript DOM操作]( https://segmentfault.com/a/1190000004076145)
[为什么说DOM操作很慢](https://segmentfault.com/a/1190000004114594)
#### 43. call() 和 apply() 的区别？
    相同点:两个方法产生的作用是完全一样的
    不同点:方法传递的参数不同
    apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组。
    call 方法第一个参数也是作为函数上下文的对象，但是后面传入的是一个参数列表，而不是单个数组。
    //apply 和 call 的用法
    改变 this 指向
    借用别的对象的方法
    调用函数
[apply 和 call 的区别]( https://github.com/lin-xin/blog/issues/7)
#### 44. 数组和对象有哪些原生方法，列举一下？
    数组：
    Array.from()  
    Array.isArray()  
    Array.of()
    修改器方法[Mutator methods], 会改变调用它们的对象自身的值：
    Array.prototype.pop()
    Array.prototype.push()
    Array.prototype.reverse()
    Array.prototype.shift()
    Array.prototype.sort()
    Array.prototype.splice()
    Array.prototype.unshift()
    访问方法[], 绝对不会改变调用它们的对象的值, 只会返回一个新的数组。
    Array.prototype.concat()
    Array.prototype.join()
    Array.prototype.slice()
    Array.prototype.toString()
    Array.prototype.toLocaleString()
    Array.prototype.indexOf()
    Array.prototype.lastIndexOf()
    迭代方法[]
    对象：

[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)   
[js 数组详细操作方法及解析合集](https://juejin.im/post/5b0903b26fb9a07a9d70c7e0)
[JavaScript Array 对象](http://www.runoob.com/jsref/jsref-obj-array.html)
[]()
[]()
#### 45. JS 怎么实现一个类。怎么实例化这个类
#### 46. JavaScript中的作用域与变量声明提升？
#### 47. 如何编写高性能的Javascript？

#### 64. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
#### 65. 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
#### 66. 移动端最小触控区域是多大？
#### 67. jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?
#### 68. 把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？
#### 69. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）
#### 70. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
#### 71. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？
#### 72. 解释JavaScript中的作用域与变量声明提升？
#### 73. 那些操作会造成内存泄漏？
    意外的全局变量引起的内存泄漏
    闭包引起的内存泄漏
    没有清理的DOM元素引用
    被遗忘的定时器或者回调
    子元素存在引用引起的内存泄漏

[JavaScript 内存泄漏教程](http://www.ruanyifeng.com/blog/2017/04/memory-leak.html)
[4类 JavaScript 内存泄漏及如何避免](https://jinlong.github.io/2016/05/01/4-Types-of-Memory-Leaks-in-JavaScript-and-How-to-Get-Rid-Of-Them/)
[了解 JavaScript 应用程序中的内存泄漏](https://www.ibm.com/developerworks/cn/web/wa-jsmemory/index.html)
[关于js闭包是否真的会造成内存泄漏？](https://www.zhihu.com/question/31078912)
[常见的 JavaScript 内存泄露](https://github.com/zhansingsong/js-leakage-patterns)
#### 74. Node.js的适用场景？
#### 75. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
#### 76. 解释一下 Backbone 的 MVC 实现方式？
#### 77. 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?
    路由是根据不同的 url 地址展示不同的内容或页面.
    前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。
    传统的路由指的是：当用户访问一个url时，对应的服务器会接收这个请求，然后解析url中的路径，从而执行对应的处理逻辑。
    而前端路由是不涉及服务器的，是前端利用hash或者HTML5的history API来实现的，一般用于不同内容的展示和切换。
    其实前端路由要做的就是两点：
    在页面不刷新的情况下实现url的变化;捕捉url的变化，根据url更改页面内容。
    在单页面应用，大部分页面结构不变，只改变部分内容的使用.
    优点
    用户体验好，不需要每次都从服务器全部获取，快速展现给用户
    缺点
    使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存.
    单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置.
[你了解前端路由吗?](https://juejin.im/post/5ac61da66fb9a028c71eae1b)
[前端路由是什么东西？](https://www.zhihu.com/question/53064386)
[前端路由的两种实现原理](https://segmentfault.com/a/1190000007238999)
[理解Web路由](https://zhuanlan.zhihu.com/p/24814675)
[浅谈前后端路由与前后端渲染](https://molunerfinn.com/fe-be-router-render/)
[为什么要前后端分离？有什么优缺点？](https://blog.csdn.net/bntx2jsqfehy7/article/details/80589580)
#### 78. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
    WebKit是一种用来让网页浏览器绘制网页的排版引擎。
    使用Chrome 开发者工具。
    是一套内置于Google Chrome中的Web开发和调试工具，可用来对网站进行迭代、调试和分析。
    Elements, console, sources, network, performance, memory, application, security, audits
    elements: 使用元素面板可以自由的操作DOM和CSS来迭代布局和设计页面.
    console: 使用控制台面板查看信息，或者使用它作为 shell在页面上与JavaScript交互。
    sources:在源代码面板中设置断点来调试 JavaScript ，或者通过Workspaces（工作区）连接本地文件来使用开发者工具的实时编辑器。
    network: 使用网络面板了解请求和下载的资源文件并优化网页加载性能.
    performance:使用时间轴面板可以通过记录和查看网站生命周期内发生的各种事件来提高页面的运行时性能。
    (Note: 在 Chrome 57 之后时间线Timeline面板更名为性能面板.)
    memory：查找影响页面性能的内存问题，包括内存泄漏、内存膨胀和频繁的垃圾回收;
    JavaScript CPU 分析器(识别开销大的函数);
    application: 使用资源面板检查加载的所有资源，包括IndexedDB与Web SQL数据库，本地和会话存储，cookie，应用程序缓存，
    图像，字体和样式表。(Note: 在 Chrome 52 之后资源面板更名为应用面板.)
    security: 使用安全面板调试混合内容问题，证书问题等等
[深入剖析 WebKit](https://ming1016.github.io/2017/10/11/deeply-analyse-webkit/) 
[Chrome 开发者工具](https://developers.google.com/web/tools/chrome-devtools/?hl=zh-cn)
[chrome调试](https://segmentfault.com/a/1190000002439648)    

#### 79. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
#### 80. 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?
#### 81. 简述一下 Handlebars 的基本用法？
#### 82. 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？
#### 83. 检测浏览器版本版本有哪些方式？
#### 84. What is a Polyfill?
#### 85. 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
#### 86. 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？
[一个DOM元素绑定多个事件时，先执行冒泡还是捕获](https://blog.csdn.net/u013217071/article/details/77613706)
#### 87. 使用JS实现获取文件扩展名？
    function getFileExtension(filename) {
        return filename.slice(filename.lastIndexOf('.')+1);
    }
[如何更有效的获取文件扩展名](https://segmentfault.com/a/1190000004993946)
#### 88. Webpack热更新实现原理?
#### 89. 函数节流和函数防抖？
    debounce 强制函数在某段时间内只执行一次，throttle 强制函数以固定的速率执行。
    函数节流（throttle）与 函数防抖（debounce）都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，
    出现延迟，假死或卡顿的现象。
    区别：节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。
    对于函数防抖，有以下几种应用场景：
    给按钮加函数防抖防止表单多次提交。 
    对于输入框连续输入进行AJAX验证时，用函数防抖能有效减少请求次数。
    判断scroll是否滑到底部，滚动事件+函数防抖
    总的来说，适合多次事件一次响应的情况
    对于函数节流，有如下几个场景：
    游戏中的刷新率
    DOM元素拖拽
    Canvas画笔功能
    总的来说，适合大量事件按时间做平均分配触发
[函数防抖与函数节流](https://zhuanlan.zhihu.com/p/38313717)
[Debounce 和 Throttle 的原理及实现](https://segmentfault.com/a/1190000015619151)
[浅谈 Underscore.js 中 _.throttle 和 _.debounce 的差异](https://segmentfault.com/a/1190000007440036)


## part two 库,框架及其他
#### 49. JQuery的源码看过吗？能不能简单概况一下它的实现原理？
    
[jQuery诞生记-原理与机制](https://www.zhangxinxu.com/wordpress/2013/07/jquery-%E5%8E%9F%E7%90%86-%E6%9C%BA%E5%88%B6/)    
[jQuery 源码系列（一）总体架构](https://segmentfault.com/a/1190000008365621)
#### 50. jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
#### 51. jquery中如何将数组转化为json字符串，然后再转化回来？
#### 52. jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
#### 53. jquery.extend 与 jquery.fn.extend的区别？
#### 54. jQuery 的队列是如何实现的？队列可以用在哪些地方？
#### 55. 谈一下Jquery中的bind(),live(),delegate(),on()的区别？
#### 56. JQuery一个对象可以同时绑定多个事件，这是如何实现的？
#### 57. 是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？
#### 58. jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）
#### 59. 针对 jQuery性能的优化方法？
#### 60. Jquery与jQuery UI 有啥区别？
#### 61. jQuery和Zepto的区别？各自的使用场景？
#### 62. Zepto的点透问题如何解决？
#### 63. jQueryUI如何自定义组件?



