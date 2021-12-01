new Object(xxx)
var mynew = function(context){
    let args= Array.prototype.slice.call(arguments,1)
    let obj = new Object()
    obj.__proto__ = context.prototype
    let res =context.apply(obj, args)
    return typeof res === 'object'? res:obj
}