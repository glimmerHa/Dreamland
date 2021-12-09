// 构造函数效果的模拟实现。
//bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效
// 但传入的参数依然生效。
Function.prototype.bind1 = function(fn){
    // 函数本身，最终是要改变 self 的this值
    let self = this
    //通过 修改返回的函数的原型
    let args = Array.prototype.slice.call(arguments, 1)
    let fBound = function(){
        let argss = Array.prototype.slice.call(arguments)
        //当作为构造函数时，this 指向实例，此时结果为 true，
        // 将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        return self.apply(this instanceof fBound? this:fn,args.concat(argss))
    }
    // 对象引用，指向同一个 堆地址
    fBound.prototype = this.prototype
    return fBound
}
Function.prototype.bindw = function(fn){
    // 函数本身，最终是要改变 self 的this值
    let self = this
    //通过 修改返回的函数的原型
    let args = Array.prototype.slice.call(arguments, 1)
    let fn = function(){}
    
    let fBound = function(){
        let argss = Array.prototype.slice.call(arguments)
        //当作为构造函数时，this 指向实例，此时结果为 true，
        // 将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        return self.apply(this instanceof fn? this:fn,args.concat(argss))
    }
    // 对象引用，指向同一个 堆地址
    fn.prototype = this.prototype
    fBound.prototype = new fn()
    return fBound
}
var value = 2;
var foo = {
    value:1
}
function bar(name,age){
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
