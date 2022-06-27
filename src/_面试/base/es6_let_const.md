# var let const 
## var 变量提升
### 题目1： 如下代码，demo(false) 会报错吗？
##### 不会，为什么？请写出什么情况下 会报错？
##### 会，为什么，怎么改为不报错
```javascript
function demo(condition){
    if (condition) {
        var value = 1;
    }
    console.log(value);
}
```

### 题目2：如下代码，打印i 结果是什么？
##### 有结果，准确数字，怎么得来的。为什么可以打印
##### 无结果，报错？为什么？
```javascript
function demo(){
    let a = 0
    for(var i = 0; i < 6;i++){
        a = a+i
    }
    console.log(i)
    return a
}
```

## 加强对 变量生命周期 的管理(严谨）-块级作用域
### 存在于
1. 函数内部
2. 块中( 一对花括号就是一个块代码)

## let const
### 共同特点
1. 不会被提升
2. 重复声明报错
3. 不绑定全局作用域(window.xx)
4. 临时性死区(Temporl Dead Zone)

### 题目3，如下代码，value 打印结果
##### 政策打印，为什么
##### 报错，为什么
###### 提示：结合重复声明报错 和 临时性死区 一起理解
```javascript
var value = "global";

// 例子1
(function() {
    console.log(value);

    let value = 'local';
}());

```

### 区别特点
#### const
1. const声明常量；值在声明时赋予，不允许二次修改，否则报错（不允许修改绑定，允许修改值，理解下声明对象）


### 关注代码中哪些属于 代码块。
1. if
2. else
3. if else
4. for
5. do while
6. 等等

### 题目4. 面试题,如下代码，输出什么？
```javascript
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] =function() {
        console.log(i);
    }
}
funcs[0](); // 0
```
### 题目4， 改造方案有哪些？
#### 方法1: 闭包函数
```javascript
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = (function(i){
        return function() {
            console.log(i);
        }
    }(i))
}
funcs[0](); // 0
```
#### 方法2: 块级作用域
```javascript
var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs[i] = function() {
        console.log(i);
    }
}
funcs[0](); // 0
// let ok const no 
```
### for in 循环，不容忽略。
```javascript
var funcs = [], object = {a: 1, b: 1, c: 1};
for (const key in object) {
    funcs.push(function(){
        console.log(key)
    });
}

funcs[0]()
// let ok const ok
```