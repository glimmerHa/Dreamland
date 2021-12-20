/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let length = nums.length
    if(length ===0) return 0
    for(let i = 0; i < length; i++){
        let l = nums.indexOf(nums[i])
        let r = nums.lastIndexOf(nums[i])
        if(l === r){
            return nums[i]
        }
    }
};