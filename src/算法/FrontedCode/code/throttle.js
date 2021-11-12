// 节流 
// 第一版本
let timer = null
function throttle(fn,wait){
    if(timer) return
    timer = setTimeout(()=>{
        fn()
        clearTimeout(timer)
        timer = null
    },wait)
}

// 考虑维护全局纯净，可以借助闭包来实现
function throttle(fn,wait){
    let timer = null;
    return function(){
        let args = arguments
        let _this = this
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(_this, args)
            clearTimeout(timer)
            timer = null
        },wait)
    }
}
// 考虑用时间戳实现
function throttle(fn,wait){
    let prev = 0
    return function (){
        let args = arguments
        let _this = this
        let now = Date.now()
        // 首次会执行一次，这种取巧的设置，挺好
        if(now - prev > wait) {
            fn.apply(_this, args)
            prev = now
        }
    }
}