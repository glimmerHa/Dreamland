// 参考：https://juejin.cn/post/6942697803709677582
// this题目1
var name = '林一一'
var obj = {
    name: '林二二',
    prop: {
        name:'huangtao',
        getName: function(){
            return this.name
        }
    }
}
console.log(obj.prop.getName()) // undefined  getName this 指向 prop对象
var a = obj.prop.getName // 引用
console.log(a()) //林一一

// 题目二
var num = 10    // 60； 65
var obj = {
    num: 20    
}
obj.fn = (function (num){
    // this指向window
    this.num = num * 3
    num++    // 21
    return function(n){
        this.num += n    // 60 + 5 = 65；20 + 10 =30
        num++   // 21 + 1 = 22；22 + 1 = 23
        console.log(num)
    }
})(obj.num)
// 自执行函数
var fn = obj.fn
fn(5)   // 22
obj.fn(10)   // 23
console.log(num, obj.num)    // 65, 30

// this 与实例 题目3
function Fn(){
    var n = 0
    this.name = '林一一'
    this.age = 18
    this.getName = function(){
        return this.name
    }
}

Fn.prototype.getAge = function(){
    return this.age
}

Fn.x = '林二二'

var f = new Fn()
console.log(f.name)     // 林一一
console.log(f.getName())     // 林一一
console.log(f.getAge())        // 18
console.log(f.n)    // undefined
console.log(f.x)    // undefined


//this  和bind
var name = '林一一'
var age = 18
function fn(){
   return this.name
}
function p(){
    return {
        age: this.age,
        arg: arguments
    }
}
let obj = {
    name: '二二',
    age: 18
}
let o = {
    name: '三三'
}

fn()    // '林一一'
fn.call(obj)    // '二二'
fn.call(o)  //  '三三'
p.call(obj, 12, 23, 45, 67) // {age: 18, arg: Arguments(4)}
fn.apply(obj)    // "二二"
p.apply(obj, [1, 2, 3, 4, 5])    // {age: 18, arg: Arguments(5)}
fn.bind(obj)()  // "二二"
p.bind(obj, 12, 23, 34)()   // {age: 18, arg: Arguments(3)}

// 题目5
var val = 10
let a = function () {
    console.log(this.val)
}
a.prototype.val = 9 
val = 3

a();    // 3
let b = new a();    // 9
console.log(b.val) // 9

// 题目6
var name = '林一一'
var obj = {
    name: '林二二',
    show: function (){
        console.log(this.name)
    },
    wait: function () {
        this.show()
        var fn = this.show// obj.show
        fn() // 没有. 因此this 指向window
    }
}
obj.wait()  //  林一一

// 题目7
function Foo() {
    //函数的私有 a 被重新赋值，同时原型prototype 上的属性a也被重新赋值
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
//函数的私有方法a
Foo.a = function() {
    console.log(4)
}
Foo.a(); // 4
let obj = new Foo(); 
obj.a(); // 2
Foo.a(); //1 


// 题目8 自作 对了。
var n = 2 
var obj = {
    n: 3,    
    fn: (function(n){
        n*=2 = undefined
        this.n+=2  // window.n   4
        var n = 5    
        console.log("window.n", window.n) //4
        return function (m) {
            console.log("n:", n, "m", m)  
            //fn(3)   (n=5, m = 3)
            //obj.fn(3)   (n=6, m = 3)
            this.n*=2    
            // fn(3)  window 8
            //obj.fn(3) 6
            console.log(m + (++n)) 
            //fn(3)  3+5+1 = 9
            //obj.fn(3) 3 + 6+1 = 10
        } 
    })(n)
}

var fn = obj.fn; // fn(undefined)
fn(3)   // m = 3 (n=5, m = 3) this.n = 8
obj.fn(3)   // this指向 obj
console.log(n, obj.n) 
// 8  6


//题目9
var name = '林一一'
var obj = {
    name : '二二',
    callback: function(){
        console.log(this.name)
    }
}

setTimeout(obj.callback,1000)
// output:林一一
//obj.callback(这只是一个引用地址)

