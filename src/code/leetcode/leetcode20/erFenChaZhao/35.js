/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start  = 0, end= nums.length-1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(target === nums[mid]){
            return mid
        } else if (target > nums[mid]){
            if(target < nums[mid+1] || mid+1 === nums.length){
                return mid+1
            }else{
                start = mid+1
            }
        } else if(target < nums[mid]){
            if(target > nums[mid-1] || mid ===0){
                return mid
            }else{
                end = mid-1
            }
        }
    }
};