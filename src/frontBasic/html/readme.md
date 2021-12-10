## HTML5有哪些新特性？
1. 语义化标签:article footer header nav section
2. 增强型表单包括属性及其元素: calendar date time email url search
3. 多媒体：新增视频(video)和音频(audio)标签: 配套API
4. 地理定位:Geolocation:navigator.geolocation.getCurrentPosition
5. 拖放API
6. 图像：canvas图形:canvas API 和 SVG绘图
7. Web Worker
8. 本地存储：Web Storage和sessionStorage
9.  Web Socket
    
## HTML5移除了哪些元素？
1. 纯表现的元素：u,big,center,strike,tt,font,basefont,dir；css可以处理
2. 框架集元素：frame, frameset,noframes
3. acronym applet strike

## 如何区分html和html5?
1. 声明文档区别
   1. html文档类型：
        ```html5
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
            // 或者
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        ```
   2. html5文档类型：
        ```
         <!DOCTYPE html>
        ```
2. 结构语义区别
   1. html：没有体现结构语义化的标签
   2. html5：添加了许多具有语义化的标签
3. 绘图区别
   1. HTML：指可伸缩矢量图形，用于定义网络的基于矢量的图形。
   2. HTML5：HTML5的canvas元素使用脚本（通常使用JavaScript）在网页上绘制图像，可以控制画布每一个像素。
4. 音频和视频的支持
   1. HTML如果不使用Flash播放器支持，它不支持音频和视频。
   2. HTML5使用<audio>和<video>标签来支持音频和视频控制。
5. 语法的处理
   1. HTML无法处理不准确的语法；
   2. HTML5能够处理不准确的语法。

## 如何处理html5新标签的浏览器兼容问题？
1. 使用JavaScript新增元素的方法解决。
    ```
        document.createElement('header')
        document.createElement('nav')
        header, footer{display:block}
    ```
2. 使用封装好的插件html5shiv.js解决兼容性问题。
    ```
        <!--[if lt IE 9]>
            <script type="text/javascript"  src="./html5shiv.js"></script>
        <![endif]-->
    ```
3. html5shiv.js 使用 document.createElement和document.createDocumentFragment for IE6-8。支持基本样式：HTML5 elements for IE6-9, Safari 4.x and FF 3.x.(仓库地址：https://github.com/aFarkas/html5shiv)
   

## 【新问题】【未掌握】HTML5 的文件离线储存怎么使用，工作原理是什么？
1. 原理：HTML5 的离线存储是基于一个新建的 .appcache 文件的缓存机制（不是存储技术），
通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储下来。之
后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
2. 如何使用：https://www.jianshu.com/p/d0f39d535167

## 请用html知识解决seo 优化问题？
meta标签
```

    <meta name="keywords" content="SEO,爬虫，搜索引擎、百度、html 优化">

    <meta name="description" content="通过html 标签及属性的使用提高网站被爬虫
爬取的几率，使用户百度时网站尽量排在前面，提高用户的点击率">

   <h1>
   // 这个href 应该是要写线上的首页地址，比项目目录地址要好
   <a href="https://xxx">
   <img src="images/logo.png" alt="html 对seo 的优化"/>
   </a>
   </h1>
```
img 标签，img 标签增加alt 属性

a 标签增加title 属性（非必需），不可以有href="#" 这种空指向写法

h1~h6 标签

添加robots.txt ，搭建网站与搜索引擎对话的桥梁

页面结构清晰，使用语义化标签比如header、footer、content、section，js、css 使用外部文件。

增加外部链接

前后端分离（vue、ajax）、flash 不利于seo

## 常用浏览器有哪些，内核都是什么？
常用浏览器有IE 火狐(firefox) chrome safari 360 搜狗等
内核：

IE 的是Trident

火狐的是Gecko

chrome 和safari 用的是Webkit

360 和搜狗这些分极速模式和兼容模式，极速模式用的Webkit 的内核，兼容模式用的Trident 内核。

## 介绍一下你对浏览器内核的理解？
1. 浏览器内核主要分成两部分：渲染引擎(Layout Engine 或Rendering Engine) 和JS引擎。
2. 渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS
等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同
对于网页的语法解释会有不同，所以渲染的效果也不相同。
3. JS 引擎：解析和执行javascript 来实现网页的动态效果。
最开始渲染引擎和JS 引擎并没有区分的很明确，后来JS 引擎越来越独立，内核就倾向于只指渲染引擎。