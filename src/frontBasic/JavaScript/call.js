Function.prototype.mycall= function(context){
    context = context || window
    // getValue.call(a, 'yck', '24') => a.fn = getValue
    context.fn = this // 函数
    const res = context.fn(...[...arguments].slice(1))
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