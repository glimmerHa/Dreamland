/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let total = 0
    for(let c of jewels){
        let arr = stones.split('')
        let curCount = 0
        for(let i =0, len = arr.length; i<len;i++){
            if(c === arr[i]){
                curCount +=1
            }
        }
        total+=curCount
    }
    return total
};