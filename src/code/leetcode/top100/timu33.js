//33. 搜索旋转排序数组
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let len = nums.length
    if(!len) return -1
    if(len ==1) return nums[0]===target? 0:-1
    let start = 0,end = len-1
    while(start <= end){
        let mid = Math.ceil((start+end)/2)
        if(nums[mid] === target) return mid
        if(nums[start] < nums[mid]){
            if(target < nums[mid] && target >= nums[start]){
                end = mid-1
            }else{
                start = mid+1
            }
        }else{
            if(target <= nums[end] && target>nums[mid] ){
                start = mid+1
            }else{
                end = mid-1
            }
        }
    }
    return -1
};