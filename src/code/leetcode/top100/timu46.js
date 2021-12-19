// 46. 全排列 深度优先
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = []
    let dfs = function(reslen, res){
        if(reslen ===0){
            ans.push(res)
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(!res.includes(nums[i])){
               dfs(reslen-1, [...res,nums[i] ]) 
            }
        }
    }
    for(let i = 0; i < nums.length; i ++){
        dfs(nums.length-1,[nums[i]])
    }
    return ans
};