function mynew(context, ...args){
    var constructor = context
    var  o = Object.create(constructor.prototype)
    var res = constructor.apply(o, args)
    return res
}
mynew(functionname,xxxcanshu)

function menew1(){
    var obj =new Object()
    var Con = Array.prototype.shift.call(arguments)
    obj.__proto__ = Con.prototype
    var res = Con.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}