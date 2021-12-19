/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let length = nums.length
    let maxIndex =0
    let index = 0
    while(index < length){
        if(maxIndex < index) return false
        maxIndex = Math.max(maxIndex, index+nums[index])
        index++
        if(maxIndex >= length-1) return true
    }
};