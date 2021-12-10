## flexiblejs的使用
https://www.jianshu.com/p/04efb4a1d2f8
1. 引入方式
2. flexible.js原理
   1. **html**标签上增加data-dpr属性
   2. **html**标签上增加font-size样式
   3. **body**标签上增加font-size样式
3. 把视觉稿中的px转换成rem
   1. 视觉稿为640px的宽来举例子，把640px分为100份，每一份称为一个单位a，那么每个a就是6.4px，而1rem单位被认定为10a，此时，1rem=1(a)X10X6.4(px)即64px。
   2. 在开发过程中那我们如何快速的把px转换成rem呢？
4. 字体不使用rem的方法
   ```
    div {
          width: 1rem;
          height: 0.4rem;
          font-size: 12px; // 默认写上dpr为1的fontSize
      }
      [data-dpr="2"] div {
          font-size: 24px;
      }
      [data-dpr="3"] div {
          font-size: 36px;
      }
   ```
5. viewport的meta标签
   

## vue-h5 方案
vue2: https://www.yuque.com/nowthen/longroad/vue_cli3
vue2: https://github.com/sunniejs/vue-h5-template
vue3:https://github.com/Ewall1106/vue-h5-template

### 移动端适配方案
移动端适配还是手淘模式，采用px转rem + lib-flexible实现。

postcss-pxtorem插件把配置的px转成rem;

lib-flexible库则根据页面尺寸和dpr，自动设置html的字体和meta缩放比例。
