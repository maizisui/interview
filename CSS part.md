CSS part
1. 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
	CSS 框模型 (Box Model) 规定了元素框处理元素内容、内边距、边框 和 外边距 的方式。
  （1）有两种， IE 盒子模型、W3C 盒子模型；
  （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
  （3）区  别： IE的content部分把 border 和 padding计算了进去;
  通过css3新增的属性 box-sizing: content-box | border-box分别设置盒模型为标准模型（content-box）和IE模型（border-box）。

2. CSS选择符有哪些？哪些属性可以继承？
	1.id选择器（ # myid）
  	2.类选择器（.myclassname）
  	3.标签选择器（div, h1, p）
  	4.相邻选择器（h1 + p）
  	5.子选择器（ul > li）
  	6.后代选择器（li a）
  	7.通配符选择器（ * ）
  	8.属性选择器（a[rel = "external"]）
  	9.伪类选择器（a:hover, li:nth-child）:
  	10.伪元素 :: ::after, ::before, ::first-letter, ::first-line, ::selection, ::backdrop
  	伪类和伪元素区别：https://segmentfault.com/a/1190000013737796
	添加到选择器后面去选择某个元素的某个部分
  	 可继承的样式： font-size font-family color, UL LI DL DD DT;
	 不可继承的样式：border padding margin width height ;

3. CSS优先级算法如何计算？
	 * 优先级就近原则，同权重情况下样式定义最近者为准;
  	 * 载入样式以最后载入的定位为准;

  	优先级为:
  	同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
  	!important >  id > class > tag
  	important 比 内联优先级高

4.  
	p:first-of-type     选择属于其父元素的首个<p>元素的每个<p>元素。
	p:last-of-type     选择属于其父元素的最后<p>元素的每个<p>元素。
	p:only-of-type     选择属于其父元素唯一的<p>元素的每个<p>元素。
	p:only-child     选择属于其父元素唯一的子元素的每个<p>元素。

	p:nth-child(n)     选择属于其父元素的第n个子元素的每个<p>元素。
	p:nth-last-child(n)     选择属于其父元素的倒数第n个子元素的每个<p>元素。

	p:nth-of-type(n)     选择属于其父元素第n个<p>元素的每个<p>元素。
	p:nth-last-of-type(n)      选择属于其父元素倒数第n个<p>元素的每个<p>元素。

	p:last-child     选择属于其父元素最后一个子元素的每个<p>元素。

	p:empty     选择没有子元素的每个<p>元素（包括文本节点）。
	p:target      选择当前活动的<p>元素。
	:not(p)     选择非<p>元素的每个元素。
	:enabled     控制表单控件的可用状态。
	:disabled      控制表单控件的禁用状态。
	:checked      单选框或复选框被选中。

5.  如何居中div? 
	水平居中：给div设置一个宽度，然后添加margin:0 auto属性
	让绝对定位的div居中
	· div {
	 	position: absolute;
	 	width: 300px;
	 	height: 300px;
	 	margin: auto;
	 	top: 0;
	 	left: 0;
	 	bottom: 0;
	 	right: 0;
	 	background-color: pink;	/* 方便看效果 */
	 }
	·
	 水平垂直居中一
	 确定容器的宽高 宽500 高 300 的层
	 设置层的外边距
·
	 div {
	 	position: relative;		/* 相对定位或绝对定位均可 */
	 	width:500px;
	 	height:300px;
	 	top: 50%;
	 	left: 50%;
	 	margin: -150px 0 0 -250px;     	/* 外边距为自身宽高的一半 */
	 	background-color: pink;	 	/* 方便看效果 */
·
	  }
·
	  水平垂直居中二
	 未知容器的宽高，利用 `transform` 属性
	 div {
	 	position: absolute;		/* 相对定位或绝对定位均可 */
	 	width:500px;
	 	height:300px;
	 	top: 50%;
	 	left: 50%;
	 	transform: translate(-50%, -50%);
	 	background-color: pink;	 	/* 方便看效果 */
··
	 }
·
	 水平垂直居中三
	 利用 flex 布局
	 实际使用时应考虑兼容性
·
	 .container {
	 	display: flex;
	 	align-items: center; 		/* 垂直居中 */
	 	justify-content: center;	/* 水平居中 */
·
	 }
	 .container div {
	 	width: 100px;
	 	height: 100px;
	 	background-color: pink;		/* 方便看效果 */
	 }
··
	 more 查看：https://segmentfault.com/a/1190000016389031
·
6. display有哪些值？说明他们的作用。
	block       	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
    none        	元素不显示，并从文档流中移除。
    inline      	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
    inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。
    list-item   	象块类型元素一样显示，并添加样式列表标记。
    table       	此元素会作为块级表格来显示。
    inherit     	规定应该从父元素继承 display 属性的值。

