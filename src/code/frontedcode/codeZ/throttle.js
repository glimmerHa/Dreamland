// 时间戳
function throttle1(fn,wait){
    let prev = 0
    return function(){
        let _this = this
        let args = arguments
        let now = Date.now()
        if(now-prev>=wait){
            fn.apply(_this,args)
            prev = now
        }
    }
}
function throttle2(fn,wait){
    let timer = null
    return function(){
        let _this = this
        let args = arguments
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(_this,args)
                clearTimeout(timer)
                timer = null
            },wait)
        }
    }
}
function throttle3(fn,wait){
    let timer = null
    let prev = 0
    let result
    return function(){
        let _this = this
        let args = arguments
        let now = Date.now()
        let remaining = wait - (now - prev)
        if(remaining <= 0 || remaining > wait){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            result= fn.apply(_this,args)
            prev = now
        }else if(!timer){
            timer = setTimeout(()=>{
                result= fn.apply(_this,args)
            },remaining)
        }
        return result
    }
}


function throttle(fn,wait,options){
    let timer = null
    let prev = 0
    let result
    let throttled = function(){
        let _this = this
        let args = arguments
        let now = Date.now()
        if(!timer && options.one === false) prev=now
        let remaining = wait - (now - prev)
        if(remaining <= 0 || remaining > wait){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            result= fn.apply(_this,args)
            prev = now
        }else if(!timer && options.last !== false){
            timer = setTimeout(()=>{
                result= fn.apply(_this,args)
                clearTimeout(timer)
                timer= null
                prev = Date.now()
            },remaining)
        }
        return result
    }
    throttled.cancel = function(){
        clearTimeout(timer)
        timer = null
        prev = 0
    }
    return throttled
}