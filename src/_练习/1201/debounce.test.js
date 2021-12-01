function debounce(fn ,wait){
    let timer = null
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(_this,args)
        },wait)
    }
}
// 升级版本，立即执行
function debounce(fn ,wait,immediate){
    let timer = null
    let result;
    return function(){
        let _this = this
        let args = Array.prototype.slice.call(arguments)
        if(timer) clearTimeout(timer)
        if(immediate){
            let now = !timer
            timer = setTimeout(()=>{
                timer = null
            },wait)
            if(now){
                result = fn.apply(_this, args)
            }
        }else{
            timer = setTimeout(()=>{
                fn.apply(_this,args)
            },wait)
        }
    }
}