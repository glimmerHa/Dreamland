// 空间换时间
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels.split(''))
    return stones.split('').reduce((prev,val)=>{
        return prev+(set.has(val)?1:0)
    },0)
};