/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let result = []
    let left = 0, right = nums.length-1
    while(left<= right){
        let leftR = nums[left]*nums[left]
        let rightR = nums[right]*nums[right]
        if(leftR >=rightR){
            result.unshift(leftR)
            left++
        }else{
            result.unshift(rightR)
            right--
        }
    }
    return result
};