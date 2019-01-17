HTML part
1. Doctype作用？标准模式与兼容模式各有什么区别?
	告知浏览器的解析器用什么文档标准解析这个文档。
	DOCTYPE声明位于HTML文档中的第一行，处于html标签之前。
	DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

	标准模式： 以该浏览器支持的最高标准呈现页面。
	兼容模式：页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

	具体：
	在严格模式中 ：width是内容宽度 ，元素真正的宽度 = margin-left + border-left-width + padding-left + width + padding-right + border-right- width +  margin-right;
	在怪癖模式中 ：width则是元素的实际宽度 ，内容宽度 = width - ( padding-left + padding-right + border-left-width + border-right-width)

2. HTML5 为什么只需要写 <!DOCTYPE HTML>？
	HTML5 不基于 SGML, 因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）;
	而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
	(标准通用标记语言Standard Generalized Markup Language, SGML)

3.行内元素有哪些？块级元素有哪些？ 空(void)元素有那些?
	首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

（1）行内元素有：a b span img input select strong（强调的语气）
（2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

（3）常见的空元素：
	<br> <hr> <img> <input> <link> <meta>
	鲜为人知的是：
	<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>

	不同浏览器（版本）、HTML4（5）、CSS2等实际略有差异
	参考: http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements

4. 页面导入样式时，使用link和@import有什么区别？
	相同的地方，都是外部引用CSS方式

	（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
	（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
	（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
	(4)link支持使用js控制DOM去改变样式，而@import不支持;
	link方式的样式的权重高于@import的权重;
	import在html使用时候需要<style type="text/css">标签;


	@import 详解：https://segmentfault.com/a/1190000000369549

5.介绍一下你对浏览器内核的理解？
  主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
  渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
  JS引擎则：解析和执行javascript来实现网页的动态效果。
  最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

