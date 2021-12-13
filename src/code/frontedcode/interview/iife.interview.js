var ary = [1, 2, 3, 4]
function fn(i){
    return function(n){
        console.log(n+ (i++))
    }
}

var f = fn(10)
f(20)  
// 30
fn(20)(40)
// 60
fn(30)(40)  
// 70
f(30) 
// 41  
console.log(i)  // 报错：VM242:13 Uncaught ReferenceError: i is not defined


// 题目2
var n = 10
function fn(){
    var n =20
    function f() {
        // 作用域链上的n
       n++; // 第一次:20++
       // 第二次: 21++
       console.log(n) // 第一次 21
       // 第二次: 22
     }
    f() // 执行过，第一次，window
    return f
}

var x = fn()// f函数 开始第一次
x()// f() 第二次 22
x() // f() 第三次 23
console.log(n) // 10

// 闭包题目3
// 函数作为参数
var a = '林一一'
function foo(){
    var a = 'foo'
    function fo(){
        console.log(a)
    }
    return fo
}
function f(p){
    var a = 'f'
    p()
}
f(foo())
// foo() => fo 
// f(fo) => p() => fo() 上级作用域是 foo 所以a = 'foo'

// 题目4 节流防抖使用闭包
// 节流
function throttle(fn, timeout) {
    let timer = null
    return function (...arg) {
        if(timer) return
        timer = setTimeout(() => {
            fn.apply(this, arg)
            timer = null
        }, timeout)
    }
}

// 防抖
function debounce(fn, timeout){
    let timer = null
    return function(...arg){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, timeout)
    }
}

// 题目5 科里化的实现
function curry(fn, len = fn.length) {
    return _curry(fn, len)
}

function _curry(fn, len, ...arg) {
    return function (...params) {
        let _arg = [...arg, ...params]
        if (_arg.length >= len) {
            return fn.apply(this, _arg)
        } else {
            return _curry.call(this, fn, len, ..._arg)
        }
    }
}


let fn = curry(function (a, b, c, d, e) {
    console.log(a + b + c + d + e)
})

fn(1, 2, 3, 4, 5)  // 15
fn(1, 2)(3, 4, 5)
fn(1, 2)(3)(4)(5)
fn(1)(2)(3)(4)(5)



function curry(fn,...args){
    if(args.length >= fn.length ){
        return fn(...args)
    }else{
        return function(...argss){
           return  curry(fn,...args,...argss)
        }
    }
}
