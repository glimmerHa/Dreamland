Array.prototype.reduce1 = function(fn,initData){
    // 是否符合条件
    let arr = this
    if(typeof fn !== 'function') throw new Error('第一个参数请设置成函数')
    let length = arr.length
    if(!length) throw new Error('数组长度为0，不可以用')
    let acc, curIndex,curVal
    if(arguments[1]){
        acc = initData
        curIndex = 0
    }else{
        acc = arr[0]
        curIndex = 1
    }
    while(curIndex < length){
        curVal = arr[curIndex]
        acc  = fn(acc,curVal, curIndex, arr)
        curIndex++
    }
    return acc
}
// 调用关系
let arr = [1,2,3,5,6,8]
let src = {}
console.log(arr.reduce1((acc,item,index,src)=>{
    return acc+item
}, 0))