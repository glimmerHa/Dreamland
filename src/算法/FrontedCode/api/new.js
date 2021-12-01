function mynew(){
    let Con = Array.prototype.shift.call(arguments)
    let obj = new Object()
    // 绑定好原型对象
    obj.__proto__ = Con.prototype
    // 绑定this值
    var res = Con.apply(obj, arguments)
    return typeof res === 'object'? res:obj
}

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