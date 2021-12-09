// 广度优先
function func(n){
    let queue = []
    queue.push('(')
    let set = new Set()
    while(queue.length > 0){
        let cur = queue.shift()
        let arr = cur.split('')
        let left = arr.filter(item=>item ==='(').length
        let right = arr.filter(item=>item===')').length
        if(left === n && right ===n){
            set.add(cur)
        }
        if(left < n){
            queue.push(cur+'(')
        }
        if(right <n && right<left) {
            queue.push(cur+')')
        }
    }
    return set
}
console.log('func',func(3))