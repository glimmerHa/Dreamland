Function.prototype.apply1 = function(context){
    var context = context || window
    context.fn = this
    var res
    if(arguments[1]){
        let args = Array.prototype.slice.call(arguments,1)
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
function func(a,c){
    console.log('canshu',a)
    console.log(c)
    console.log('b',this.b)
}
// func([1,2,3])
func.apply1(a, [1,2,3],'huangtao')