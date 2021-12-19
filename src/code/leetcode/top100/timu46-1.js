// 广度优先遍历
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = []
    let queue = [[]]
    while(queue.length){
        let res = queue.shift()
        if(res.length ===nums.length){
            ans.push(res)
        }
        for(let i = 0; i < nums.length; i++){
            if(!res.includes(nums[i])){
                queue.push([...res, nums[i]])
            }
        }
    }
    return ans
};