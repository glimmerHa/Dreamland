// 深度优先 DFS
function func(n){
    let res = []
    function dfs(l,r,str){
        if(str.length === n*2){
            return res.push(str)
        }
        if(l > 0 ){
            dfs(l-1, r, str+'(')
        }
        if(r>l){
            dfs(l,r-1,str+')')
        }
    }
    dfs(n,n,'')
    return res
}
console.log('func',func(3))