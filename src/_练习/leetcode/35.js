/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let pre = -1, next = -1;
    let left = 0, right = nums.length-1
    while(left<= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid]> target){
            next = mid
            right = mid-1
        }else if(nums[mid] < target){
            pre = mid
            left = mid+1
        }
    }
    if(pre>=0) return pre+1
    if(next>=0) return next
};