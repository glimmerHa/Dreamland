// 深度优先搜索
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let row = grid.length
    let line = grid[0].length
    let count = 0
    let  dfs= function(grid,r,c){
        let row = grid.length
        let line = grid[0].length
        grid[r][c] = '0'
        if(r-1>=0&& grid[r-1][c] === '1') dfs(grid,r-1,c)
        if(r+1<row && grid[r+1][c] === '1') dfs(grid,r+1, c)
        if(c-1 >=0 &&grid[r][c-1]==='1') dfs(grid,r,c-1)
        if(c+1 < line && grid[r][c+1] === '1') dfs(grid,r,c+1)
    }
    for(let i = 0; i< row;i++){
        for(let j = 0; j < line;j++){
            if(grid[i][j] === '1'){
                ++count
                dfs(grid, i,j)
            }
        }
    }
    return count
};