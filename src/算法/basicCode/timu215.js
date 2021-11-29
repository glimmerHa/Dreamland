//215. 数组中的第K个最大元素
// 快速排序完成
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    if(nums.length - k <0){return false}
    let tindex = nums.length - k
    let quickSort = function (nums, start,tindex){
        let pivot = nums[0]
        let left = [],right = []
        for(let i = 1,len = nums.length; i < len; i++){
            if(nums[i]< pivot){
                left.push(nums[i])
            }else{
                right.push(nums[i])
            }
        }
        if(left.length+start === tindex){
            return pivot
        }else if(left.length+start > tindex){
            return quickSort(left, start,tindex)
        }else{
            return quickSort(right,left.length+start+1,tindex)
        }
    }
    return quickSort(nums, 0,tindex)
};



console.log(findKthLargest([3,2,3,1,2,4,5,5,6]))