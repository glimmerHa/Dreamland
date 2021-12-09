// 广度优先
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let row = grid.length
    if(!row) return 0
    let line = grid[0].length
    let count = 0
    
    for(let i = 0; i< row;i++){
        for(let j = 0; j < line;j++){
            if(grid[i][j] === '1'){
                ++count
                grid[i][j] = '0'
                let queue = []
                queue.push([i,j])
                while(queue.length){
                    let [r,c] = queue.shift()
                    if(r-1>=0&& grid[r-1][c] === '1')queue.push([r-1,c])&&(grid[r-1][c]='0')
                    if(r+1<row && grid[r+1][c] === '1') queue.push([r+1,c])&&(grid[r+1][c]='0')
                    if(c-1 >=0 &&grid[r][c-1]==='1') queue.push([r,c-1])&&(grid[r][c-1]='0')
                    if(c+1 < line && grid[r][c+1] === '1') queue.push([r,c+1])&&(grid[r][c+1]='0')
                }
            }
        }
    }
    return count
};