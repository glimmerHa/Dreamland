Function.prototype.myapply = function(context){
    context = context || window
    context.fn = this
    let res
    if(arguments[1]){
        let args = Array.prototype.slice.call(arguments[1])
        console.log(...args)
        res = context.fn(...args)
    }else{
        res = context.fn()
    }
    delete context.fn
    return res
}
var a = {
    b:1
}
var b = 2
function func(a){
    console.log('canshu',a)
    console.log('b',this.b)
}
// func([1,2,3])
func.myapply(a, [1,2,3])