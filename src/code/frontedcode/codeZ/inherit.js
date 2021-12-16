// https://github.com/mqyqingfeng/Blog/issues/16
// 继承
// 原型链继承
function Parent () {
    this.name = 'kevin';
    // 缺陷1：引用类型的属性，被所有实例共享
    this.names = ['init']
}
Parent.prototype.getName = function () {
    console.log(this.name);
}
function Child () {}
//在创建 Child 的实例时，不能向Parent传参
Child.prototype = new Parent();
// 缺陷2：子构造函数的 原型对象 是 父构造函数的 实例化

var child1 = new Child();
console.log(child1.getName()) // kevin

child1.names.push('second')
console.log(child1.names)// [ 'init', 'second' ]
var child2 = new Child()
console.log(child2.names) // [ 'init', 'second' ]

//借用构造函数(经典继承)
function Parent () {
    this.names = ['kevin', 'daisy'];
}
function Child () {
    // 函数.call 改变parent 的this指向。
    Parent.call(this);
    // ：父构造函数的属性会 挪威 子实例的属性
    // 优点1：避免了引用类型的属性被所有实例共享
    // 优点2：可以在 Child 中向 Parent 传参
    // 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。
}

var child1 = new Child();
child1.names.push('yayu');
console.log(child1.names); // ["kevin", "daisy", "yayu"]
var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy"]


// .组合继承 原型链继承和经典继承双剑合璧。
// 融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
function Parent(name,age){
    this.name = name
    this.age = age
    this.colors = ['red','yellow']
}
function Child (name,age,sex){
    Parent.call(this, name,age)
    this.sex = sex
}
Child.prototype = new Parent()
Child.prototype.constructor = Child

// 原型式继承
// ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型
//引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
function createObj(o){
    var F = function(){}
    F.prototype =o
    return new F()
}

// 寄生组合式继承
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
 // 使用了借助构造函数
function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步替代 Child.prototype = new Parent
var F = function () {};
F.prototype = Parent.prototype;
Child.prototype = new F();

var child1 = new Child('kevin', '18');
console.log(child1);


function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
 // 使用了借助构造函数
function Child (name, age) {
    Parent.call(this,name)
    this.age = age;
}
// 最终版本 继承
function object(o) {
    // o 是一个原型
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    child.prototype = prototype;
    child.prototype.constructor = child;
}

// 当我们使用的时候：
prototype(Child, Parent);
var child1 = new Child('kevin', '18');
console.log(child1);
