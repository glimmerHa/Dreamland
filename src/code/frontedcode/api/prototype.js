function Person() {}
/* 
var person = new Person();
person.name = 'Kevin';
console.log(person) // Kevin
console.log(person.__proto__ === Person.prototype) // Person.prototype
*/
// Person.prototype
//那什么是原型呢？
//你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，
// 这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin

// 构造函数和实例原型之间
// Person    Person.prototype
// 实例与实例原型
// person.__proto__ === Person.prototype
//原型是否有属性指向构造函数
//Person.prototype.constructor === Person
// 顺便学习一个ES5的方法,可以获得对象的原型
// Object.getPrototypeOf(person) === Person.prototype


// 实例与原型
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。