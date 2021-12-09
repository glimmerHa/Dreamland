// 双指针方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let length = nums.length
    if(!length) return [-1,-1]
    let a=-1, b = -1
    let start = 0, end = length-1
    while(start <= end && (a === -1 || b === -1)){
        if(nums[start] === target &&a === -1){
            a = start
        }
        if(nums[end] === target && b===-1){
            b = end
        }
        if(a === -1){
            start++
        }
        if(b === -1){
            end--
        }
    }
    return [a,b]
};