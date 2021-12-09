/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let map = new Map()
    let length = nums.length
    let count = Math.ceil(length/2)
    for(let i =0; i<length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    for(let [key,val] of map.entries()){
        if(val >= count){
            return key
        }
    }
};