var twoSum = function(nums, target) {
    // 统一返回值为数组，空数组和数组
    let ans = []
    if(nums.length <2) return ans
    let map = new Map()
    for(let i =0, len = nums.length; i< len;i++){
        let val = target-nums[i]
        if(map.has(val)){
            ans.push(map.get(val), i)
            return ans
        }
        map.set(nums[i],i)
    }
    return ans
};
let nums = [2,2,11,15]
let target = 9
console.log(twoSum(nums, target))