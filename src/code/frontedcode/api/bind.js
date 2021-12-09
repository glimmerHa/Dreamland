var foo = {
    value:1
}
function bar(){
    console.log(this.value);
    return this.value
}
var bindFoo = bar.bind(foo)
//指定 this 的指向， call apply 来实现
Function.prototype.bind1 = function(fn){
    // 函数本身
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)
    return function(...argss){
        var argss = Array.prototype.slice.call(arguments)
        return self.apply(fn, args.concat(argss))
    }
}