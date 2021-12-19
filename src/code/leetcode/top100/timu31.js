/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let length = nums.length;
    if(length <= 1) return nums
    let i = length -2
    // 找一个较小的数，尽量靠右，所以从尾开始
    while(i >=0 && nums[i] >= nums[i+1]){
        i--
    }
    if(i >=0){
        let j = length -1
        // 找一个较大的数，从尾开始
        while(j > i && nums[i] >= nums[j]){
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    let start = i+1
    let end = length-1
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
    return nums
};