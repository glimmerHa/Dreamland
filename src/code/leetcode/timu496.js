// 单调栈： 496 503  739
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums2.length).fill(0)
    let stack = []
    for(let i = nums2.length-1; i >=0; i--){
        while(stack.length && stack[stack.length-1] <= nums2[i]){
            stack.pop()
        }
        res[i] = stack.length? stack[stack.length-1]:-1
        stack.push(nums2[i])
    }
    let result = []
    for(let val of nums1){
        let index = nums2.indexOf(val)
        result.push(res[index])
    }
    return result
};