// 参考：https://github.com/mqyqingfeng/Blog/issues/13
//new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
/* 
// Otaku 御宅族，简称宅
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}
// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}
var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
*/
// 实例 person 可以：
// 1. 访问到 Otaku 构造函数里的属性
// 2. 访问到 Otaku.prototype 中的属性
// new 是关键字，所以无法像 bind 函数一样直接覆盖
// mynew(构造函数，xxx1, xxx2, xxx3)

// new 做了什么事情：1 创建一个对象，2. 绑定 __proto__ 3. 修改this 指向，4.将该对象返回
function mynew(){
    // 创建对象
    let obj = new Object()
    // 获取第一个参数
    let Con = Array.prototype.shift.call(arguments)
    // 绑定好原型对象
    obj.__proto__ = Con.prototype
    // 绑定this值
    var res = Con.apply(obj, arguments)
    // 返回该对象，若构造函数有返回值，则 res;否则 obj
    return typeof res === 'object'? res:obj
}

// 验证
function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
    return {
        name: name,
        habit: 'Games1'
    }
}
console.log(mynew(Otaku,'huangtao',12))