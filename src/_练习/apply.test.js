Function.prototype.myapply = function(context){
    context = context || window
    context.fn = this
    let res
    if(arguments[1]){
        let args = arguments[1]
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
func.myapply(a)