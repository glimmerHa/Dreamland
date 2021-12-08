function throttle(fn,wait,options){
    // a = true 要第一次
    // b true 要第一次
    let {a,b} = options
    let prev = 0
    let timer = null
    let result
    let throttled = function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        let now = Date.now()
        if(!timer && a === false) prev = now
        let remaining = wait - (now-prev)
        if(remaining <= 0){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            result =  fn.apply(_this, args)
            prev = now
        }else if(!timer && b === true){
            timer = setTimeout(()=>{
                fn.apply(_this, args)
                clearTimeout(timer)
                timer = null
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