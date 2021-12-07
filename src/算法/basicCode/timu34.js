//34. 在排序数组中查找元素的第一个和最后一个位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let length = nums.length
    if(!length) return [-1,-1]
    let start = nums.indexOf(target)
    let end = nums.lastIndexOf(target)
    return [start, end]
};