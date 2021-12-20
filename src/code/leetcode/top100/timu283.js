/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let length = nums.length
    if(length ===0) return []
    let p0 = 0,p1 = 0
    while(p1 <  length){
        if(nums[p1]){
            [nums[p0], nums[p1]] = [nums[p1], nums[p0]]
            p0++
        }
        p1++
    }
    return nums
};