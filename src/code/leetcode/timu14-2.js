function func(strs){
    if(strs === null || strs.length === 0){
        return ''
    }
    let minLength = 200
    for(let i of strs){
        minLength = Math.min(minLength, i.length)
    }
    let count = strs.length
    let ans = strs[0].substring(0,minLength)
    
    for(let i = 1; i < count; i++){
        console.log('ans',ans)
        for(let j = 0; j < minLength; j++){
            if(strs[i].charAt(j) !== ans.charAt(j)){
                minLength = j
                ans = strs[i].substring(0,minLength)
            }
        }
    }
    return ans
}
console.log(func(["flower","flow","flight"]))