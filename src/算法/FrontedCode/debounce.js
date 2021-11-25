function debounce1(fn,wait){
    let timer = null
    return function(){
        let _this = this
        let args = arguments
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(_this,args)
        },wait)
    }
}
function debounce2(fn,wait,immdiate){
    let timer = null
    let result
    return function(){
        let _this = this
        let args = arguments
        if(timer) clearTimeout(timer)
        if(immdiate){
            let call = !timer
            timer = setTimeout(()=>{
                timer = null
            },wait)
            if(call) result = fn.apply(_this,args)
        }else{
            timer = setTimeout(()=>{
                fn.apply(_this,args)
            },wait)
        }
        return result
    }
}
function debounce(fn,wait,immdiate){
    let timer = null
    let result
    let debounced = function(){
        let _this = this
        let args = arguments
        if(timer) clearTimeout(timer)
        if(immdiate){
            let call = !timer
            timer = setTimeout(()=>{
                timer = null
            },wait)
            if(call) result = fn.apply(_this,args)
            prev = now
        }else{
            timer = setTimeout(()=>{
                fn.apply(_this,args)
                prev = Date.now()
                clearTimeout(timer)
                timer = null
            },wait)
        }
        return result
    }
    debounced.cancel = function(){
        clearTimeout(timer)
        timer = null
    }
    return debounced
}