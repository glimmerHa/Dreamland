function debounce(fn,wait,immediate){
    let timer = null;
    let result;
    let debounced = function (){
        let _this =this
        let args = Array.prototype.slice.call(arguments)
        if(timer) clearTimeout(timer)
        if(immediate){
            let now = !timer
            timer = setTimeout(()=>{
                clearTimeout(timer)
                timer = null
            },wait)
            if(now){
                result = fn.apply(_this, args)
            }
        }else{
            timer = setTimeout(()=>{
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