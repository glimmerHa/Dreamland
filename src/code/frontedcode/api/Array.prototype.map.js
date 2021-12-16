Array.prototype.map1 = function(fn,context){
    if(typeof fn !== 'function') throw new Error('第一个参数请设置成函数')
    let arr = this // this指向调用只
    let ctx = context? context:arr
    let result = []
    for(let i = 0, len = arr.length; i< len; i++){
        result.push(fn.call(ctx,arr[i], i, arr))
    }
    return result
}
// 调用关系
let arr = [1,2,3]
let src = {}
console.log(arr.map1((item,)=>{
    return item*item
}, src))