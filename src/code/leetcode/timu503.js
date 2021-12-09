// 单调栈： 496 503  739
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1)
    let stack = []
    let n = nums.length
    for(let i = 2*n-1; i >= 0; i--){
        while(stack.length &&stack[stack.length-1]<= nums[i%n]){
            stack.pop()
        }
        res[i%n] = stack.length?stack[stack.length-1]:-1
        stack.push(nums[i%n])
    }
    return res
};