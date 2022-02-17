/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let length = nums.length
    let res = []
    if(length === 0) return res
    let left = 0
        right = length-1
        
    while(left <= right){
        let start = Math.abs(nums[left])
            end = Math.abs(nums[right])
        if(start > end){
            res.unshift(start*start)
            left++
        }else{
            res.unshift(end*end)
            right--
        }
    }
    return res
};