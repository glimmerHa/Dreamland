Function.prototype.mycall = function(context){
    context = context || window
    context.fn = this
    // const args = [...arguments].slice(1)//
    let args = Array.prototype.slice.call(arguments,1)
    const res = context.fn(...args)
    delete context.fn
    return res
}
var a = {
    b:1
}
var b = 2
function func(a){
    console.log('a',a)
    console.log('b',this.b)
}
func.mycall(a,2)

// Function.prototype.mycall = function(_this, ...args){
//     if(!_this) _this = Object.create(null)
//     _this.fn = this
//     const res = _this.fn(...args)
//     delete _this.fn
//     return res
// }
// var obj = {
//     name:'huafgtao'
// }
// function getName(val1,val2,val3){
//     console.log(val1,val2,val3)
//     console.log(this.name)
//     return 'aa'
// }
// getName.mycall(obj,1,2,3)