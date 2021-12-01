function curry(fn, ...args){
    if(args.length >=fn.length){
        return fn(...args)
    }else{
        return function(...argss){
            return curry(fn,...args,...argss)
        }
    }
}
var add = function(x,y,z){
    return x+y+z
}
var add1 = curry(add, 1)
console.log(add1(2,3))