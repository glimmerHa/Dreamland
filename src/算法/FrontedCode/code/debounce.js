// 防抖

// 第一版本
let timer = null
function debounce(fn, wait){
    // 当一直操作，都会重新清除定时器，赋值定时器，直到停止操作，才会 在 wait单位后执行 定时器内的功能内容
    clearTimeout(timer)
    timer=setTimeout(function(){
        fn()
        // 执行后，会残留 timer 定时器变量
    },wait)
}
// 精简代码： 普通函数变箭头函数，能一行表达不多行表达
let timer = null
function debounce(fn, wait){
    // 当一直操作，都会重新清除定时器，赋值定时器，直到停止操作，才会 在 wait单位后执行 定时器内的功能内容
    clearTimeout(timer)&&(timer=setTimeout(()=>fn(),wait))
}

// 第一版本
// 基本实现了防抖的思想
// 缺陷是什么？ 一个全局变量 timer ,一个全局函数 debounce。是否可以进行 变量封装

// 第二版本
function debounce(fn,wait){
    let timer = null;
    return function(){
        let args = arguments
        if(timer){
            clearTimeout(timer)
        }
        //1
        // 箭头函数下，this 是外面的
        timer = setTimeout(()=>{
            fn.apply(this, args)
        },wait)
        // 2
        // 如果要使用普通函数
        // let _this = this
        // timer = setTimeout(function(){
        //     fn.apply(_this,args)
        // },wait)
    }
}
// 精简代码
function debounce(fn,wait){
    let timer = null;
    return (...args)=>{
        clearTimeout(timer)&&(timer = setTimeout(()=>fn.apply(this, args),wait))
    }
}