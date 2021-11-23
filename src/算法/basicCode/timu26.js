// 在原数组上运算，删除有序数组的重复项，并返回长度
var removeDuplicates = function(nums) {
    if(nums===null || nums.length === 0) return 0
    let len = nums.length
    let index = 1,slow = 1
    while(index < len){
        if(nums[index] !== nums[index-1]){
            nums[slow] = nums[index]
            slow++
        }
        index++
    }
    console.log(nums)
    return slow
};
console.log(removeDuplicates([1,1,2]))