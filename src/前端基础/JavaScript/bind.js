// 第一个版本ok 的
Function.prototype.mybind=function(context){
    let self = this
    let args1 = Array.prototype.slice.call(arguments,1)
    return function(){
        console.log(self)
        console.log(this)
        args = args1.concat(Array.prototype.slice.call(arguments))
        return self.apply(context, args) // []
    }
}
// 最终版本不太会
// 如果this 不是函数，直接报错
Function.prototype.mybind = function(context){
    let self = this
    if(typeof self !=='function'){
        throw new Error('function .proto is error')
    }
    let args = Array.prototype.slice.call(arguments,1)
    let fnop = function(){}
    let fn = function(){
        let argsAll = args.concat(Array.prototype.slice.call(arguments) ) 
        return self.apply(this instanceof fnop? this: context,argsAll)
    }
    fnop.prototype = this.prototype
    fn.prototype = new fnop()
    return fn
}