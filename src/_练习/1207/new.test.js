function mynew(){
    let Cons = Array.prototype.shift.call(arguments)
    let obj = Object.create(Cons.prototype)
    let res = Cons.apply(obj, ...arguments)
    return typeof res ==='object'? res:obj
}