## Part 3 BOM DOM

#### 14.什么是window对象? 什么是document对象?
    Window 对象表示浏览器中打开的窗口。
    Window 对象是全局对象, 在全局作用域中声明的任何一个变量,  函数都会成为window对象的属性和方法。
    每个载入浏览器的 HTML 文档都会成为 Document 对象。
    Document 对象是 HTML 文档的根节点。
    Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。
    Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

#### 18.事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
    事件是可以被 JavaScript 侦测到的行为。
    网页中的每个元素都可以产生某些可以触发 JavaScript 函数的事件。
    比方说，我们可以在用户点击某按钮时产生一个 onClick 事件来触发某个函数。事件在 HTML 页面中定义。
    事件举例：
    鼠标点击, 页面或图像载入, 鼠标悬浮于页面的某个热点之上, 在表单中选取输入框, 确认表单, 键盘按键.
    IE的事件流叫做事件冒泡（event bubbling）, 即事件开始时由最具体的元素 （文档中嵌套层次最深的那个节点）接收, 
    然后逐级向上传播到较为不具体的节点 （文档）。也就是子级元素先触发，父级元素后触发。
     Firefox同时支持两种事件模型, 也就是：捕获型事件和冒泡型事件.
     在W3c中，使用event.stopPropagation()方法。 在IE下设置event.cancelBubble = true；
[JavaScript 事件](http://www.w3school.com.cn/js/js_events.asp)</br>

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
[Javascript操作DOM常用API总结]( http://luopq.com/2015/11/30/javascript-dom/)</br>
[JavaScript常见原生DOM操作API总结]( https://www.cnblogs.com/liuxianan/p/javascript-dom-api.html)</br>
[常见的原生javascript DOM操作]( https://segmentfault.com/a/1190000004076145)</br>
[为什么说DOM操作很慢](https://segmentfault.com/a/1190000004114594)</br>
#### 86. 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？
[一个DOM元素绑定多个事件时，先执行冒泡还是捕获](https://blog.csdn.net/u013217071/article/details/77613706)</br>

#### 69. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）