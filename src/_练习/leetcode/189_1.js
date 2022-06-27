/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    function reverse(left, right){
        // let left =0 , right = arr.length-1
        while(left <= right){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
    let n = nums.length
    k = k%n
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)
    return nums
};