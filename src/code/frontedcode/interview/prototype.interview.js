// 参考：https://segmentfault.com/a/1190000039700843
// 题目1
function fun(){
    this.a = 0
    this.b = function(){
        alert(this.a)
    }
}
fun.prototype = {
    b: function(){
        this.a = 20
        alert(this.a)
    },
    c: function (){
        this.a = 30
        alert(this.a)
    }
}

var my_fun = new fun()

my_fun.b() // 实例上的 b
//0 
my_fun.c() // 原型链上的c
// 30



// 题目2
function Fn(){
    var n = 10
    this.m = 20
    this.aa = function() {
        console.log(this.m)
    }
}
Fn.prototype.bb = function () {
    console.log(this.n)
}
var f1 = new Fn
// f1.__proto__ 是Fn.prototype .bb
Fn.prototype = {
    aa: function(){
        console.log(this.m + 10)
    }
}

var f2 = new Fn
// f2.__proto__  Fn.prototype = {aa}
console.log(f1.constructor)   
//f1.constructor => f1.__proto__.constructor = Fn.prototype.constructor =Fn
// Fn 
console.log(f2.constructor) 
  //f2.constructor => f2.__proto__.constructor = Fn.prototype = {} 
  // Fn.prototype.__proto__ = Object.prototype.constructor = Object

f1.bb()
//    有bb ，但是无this.n
// undefined
f1.aa() 
// 构造函数内有 aa, this.m = 20
f2.aa()   
// 构造函数内有 aa, this.m = 20
f2.__proto__.aa()    
// f2.__proto__ = Fn.prototype 有aa 函数，但是没有this.m（this指向 Fn.prototype）
// NaN
f2.bb()
// 没有bb    


// 题目3
function Foo() {
    getName = function (){
        console.log(1)
    }
    return this
}
Foo.getName = function () {
    console.log(2)
}
Foo.prototype.getName = function(){
    console.log(3)
}
var getName = function (){
    console.log(4)
}
function getName() {
    console.log(5)
}
// 1
Foo.getName() // 2
//2
getName() // 4 function 声明和定义都 提升
//3
Foo().getName(); //  Foo()运行，全局getName 改变。return this=》window.getName = 1
//4
getName(); // 1 全局的 
//5
new Foo.getName() // new (Foo.getName()) 2
//6
new Foo().getName() //( new Foo()).getName()  prototype  3
//7
new new Foo().getName() // new (new Foo()).getName() new this(Foo实例).getName() 3






/* 输出
*   2
*   4
*   1
*   1
*   2
*   3
*   3
*/