function throttle1(fn,wait){
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

function throttle2(fn,wait){
    let timer = null
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(_this,args)
                clearTimeout(timer)
                timer = null
            },wait)
        }
    }
}

function throttle3(fn,wait,options){
    let {a, b} = options
// a 首次 b最后一次
    let timer = null
    let prev = 0;
    let result
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        let now = Date.now()
        if(!timer && a === false) prev = now
        let remain =wait-(now - prev ) 
        // 有首次
        if(remain <= 0 || remain > wait){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            result = fn.apply(_this,args)
            prev = now
        }else if(!timer && b!==false){
            // 有最后一次
            timer = setTimeout(()=>{
                fn.apply(_this,args)
                clearTimeout(timer)
                timer = null
            },remain)
        }
        return result
    }
}