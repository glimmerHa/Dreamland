// 参考：https://github.com/mqyqingfeng/Blog/issues/11
// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
/*
var value = 2
var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}
bar()// 浏览器下，2
bar.call(foo); // 1
 */
// 注意两点：
// call 改变了 this 的指向，指向到 foo
// bar 函数执行了
Funtion.prototype.call1 = function(context){
    var context = context || window
    context.fn = this

    let args = Array.prototype.slice.call(arguments,1)
    const res = context.fn(...args)
    delete context.fn
    // 
    var args = []
    for(var i = 1; i< arguments.length;i++){
        args.push('arguments['+i+']')
    }
    // 执行后 args为 ["arguments[1]", "arguments[2]", "arguments[3]"]
    var result = eval('context.fn(' + args +')');

    return res
}