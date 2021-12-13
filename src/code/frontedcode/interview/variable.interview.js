// 变量提升题1
/*
if( !("a" in window) ){
    // var 变量提升 相当于 window.a = undefined 所以 if判断是 !true = false
    // 导致，a一直都没有赋值为 12
    var a = 12
}
console.log(a)  // undefined
*/

// 变量提升题2
console.log(a) // 全局作用域下, 变量提升
var a = '林一一'
function fn(){
    console.log(a)
    var a = 12 // 函数作用域内，变量提升
}
fn()
// 全局作用域下 a
console.log(a)
// output:undefined
// output:undefined
// output:林一一

// 变量提升题3
console.log(a)
var a = '林一一'
function fn(){
    console.log(a) // 函数作用域内无该变量，作用域链向上找：全局作用域变量值
    a = 12 // 没有变量声明符号，所以是修改全局作用域下 的 a变量
}
fn() // 执行过，全局a 修改了值
console.log(a)// 全局作用域 a
// output:undefined
// output:林一一
// output:12

// 变量提升 + var 没有局部作用域
var a = '林一一'
function fn(){
    // var 没有局部作用域，所以 函数内有 有a 变量，且变量提升 a= undefined
    // !a  = true
    if(!a){
        var a = 12
    }
    console.log(a) // 输出 函数内a
}
fn()
// output: 12


var a=12, b = 13, c = 14
function fn(a){
    a = 0 // 改形参a
    var b = 0 // 声明 函数内b
    c = 0 // 改c 
}
fn(a)// 参数是 全局a
// 输出都是全局的
console.log(a) // 12
console.log(b) // 13
console.log(c) // 0
