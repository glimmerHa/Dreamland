/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const [m,n] = [grid.length,grid[0].length]
    let dp = []
    // 构建dp为所求结果的数组
    for(let i=0;i<m;i++){
        dp.push([])
        for(let j=0;j<n;j++){
           dp[i][j] = 0  
        }
    }
    // 第一个值的解
    dp[0][0] = grid[0][0] 
    // 第一列的解
    for(let i=1;i<dp.length;i++){
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }
    // 第一行的解
    for(let j=1;j<dp[0].length;j++){
        dp[0][j] = dp[0][j-1] + grid[0][j]
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
           dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
        }
    }  
    return dp[m-1][n-1]

}