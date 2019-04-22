## Part 4 库,框架及其他

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