7. position的值relative和absolute定位原点是？
	absolute
  	生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
    fixed （老IE不支持）
  	生成绝对定位的元素，相对于浏览器窗口进行定位。
    relative
  	生成相对定位的元素，相对于其正常位置进行定位。
    static
  	默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
    inherit
  	规定从父元素继承 position 属性的值。

8. CSS3有哪些新特性？
	 css3选择器：
	 边框：border-radius, box-shadow, border-image
	 背景:background-size, background-origin
	 文本效果: text-shadow, word-wrap
	 字体: @font-face
	 transform: translate(), rotate(), scale()
	 transition:
	 animation:
	 多列: column-count, column-gap, column-rule
	 用户界面: resize, box-sizing, outline-offset
	 渐变: gradients

9. 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

10. 用纯CSS创建一个三角形的原理是什么？
	 把上、左、右三条边隐藏掉（颜色设为 transparent）
	  #demo {
	    width: 0;
	    height: 0;
	    border-width: 20px;
	    border-style: solid;
	    border-color: transparent transparent red transparent;
	  }
	  具体：
	  1.采用的是均分原理
		非常有意思的是盒子都是一个矩形或正方形，从形状的中心，向4个角上下左右划分4个部 
	  2.代码的实现
		第一步 保证元素是块级元素
		第二步 设置元素的边框
		第三步 不需要显示的边框使用透明色

11. 一个满屏 品 字布局 如何设计?
	html,
	body {
		height: 100%;
		margin: 0;
	}
  	上面的div宽100%,height:50%，
  	下面的两个div分别宽50%，height:50%;
  	然后用float;

12. css多列等高如何实现？
	padding补偿法;利用padding-bottom|margin-bottom正负值相抵;
	元素设置的padding-bottom尽可能大一些，并且需要设置一样大小的margin-bottom负值去抵消padding-bottom撑大的区域，正负一抵消，对于页面布局不会有影响。另外的话还需要设置父元素overflow：hidden把子元素多出来的色块背景隐藏掉。
	https://codepen.io/yangbo5207/post/equh

13. 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？


14. li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
	原因：有换行符,即换行显示或空格分隔的情况下会有间距;

15. 为什么要初始化CSS样式？
	因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

16. absolute的containing block(容器块)计算方式跟正常流有什么不同？

17. CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？
	当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。
	如果此值被用在其他的元素上，会呈现为 "hidden"。

	在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。
	在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。

18. position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？
	一、'display'、'position' 和 'float' 的相互关系
	1. 'display' 的值为 'none'
	如果 'display' 的值为 'none'，那么 'position' 和 'float' 不起作用。在这种情况下，元素不产生框。因此浮动和定位无效。

	2. 'position' 的值是 'absolute' 或 'fixed'
	如果 'position' 的值是 'absolute' 或 'fixed'，框就是绝对定位的，'float' 计算后的值应该是 'none'，并且，'display' 会被按照上表设置。 框的位置将由 'top'，'right'，'bottom' 和 'left' 属性和该框的包含块确定。
	也就是说，当元素是绝对定位时，浮动失效，'display' 会被按规则重置。

	3. 'float' 的值不是 "none"
	如果 'float' 的值不是 "none"，该框浮动并且 'display' 会被按照转换对应表设置。
	按照规则，SPAN 是行内元素，因此不能够设置其宽度和高度。但是浮动后，'display' 值按照转换对应表设置后，成为块级元素。

	4. 元素是根元素
	如果元素是根元素，'display' 的值按照转换对应表设置。

	5. 否则，应用指定的 'display' 特性值。

	二、position跟display、overflow、float下的margin collapse。
	1.两个或多个毗邻的普通流中的块元素垂直方向上的 margin 会折叠。
	2.浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上其他元素的 margin 折叠
	3.创建了块级格式化上下文的元素，不和它的子元素发生 margin 折叠

	详解：https://www.cnblogs.com/jackyWHJ/p/3756087.html

19. 对BFC规范(块级格式化上下文：block formatting context)的理解？
	常见的格式化上下文方法：
	1.根元素或包含根元素的元素
	2.浮动元素（元素的 float 不是 none）
	3.绝对定位元素（元素的 position 为 absolute 或 fixed）
	4.display 为 inline-block、table相关(table-cell,table-caption,table...)
	5.overflow 值不为 visible 的块元素
	6.弹性元素（display为 flex 或 inline-flex元素的直接子元素）
	7.网格元素（display为 grid 或 inline-grid 元素的直接子元素）
	8.多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）

	BFC布局规则：
	1.内部的Box会在垂直方向，一个接一个地放置。
	2.Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
	3.每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
	4.BFC的区域不会与float box重叠。
	5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
	6.计算BFC的高度时，浮动元素也参与计算

	BFC有哪些作用：
	1自适应两栏布局
	2可以阻止元素被浮动元素覆盖
	3可以包含浮动元素——清除内部浮动
	4.分属于不同的BFC时可以阻止margin重叠

	https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
	https://zhuanlan.zhihu.com/p/25321647
	https://juejin.im/post/5909db2fda2f60005d2093db


