/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    var lookfor = function(start,end, target){
        if(start <= end){
            let mid = Math.floor((start+end)/2)
            if(target === nums[mid]){
                return mid
            }else if(target > nums[mid]){
                return lookfor(mid+1, end, target)
            }else if(target < nums[mid]){
                return lookfor(start, mid-1,target)
            }
        }
        else{
            return -1
        }
    }
    return lookfor(0,nums.length-1, target)
};