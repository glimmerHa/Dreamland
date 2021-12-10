## ajax fetch axios 区别
参考：https://juejin.cn/post/6844904036232069127
1. ajax: 创建 XmlHttpRequest实例；调用open方法设置基本请求信息；设置发送的数据，发送请求；注册监听回调函数；拿到返回值，对页面进行更新。
   1. 缺点：本身是针对MVC的编程，不符合现在前端MVVM的浪潮
   2. 缺点：基于原生的XHR开发，XHR本身的架构不够清晰，已经有了fetch的替代方案
2. axios 
3. fetch
   1. fetch 不是 ajax 的进一步封装，而是原生 js。 Fetch 函数就是原生 js。
   