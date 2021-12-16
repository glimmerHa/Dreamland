function debouce1(fn, wait){
    let timer
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(timer) clearTimeout(timer)
        timer = setTimeout(function(){
            fn.apply(_this, args)
        },wait)
    }
}
function debouce2(fn, wait,immediate){
    let timer,result
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(timer) clearTimeout(timer)
        if(immediate){
            let call = !timer
            timer = setTimeout(()=>{
                timer = null
            },wait)
            if(call) result = fn.apply(_this,args)
        }else{
            timer = setTimeout(function(){
                fn.apply(_this, args)
            },wait)
        }
        return result
    }
}

function debouce3(fn, wait,immediate){
    let timer,result
    let debounced = function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(timer) clearTimeout(timer)
        if(immediate){
            let call = !timer
            timer = setTimeout(()=>{
                timer = null
            },wait)
            if(call) result = fn.apply(_this,args)
        }else{
            timer = setTimeout(function(){
                fn.apply(_this, args)
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