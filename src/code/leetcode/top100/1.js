/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m = grid.length
    if(m === 0) return 0
    let n = grid[0].length
    if(n ===0) return 0
    let dp = []
    for(let i = 0; i < m; i++){
        dp.push([])
        for(let j = 0; j < n; j ++){
            dp[i][j] = 0
        }
    }
    dp[0][0] = grid[0][0]
    for(let i = 1; i < dp.legnth; i++){
        dp[i][0] = dp[i-1][0]+grid[i][0]
    }
    for(let  i = 1; i < dp[0].length; i++){
        dp[0][i] = dp[0][i-1]+grid[0][i]
    }
    for(let i = 1; i< m;i++){
        for(let j = 1;  i < n; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        }
    }
    return dp[m-1][n-1]
    
   
}