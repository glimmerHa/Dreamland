//39. 组合总和  搜索回溯  dfs
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ans = []
    // ans.push([xxx,xx,xx])
    var dfs = function(target, res, index){
        if(index === candidates.length) return;
        if(target === 0){
            ans.push(res)
            return
        }
        dfs(target, res, index+1)
        if(target - candidates[index] >= 0){
            dfs(target-candidates[index], [...res,candidates[index]], index)
        }
    }
    dfs(target, [], 0)
    return ans
};