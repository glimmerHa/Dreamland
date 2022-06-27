console.log('你好')
// 实现一个构造器
function Person(){

}

// 第一波
let p = new Person()
console.log(p)
p.name = 'kevin'
console.log(p)
// 了解几个问题
//  p.__proto__ === Person.prototype  === Object
// p.constructor === Person
Person.prototype.name="kivinpre"
let p1 = new Person()
let p2 = new Person()
console.log(p1.name)
console.log(p2.name)
// 获取的 原型对象上的name 属性，由于 自身没有，所以顺着 原型链 向上检索