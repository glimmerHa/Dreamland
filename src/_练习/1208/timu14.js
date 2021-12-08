function func(strs){
    if(strs === null ||strs.length ===0) return ''
    let minLength = 200
    for(let i of strs){
        minLength = Math.min(minLength, i.length)
    }
    let length =  strs.length;
    let ans = strs[0].substring(0,minLength)
    for(let i = 1; i< length;i++){
        for(let j =0; j < minLength; j++){
            if(strs[i].charAt(j) !== ans.charAt(j)){
                minLength = j
                ans = strs[0].substring(0,minLength)
                break;
            }
        }
    }
    return ans
}
function demo(nums){
    if(nums.length ===0) return ''
    let minLength = Number.MAX_VALUE;
    for(let i of strs){
        minLength = Math.min(minLength, i.length)
    }
    let ans = nums[0].substring(0,minLength)
    let length = nums.length
    for(let i = 1; i < length; i++){
        for(let j = 0; j < minLength; j++){
            if(nums[i].charAt(j) !== ans.charAt(j)){
                minLength = j
                console.log('minLength',minLength)
                ans = nums[0].substring(0,minLength)
            }
        }
    }
    return ans
}
console.log(demo(["flower","floe","flight"]))