20. css定义的权重
	权重顺序 ：!important > 内联 > ID > 类 = 伪类 = 属性 > 标签(元素) = 伪元素 > 通配符
	
	4个等级的定义如下：
	第一等：代表内联样式，如: style=””，权值为1000。
	第二等：代表ID选择器，如：#content，权值为100。
	第三等：代表类，伪类和属性选择器，如.content，权值为10。
	第四等：代表类型选择器和伪元素选择器，如div p，权值为1
	https://www.jianshu.com/p/08ca24758675

21. 请解释一下为什么需要清除浮动？清除浮动的方式
	清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示.
	浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
	由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。
	(1)添加额外标签: 在最后一个浮动元素后边新增一个空的块状元素div，并设置clear:both以清除所有浮动。
	(2)设置父元素设置overflow: hidden或者overflow: auto。
	(3)父元素也设置浮动
	(4)采用伪类方法，在最后一个浮动元素的后边，添加clear:both。


22. 什么是外边距合并？
	外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。
	合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。

23. zoom:1的清除浮动原理?
	清除浮动，触发hasLayout；
    Zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。
    譬如外边距（margin）的重叠，浮动清除，触发ie的haslayout属性等。

    来龙去脉大概如下：
    当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。
    Zoom属是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。然而，zoom现在已经被逐步标准化，出现在 CSS 3.0 规范草案中。
    目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？
    可以通过css3里面的动画属性scale进行缩放。

24. 移动端的布局用过媒体查询吗？
	@media screen and (min-width:600px) {...}


25. 使用 CSS 预处理器吗？喜欢那个？
	less,

26. CSS优化、提高性能的方法有哪些？
	加载性能
	选择器性能
	渲染性能
	可维护性、健壮性
	https://www.zhihu.com/question/19886806
	https://segmentfault.com/a/1190000007336987
	https://juejin.im/post/5b6133a351882519d346853f


27. 浏览器是怎样解析CSS选择器的？
	浏览器css匹配核心算法的规则是以 right-to-left 方式匹配节点的。
	这样做是为了使规则能够快、准、狠地与render树上的节点匹配，通俗地将就是 就近原则。

	试想一下，如果采用 left-to-right 的方式读取css规则，那么大多数规则读到最后（最右）才会发现是不匹配的，
	这样会做费时耗能，最后有很多都是无用的；
	而如果采取 right-to-left 的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。

	显而易见，right-to-left 比 left-to-right 的无效匹配次数更少，从而匹配快、性能更优，
	所以目前主流的浏览器基本采取right-to-left的方式读取css规则。
	https://segmentfault.com/q/1010000000713509
	深入：https://juejin.im/entry/5a123c55f265da432240cc90

28. 在网页中的应该使用奇数还是偶数的字体？为什么呢？
	1.比例关系
	2.浏览器缘故
	3.系统差别
	https://blog.csdn.net/jian_xi/article/details/79346477
	https://www.zhihu.com/question/20440679

29. margin和padding分别适合什么场景使用？
	何时应当使用margin：
	需要在border外侧添加空白时。
	空白处不需要背景（色）时。
	上下相连的两个盒子之间的空白，需要相互抵消时。如15px + 20px的margin，将得到20px的空白。

	何时应当时用padding：
	需要在border内测添加空白时。
	空白处需要背景（色）时。
	上下相连的两个盒子之间的空白，希望等于两者之和时。如15px + 20px的padding，将得到35px的空白。

	margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间隔。margin用于布局分开元素使元素与元素互不相干；padding用于元素与内容之间的间隔，让内容（文字）与（包裹）元素之间有一段“呼吸距离”
	
30. 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

31. 元素竖向的百分比设定是相对于容器的高度吗？
	如果是height的话，是相对于容器高度，如果是padding-height,margin-height则是相对于容器的宽度
	https://segmentfault.com/a/1190000002528855#articleHeader4

32. 全屏滚动的原理是什么？用到了CSS的那些属性？

33. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
	响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
	基本原理是通过媒体查询(Media Queries)检测不同的设备屏幕尺寸做处理。
	页面头部必须有meta声明的viewport。
	引入 polyfill 脚本, 如respond.js 和 css3-mediaqueries.js

	响应式设计的优点是灵活性强，适应不同分辨率的设备，缺点是兼容各种设备导致代码臃肿，加载时间加长。
	https://www.ibm.com/developerworks/cn/web/1506_zhangqun_responsiveweb/index.html

