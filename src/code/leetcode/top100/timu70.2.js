/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n ===0) return 1
    if(n===1) return 1
    let dp = [1, 2]
    for(let i = 2; i<= n; i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n-1]
};