//bind() 方法
// 创建一个新函数。
//当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this
//之后的一序列参数将会在传递的实参前传入作为它的参数。
// 函数的方法
// 调用：bar.bind(obj,xx1,xx2,xx3)
/*
var foo = {
    value:1
}
function bar(name,age){
    console.log(this.value);
    console.log(name)
    console.log(age)
    return this.value
}
var bindFoo = bar.bind(foo,'huangtao','18')
console.log(bindFoo())
*/

//指定 this 的指向， call apply 来实现
Function.prototype.bind1 = function(fn){
    // fn 是this指向
    // 函数内this 是 函数本身
    var self = this
    // 获取参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function(){
        // 获取参数
        var argss = Array.prototype.slice.call(arguments)
        // 为什么不选用call? self.call(fn, [...args.concat(argss)])
        // 函数内参数数目不固定，没必要
        // apply 形参 两个，一个 this指向，一个 参数数组
        return self.apply(fn, args.concat(argss))
    }
}
// 简单版本 实现了 传参， 传参分开等。