6. 常见的浏览器内核有哪些？
   Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
  Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
  Presto内核：Opera7及以上。      [Opera内核原为：Presto，现为：Blink;]
  Webkit内核：Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]
  详细文章：[浏览器内核的解析和对比](http://www.cnblogs.com/fullhouse/archive/2011/12/19/2293455.html)

7. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

  * HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
  	  绘画 canvas;
  	  用于媒介回放的 video 和 audio 元素;
  	  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
        sessionStorage 的数据在浏览器关闭后自动删除;
  	  语意化更好的内容元素，比如 article、footer、header、nav、section;
  	  表单控件，calendar、date、time、email、url、search;
  	  新的技术webworker, websocket, Geolocation;

    移除的元素：
  	  纯表现的元素：basefont，big，center，font, s，strike，tt，u;
  	  对可用性产生负面影响的元素：frame，frameset，noframes；

  * 支持HTML5新标签：
  	 IE8/IE7/IE6支持通过document.createElement方法产生的标签，
    	 可以利用这一特性让这些浏览器支持HTML5新标签，
    	 浏览器支持新标签后，还需要添加标签默认的样式。

       当然也可以直接使用成熟的框架、比如html5shim;
  	 <!--[if lt IE 9]>
  		<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
  	 <![endif]-->

  * 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素  

8.简述一下你对HTML语义化的理解？
  语义化
	HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构
	css命名的语义化是指：为html标签添加有意义的class
	为什么需要语义化：
	去掉样式后页面呈现清晰的结构
	盲人使用读屏器更好地阅读
	搜索引擎更好地理解页面，有利于收录
	便团队项目的可持续运作及维护
  用正确的标签做正确的事情。
  html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
  即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
  搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
  使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

9.HTML5的离线储存怎么使用，工作原理能不能解释一下？

  在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
  原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。


  如何使用：
  1、页面头部像下面一样加入一个manifest的属性（<html manifest="demo.appcache">）；
  2、在cache.manifest文件的编写离线存储的资源；
  	CACHE MANIFEST
  	#v0.11
  	CACHE:
  	js/app.js
  	css/style.css
  	NETWORK:
  	resourse/logo.png
  	FALLBACK:
  	/ /offline.html
  3、在离线状态时，操作window.applicationCache进行需求实现。 
  http://segmentfault.com/a/1190000000732617
  http://yanhaijing.com/html/2014/12/28/html5-manifest/

10. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
  在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
  离线的情况下，浏览器就直接使用离线存储的资源。

11. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？  
	  cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
	  cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
	  sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

	  存储大小：
	  	cookie数据大小不能超过4k。
	  	sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

	  有期时间：
	  	localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
	  	sessionStorage  数据在当前浏览器窗口关闭后自动删除。
	  	cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

12. iframe有那些缺点？

  *iframe会阻塞主页面的Onload事件；
  *搜索引擎的检索程序无法解读这种页面，不利于SEO;
  *iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
  使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。	 

  扩展优点：
  	iframe能够原封不动的把嵌入的网页展现出来。
	如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
	网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
	如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。

13. iframe有那些缺点？

  *iframe会阻塞主页面的Onload事件；
  *搜索引擎的检索程序无法解读这种页面，不利于SEO;

  *iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

  使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
  动态给iframe添加src属性值，这样可以绕开以上两个问题。

14. Label的作用是什么？是怎么用的？

  label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
  ```
  <label for="Name">Number:</label>
  <input type=“text“name="Name" id="Name"/>
  <label>Date:<input type="text" name="B"/></label>     	
```
15. HTML5的form如何关闭自动完成功能？

  给不想要提示的 form 或某个 input 设置为 autocomplete=off。

  在某些情况下，即使浏览器的自动填充设置为off，浏览器依然会继续提示自动完成的值。
  这可能会让开发者百思不得其解。强制浏览器不自动填充的方法是为autocomplete设置一个随机的字符串，
  例如：autocomplete="nope"
  当这个随机的值不是 可用值的时候，浏览器就会放弃自动填充。

16. 如何实现浏览器内多个标签页之间的通信? (阿里)


17. webSocket如何兼容低浏览器？(阿里)


18. 页面可见性（Page Visibility API） 可以有哪些用途？
	页面可见性 API提供了您可以观察的事件，以便了解文档何时可见或隐藏，以及查看页面当前可见性状态的功能。
	页面可见性 API对于节省资源和提高性能特别有用，它使页面在文档不可见时避免执行不必要的任务。

	网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片。
	显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新。
	页面想要检测是否正在渲染，以便可以准确的计算网页浏览量
	当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）

19. 如何在页面上实现一个圆形的可点击区域？
	 1、map+area或者svg
  	 2、border-radius
 	 3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等
 	 https://maizi93.github.io/2017/08/29/%E5%A6%82%E4%BD%95%E5%9C%A8%E9%A1%B5%E9%9D%A2%E4%B8%8A%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%9C%86%E5%BD%A2%E7%9A%84%E5%8F%AF%E7%82%B9%E5%87%BB%E5%8C%BA%E5%9F%9F%EF%BC%9F/

20. 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
	<div style="height:1px;overflow:hidden;background:red"></div>
	overflow:hidden;解决IE6下的高度;

21. 网页验证码是干嘛的，是为了解决什么安全问题。
	 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；
  	有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

22. title与h1的区别、b与strong的区别、i与em的区别？
	title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；
	 strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。
	 i内容展示为斜体，em表示强调的文本；
	 Physical Style Elements -- 自然样式标签
	 b, i, u, s, pre
	 Semantic Style Elements -- 语义样式标签
	 strong, em, ins, del, code
	 应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。

23. 无样式内容闪烁（FOUC）Flash of Unstyle Content
	@import导入CSS文件会等到文档加载完后再加载CSS样式表。因此，在页面DOM加载完成到CSS导入完成之间会有一段时间页面上的内容是没有样式的。
	解决方法：使用link标签加载CSS样式文件。因为link是顺序加载的，这样页面会等到CSS下载完之后再下载HTML文件，这样先布局好，就不会出现FOUC问题。

24. 元素的alt和title有什么异同？
	alt 属性是一个必需的属性,它规定在图像无法显示时的替代文本;
	title 属性规定关于元素的额外信息,这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。
   	在alt和title同时设置的时候，alt作为图片的替代文字出现，title是图片的解释文字。

25. GET 和 POST区别?
	GET - 从指定的资源请求数据。
	POST - 向指定的资源提交要被处理的数据。

					   GET									POST
	后退按钮/刷新	       无害	                				数据会被重新提交（浏览器应该告知用户数据会被重新提交）。
	书签	               可收藏为书签	    					不可收藏为书签
	缓存				   能被缓存								不能缓存
	编码类型			   application/x-www-form-urlencoded	application/x-www-form-urlencoded or 
															multipart/form-data。为二进制数据使用多重编码。
	历史					参数保留在浏览器历史中。				参数不会保存在浏览器历史中。
	对数据长度的限制		是的。当发送数据时，GET 方法向 		无限制。
						URL 添加数据；URL 的长度是受限制的    
						（URL 的最大长度是 2048 个字符）。	
	对数据类型的限制	    只允许 ASCII 字符。					没有限制。也允许二进制数据。
	安全性				与 POST 相比，GET 的安全性较差，      POST 比 GET 更安全，因为参数不会被保存在
						因为所发送的数据是 URL 的一部分。 		浏览器历史或 web 服务器日志中。

						在发送密码或其他敏感信息时绝不要使用
						 GET ！	
	可见性				数据在 URL 中对所有人都是可见的。	   	数据不会显示在 URL 中。

26.

27.

28.

29.

