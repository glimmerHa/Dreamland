// 时间戳版本
function throttle(fn,wait){
    let prev = 0
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        let now = Date.now()
        if(now - prev >= wait){
            fn.apply(_this,args)
            prev = now
        }
    }
}
//定时器版本
function throttle(fn,wait){
    let timer
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(!timer) {
            timer =setTimeout(function(){
                fn.apply(_this,args)
                clearTimeout(timer)
                timer = null
            },wait)
        }
    }
}
// 首次触发，借助时间戳
function throttle(fn,wait){
    let timer,result
    let prev = 0
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        let now = Date.now()
        let remain = (now - prev) - wait
        if(remain <= 0){
            if(timer){
                setTimeout(timer)
                timer = null
            }
            result = fn.apply(_this,args)
            prev = now
        }else if(!timer){
            timer = setTimeout(function(){
                fn.apply(_this,args)
                setTimeout(timer)
                timer = null
                prev = Date.now()
            },remain)
        }
        return result
    }
}

function throttle(fn,wait,options){
    let {a,b} = options
    // a = true 要首次
    // b = true 要最后一次
    let timer,result
    let prev = 0
    let throttled = function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        let now = Date.now()
        if(!prev && a === false) prev = now
        let remain =wait- (now - prev)
        if(remain <= 0){
            if(timer){
                setTimeout(timer)
                timer = null
            }
            result = fn.apply(_this,args)
            prev = now
        }else if(!timer){
            timer = setTimeout(function(){
                fn.apply(_this,args)
                setTimeout(timer)
                timer = null
                prev = Date.now()
            },remain)
        }
        return result
    }
    throttled.cancel = function(){
        clearTimeout(timer)
        timer = null
        prev =0
    }
    return throttled
}
