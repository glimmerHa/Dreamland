/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let length = nums.length
    let i=length-2;
    while(i >=0 && nums[i] >= nums[i+1]){
        i--
    }
    if(i>=0){
        let j = nums.length - 1;
        while(j > i && nums[i] >= nums[j]){
            j--
        }
        [nums[i], nums[j]] = [nums[j],nums[i]]
    }
    let start = i+1;
    let end = length-1
    while(start < end){
        [nums[start], nums[end]] = [nums[end],nums[start]]
        start++
        end--
    }
    return nums   
};