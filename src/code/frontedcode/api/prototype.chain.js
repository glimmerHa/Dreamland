// 原型链：从instanceof 中需要理解。

// 构造函数
function Foo(){} // 自定义构造函数
function Object(){} // 对象构造函数
function Function(){} // 函数构造函数
Foo.prototype // 构造函数显示原型
Foo.prototype.constructor === Foo // 原型的构造器指向 本构造函数
Foo.__proto__ === Function.prototype// 对象 隐式原型 等于其构造函数原型

Foo.prototype.__proto__ === Object.prototype

Object.prototype
Object.prototype.constructor === Object
Object.__proto__ === Function.prototype

Object.prototype.__proto__ === null // 原型链顶端

Function.prototype
Function.prototype.constructor === Function
Function.__proto__ === Function.prototype

Function.prototype.__proto__ ===  Object.prototype// 原型链顶端

var foo = new Foo()
var obj = new Object()
var fun = new Function()

foo.__proto__ = Foo.prototype
obj.__proto__ = Object.prototype
fun.__proto__ = Function.prototype

//
Object instanceof Object// ===> true
// Object.__proto__ = Function.prototype
// Function.prototype.__proto__ === Object.prototype
Foo instanceof Foo // ===>false
Foo.__proto__ === Function.prototype
Function.prototype.__proto__ = Object.prototype

Foo instanceof Object // ===> true
Foo instanceof Function // ====>true
