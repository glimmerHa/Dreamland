// 实现 add(1)(2)(3)
// const add = x=>y=>z=>x+y+z
// console.log(add(1)(2)(3))
//add(1,2,3)
//add(1,2)(3)
// add(1)(2)(3)
function curry(fn,...args){
    if(args.length >= fn.length){
        return fn(...args)
    }else{
        return function(...argss){
            return curry(fn,...args,...argss)
        }
    }
}
function jian(x,y,z){
    return x-y-z
}
let a = curry(jian)(10,2)(3)
console.log(a)