function func(strs){
    if(strs === null || strs.length === 0){
        return ''
    }
    let minLength = 200
    for(let i of strs){
        minLength = Math.min(minLength, i.length)
    }
    console.log('min', minLength)
    let low = 0, high = minLength
    while(low < high){
        let mid = Math.ceil((high -low + 1)/2 + low)
        console.log('mid',mid)
        let flag = isCommon(strs, mid)
        console.log('flag', flag)
        if(flag){
            low = mid
        }else{
            high = mid-1
        }
    }
    console.log('low',low)
    return strs[0].substring(0,low)
}
function isCommon(strs, length){
    let str0 = strs[0].substring(0,length)
    let count = strs.length
    for(let i = 1; i < count; i++){
        let str = strs[i]
        for(let j = 0; j < length; j++){
            if(str0.charAt(j) !== str.charAt(j)){
                return false
            }
        }
    }
    return true
}
console.log(func(["flower","flow","flight"]))