34. 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

35. ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。
	单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。（伪元素由双冒号和伪元素名称组成）
  双冒号是在当前规范中引入的，用于区分伪类和伪元素。不过浏览器需要同时支持旧的已经存在的伪元素写法，
  比如:first-line、:first-letter、:before、:after等，
  而新的在CSS3中引入的伪元素则不允许再支持旧的单冒号的写法。

  想让插入的内容出现在其它内容前，使用::before，否者，使用::after；
  在代码顺序上，::after生成的内容也比::before生成的内容靠后。
  如果按堆栈视角，::after生成的内容会在::before生成的内容之上。

  :before/:after伪元素是在CSS2中提出来的，所以兼容性可能到IE8了。 
  ::before/::after是CSS3中的写法，为了将伪类和伪元素区分开。但是平时为了兼容性，还是会用一个冒号的写法。

  用法：https://www.jianshu.com/p/2a3a355f5fbe
  详解：http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/


36. 如何修改chrome记住密码后自动填充表单的黄色背景 ？
	reason:
	input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
	    background-color: rgb(250, 255, 189) !important;
	    background-image: none !important;
	    color: rgb(0, 0, 0) !important;
	}
	method:
	input:-webkit-autofill {
	    -webkit-box-shadow: 0 0 0px 1000px white inset;
	}

	https://segmentfault.com/q/1010000000671971

37. 你对line-height是如何理解的？
	行高是指文本行基线间的垂直距离。
	https://segmentfault.com/a/1190000003038583

38. 设置元素浮动后，该元素的display值是多少？
	block;

39. 怎么让Chrome支持小于12px 的文字？
	  1、用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
	  2,-webkit-transform:scale(0.8);display:block;

40. 让页面里的字体变清晰，变细用CSS怎么做？
	-webkit-font-smoothing在window系统下没有起作用，
	但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。

41. font-style属性可以让它赋值为“oblique” oblique是什么意思？
	倾斜的字体样式

42. position:fixed;在android下无效怎么处理？
	与众不同的移动端底部固定栏 fixed、absolute 兼容 iOS 和 Android 方案:
	https://segmentfault.com/a/1190000012310521

43. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
	多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms ＝ 16.7ms
	·
44. display:inline-block 什么时候会显示间隙？(携程)
	原因：有换行符,即换行显示或空格分隔的情况下会有间距;
	移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing
	https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/

45. overflow: scroll时不能平滑滚动的问题怎么处理？

46. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

47. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
	1.png:无损压缩，尺寸比jpg/jpeg大，只适合做小图标。
	可细分为png-8/png-24:1个小格子(像素)使用的二进制位数越多，色彩越丰富;8位有256种颜色，24位有1600万颜色。
	2.jpg/jpeg:采用了压缩算法，有一点失真，比png小很多
	3.gif:一般只做动图，正在被google的webm格式取代中
	4.webm:google提出的一种新的文件格式,在youtube、flash支持都不错,移动设备的流畅度

	照片用 JPG。
	动画用 GIF。
	Logo、Icon 等小图用 PNG-8。
	非特殊情况，尽量不要用 PNG-24 和 PNG-32。
	而 WebP 这种谷歌发明的新格式，虽然比上述任何一种格式都要好，但是截至现在（2017年10月），
	它的浏览器兼容性还不行，所以暂时还不能用（或者用两套图片，不过我嫌麻烦）。

	详解:https://www.jianshu.com/p/ab96bf20f90e

48. 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）
	 Cookie 默认是不能跨域的, 对于静态资源，尽量使用不同的域名来存放,(请求头中就不会带有cookie数据，
  	这样可以降低请求头的大小，降低请求时间), 这样就做到了不同域名下静态资源请求的 Cookie 隔离。
	 why:如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
  		所以不如隔离开。
49. style标签写在body后与body前有什么区别？
	写在head标签中利于浏览器逐步渲染（resources downloading->CSSOM+DOM->RenderTree(composite)->Layout->paint）。
	具体渲染过程请参考https://segmentfault.com/a/1190000004292479
	写在body标签后由于浏览器以逐行方式对html文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）
50. 什么是CSS 预处理器 / 后处理器？
	预处理器的作用是增强了 CSS 语法，让你可以在 CSS 中使用变量、循环、嵌套等功能，
	主要代表是 Less、Sass，它们本质上就是一种编译器.
	后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
    是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

51. rem布局的优缺点

52. 

53. 

54. 

55. 

56. 

57. 

58. 

59. 

60. 


