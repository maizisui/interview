## Part 5 算法, 编程实战

#### 1.  如何将浮点数点左边的数每三位添加一个逗号， 如12000000.11 转化为『12,000,000.11』?
     function commafy(num){
        return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
                return $2 + ',';
            });
      }

#### 2. 如何实现数组的随机排序？
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

#### 3.写一个通用的事件侦听器函数。
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

#### 4. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
    pushState + ajax
    HTML5里引用了新的API, 就是history.pushState和history.replaceState,     就是通过这个接口做到无刷新改变页面URL的, 且正确响应浏览器前进、后退;
    1. 当我们完成一次ajax调用后，就应当使用history.pushState将新的记录执行。
    history.pushState(stateObj, title, url); //状态对象, 标题, URL
    Html5增加了window.onpopstate事件来响应浏览器的这些操作。         当点击浏览器上的前进、后退按钮或者使用javascript代码 history.go、 history.back 都会触发onpopstate事件,  并返回 pushState时传入的 state 对象以供调用。    我们只要在该事件处理函数中把页面内容复原就OK了。
    window.onpopstate = function (evt) {
        var state = evt.state;
        //chrome 和 safari 会在第一次加载页面的时候触发该事件，因此要做一些逻辑上的处理以免出现怪异的情况 
        if (state) {     
        $("#container").html(state.content);
        }
    }
    使用 replaceState把初始载入的页面放入历史记录中.
    if (history.replaceState) {
        history.replaceState({ url: location.href, title:"",content:data }, "", location.href);
    }
[pushState + ajax 实现浏览器无刷新前进后退](http://blog.chenxu.me/post/detail?id=ed4f0732-897f-48e4-9d4f-821e82f17fad) <br>
[Manipulating the browser history
](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API) <br>
[拿offer解答](https://www.naoffer.com/exam/319/935)

#### 5. 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
    通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

#### 6. 移动端最小触控区域是多大？
    iOS 44pt x 44pt (point) 16mm*16mm
    pt是一种固定长度的度量单位, 常见于软件设计、排版印刷行业, 1点=0.376毫米; 
[知乎讨论](https://www.zhihu.com/question/19642393)

#### 7. 使用JS实现获取文件扩展名？
    function getFileExtension(filename) {
        return filename.slice(filename.lastIndexOf('.')+1);
    }
[如何更有效的获取文件扩展名](https://segmentfault.com/a/1190000004993946)</br>

#### 8. 函数节流和函数防抖？
    函数节流[throttle] 函数防抖[debounce]  
    debounce 强制函数在某段时间内只执行一次, throttle 强制函数以固定的速率执行。
    throttle）与debounce都是为了限制函数的执行频次,
    以优化函数触发频率过高导致的响应速度跟不上触发频率, 
    出现延迟, 假死或卡顿的现象。 
    区别：节流函数不管事件触发有多频繁, 都会保证在规定时间内一定会执行一次真正的事件处理函数。
    对于函数防抖，有以下几种应用场景：
    给按钮加函数防抖防止表单多次提交。 
    对于输入框连续输入进行AJAX验证时, 用函数防抖能有效减少请求次数。
    判断scroll是否滑到底部, 滚动事件+函数防抖
    总的来说，适合多次事件一次响应的情况
    对于函数节流, 有如下几个场景：
    游戏中的刷新率
    DOM元素拖拽
    Canvas画笔功能
    总的来说，适合大量事件按时间做平均分配触发
[函数防抖与函数节流](https://zhuanlan.zhihu.com/p/38313717)</br>
[Debounce 和 Throttle 的原理及实现](https://segmentfault.com/a/1190000015619151)</br>
[浅谈 Underscore.js 中 _.throttle 和 _.debounce 的差异](https://segmentfault.com/a/1190000007440036)</br>

#### 9. 创建“原生”（native）方法
    给字符串对象定义一个repeatify功能。
    当传入一个整数n时, 它会返回重复n次字符串的结果。   例如：console.log('hello'.repeatify(3));应打印 hellohellohello。  
    String.prototype.repeatify = function(n){
        var str = '';
        for (var i = 0; i < n; i++) {
            str + = this;
        }
        return str;
    }

