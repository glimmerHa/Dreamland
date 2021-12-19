// 广度优先 BFS
function func(digits){
    if(digits === null || digits.length ===0) return []
    const map = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }
    const queue = [];
    queue.push('');
    for(let i =0; i < digits.length;i++){
        const levelSize = queue.length;
        for(let j=0; j < levelSize;j++){
            const curStr = queue.shift()
            const letters = map[digits[i]]
            for(const l of letters){
                queue.push(curStr+l)
            }
            console.log('queue',queue)
        }
    }
    return queue
}
console.log(func('23'))