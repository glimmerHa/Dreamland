/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let index = nums.length-1
    let sum = new Array(nums.length).fill(nums[index])
    let arr = new Array(nums.length).fill(index)
    while(index >= 0){
        if(sum[index+1] > 0){
            sum[index]= nums[index]+sum[index+1]
            arr[index] = arr[index+1]
        }else{
            sum[index] = nums[index]
            arr[index] = index
        }
        index--
    }
    let max = Math.max(...sum)
    let zi = nums.slice(sum.indexOf(max), arr[sum.indexOf(max)]+1)
    return max
}; 
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))