Array.prototype.map = function(fn,src){
    let arr = this
    if(!Array.isArray(arr) || !arr.length || typeof fn !=='function')
    throw new Error('δΈεθ§θ')
    let context = src? src:arr
    let result = []
    for(let i =0; i < arr.length; i++){
        result.push(fn.call(context, arr[i],i,arr))
    }
    return result
}