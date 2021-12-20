/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let map = new Map()
    for(let i =0, len = nums.length; i< len; i++){
        map.set(nums[i], (map.get(nums[i])|| 0) +1)
    }
    let ans = 0
    for(let [key,val] of map.entries()){
        if(val ===1){
            ans = key
            break;
        }
    }
    return ans
};

