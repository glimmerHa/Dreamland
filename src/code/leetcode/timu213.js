// 环 打家劫舍，将其拆为两种情况
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let length = nums.length
    if(length === 1) return nums[0]
    if(length === 2) return Math.max(nums[0],nums[1])
    return Math.max(robsub(nums, 0, length-2),robsub(nums, 1, length-1))
};
var robsub = function(nums, start,end){
    let dp = [nums[start], Math.max(nums[start], nums[start+1])]
    let a =nums[start]
    let b = Math.max(nums[start], nums[start+1])
    for(let i = start+2; i<=end;i++){
        let temp = b
        b = Math.max(temp, a+nums[i])
        a = temp
    }
    return b
}
